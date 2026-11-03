# -*- coding: utf-8 -*-
"""Monta o Excel do robo verificador de precos a partir do TSV lido da aba do UpSeller.
Uso: python build_report.py data.tsv saida.xlsx
"""
import json, sys, datetime
from collections import OrderedDict
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

tsv_path, out_path = sys.argv[1], sys.argv[2]

sections = OrderedDict()
cur = None
with open(tsv_path, encoding='utf-8') as f:
    for line in f:
        line = line.rstrip('\n')
        if not line:
            continue
        if line.startswith('#'):
            parts = line.split('\t')
            cur = parts[0][1:]
            sections[cur] = {'header': parts[1:], 'rows': []}
            if cur == 'META':
                sections[cur]['meta'] = json.loads(parts[1])
            continue
        if cur:
            sections[cur]['rows'].append(line.split('\t')[1:])

meta = sections['META']['meta']
summary, counts = meta['summary'], meta['counts']
ts = datetime.datetime.fromisoformat(meta['ts'].replace('Z', '+00:00')).astimezone(datetime.timezone(datetime.timedelta(hours=-3)))
data_str = ts.strftime('%d/%m/%Y %H:%M')

PL = {'ML': 'Mercado Livre', 'SP': 'Shopee', 'TK': 'TikTok Shop'}
LINE = {'M': 'Led (-M)', 'X': 'Xenon (-X)'}
REASON = {
    'ML_PROMO': 'ML em promoção: o Mercado Livre recusa a troca de preço enquanto a promoção estiver ativa (tirar da promoção antes)',
    'SP_PROMO': 'Shopee em promoção: fica como está (decisão de 22/10/2026)',
    'TK_REVIEW': 'TikTok em revisão: refazer depois de aprovado',
    'MULTI_BLOCK': 'SKU em veículos diferentes (2 blocos de preço): conferir à mão, o preço modal não serve de base',
}
STORES = ['SS LIGHT', 'Isadora ML', 'SSS Shopee', 'JhonJhon Parts', 'SSS LIGHT TIKTOK', 'ISA TIK TOK']

FONT = 'Arial'
thin = Side(style='thin', color='BFBFBF')
BORDER = Border(left=thin, right=thin, top=thin, bottom=thin)
HEAD_FILL = PatternFill('solid', fgColor='1F3864')
HEAD_FONT = Font(name=FONT, bold=True, color='FFFFFF', size=10)
TITLE_FONT = Font(name=FONT, bold=True, size=14, color='1F3864')
SUB_FONT = Font(name=FONT, italic=True, size=9, color='595959')
BODY = Font(name=FONT, size=10)
BOLD = Font(name=FONT, size=10, bold=True)
OK_FILL = PatternFill('solid', fgColor='E2EFDA')
WARN_FILL = PatternFill('solid', fgColor='FFF2CC')
BAD_FILL = PatternFill('solid', fgColor='FCE4D6')
MONEY = 'R$ #,##0.00'

wb = Workbook()

def num(v):
    try:
        return float(v)
    except (TypeError, ValueError):
        return v

def write_table(ws, start_row, headers, rows, widths=None, money_cols=(), int_cols=()):
    for j, h in enumerate(headers, 1):
        c = ws.cell(row=start_row, column=j, value=h)
        c.font = HEAD_FONT; c.fill = HEAD_FILL; c.border = BORDER
        c.alignment = Alignment(horizontal='center', vertical='center', wrap_text=True)
    ws.row_dimensions[start_row].height = 30
    for i, r in enumerate(rows, start_row + 1):
        for j, v in enumerate(r, 1):
            c = ws.cell(row=i, column=j, value=v)
            c.font = BODY; c.border = BORDER
            c.alignment = Alignment(vertical='top', wrap_text=(j in wrap_cols.get(ws.title, ())))
            if j in money_cols and isinstance(v, (int, float)):
                c.number_format = MONEY
            if j in int_cols and isinstance(v, (int, float)):
                c.number_format = '0'
    if widths:
        for j, w in enumerate(widths, 1):
            ws.column_dimensions[get_column_letter(j)].width = w
    ws.freeze_panes = ws.cell(row=start_row + 1, column=1)
    ws.auto_filter.ref = f"A{start_row}:{get_column_letter(len(headers))}{start_row + max(len(rows), 1)}"
    return start_row + len(rows)

wrap_cols = {}

def title(ws, text, sub):
    ws['A1'] = text; ws['A1'].font = TITLE_FONT
    ws['A2'] = sub; ws['A2'].font = SUB_FONT

# ---------------------------------------------------------------- Anuncios novos
ws_new = wb.active
ws_new.title = 'Anuncios novos 24h'
title(ws_new, 'Anúncios criados nas últimas 24 horas', f'Todas as 6 lojas (ML, Shopee, TikTok), qualquer estado. Leitura em {data_str} (horário de São Paulo).')
new_rows = []
for r in sections['NEW24']['rows']:
    shop, pl, sku, price, created, status, item, _id, qty, ttl = r
    new_rows.append([shop, PL.get(pl, pl), sku, num(price), created[:19].replace('T', ' '), status, item, num(qty), ttl])
wrap_cols['Anuncios novos 24h'] = (9,)
if new_rows:
    write_table(ws_new, 4, ['Loja', 'Plataforma', 'SKU', 'Preço', 'Criado em (UTC)', 'Estado', 'ID na plataforma', 'Estoque', 'Título'], new_rows,
                [18, 14, 22, 12, 20, 12, 18, 9, 70], money_cols=(4,))
else:
    write_table(ws_new, 4, ['Loja', 'Plataforma', 'SKU', 'Preço', 'Criado em (UTC)', 'Estado', 'ID na plataforma', 'Estoque', 'Título'], [],
                [18, 14, 22, 12, 20, 12, 18, 9, 70])
    ws_new['A5'] = 'Nenhum anúncio foi criado nas últimas 24 horas em nenhuma das 6 lojas. Os anúncios mais recentes são de 30/10/2026 (57 anúncios).'
    ws_new['A5'].font = BOLD
    ws_new.merge_cells('A5:I5')

# ---------------------------------------------------------------- Precos corrigidos
ws_fix = wb.create_sheet('Precos corrigidos')
title(ws_fix, 'Preços corrigidos pelo robô hoje (kit + R$ 20 no Led, kit + R$ 40 no Xenon)',
      'Cada linha é um anúncio gravado pela API do UpSeller e conferido depois de sincronizar com o marketplace. "Revertido" = a correção foi desfeita no mesmo dia.')
fix_rows = []
for r in sections['FIXLOG']['rows']:
    shop, pl, sku, frm, to, code, ts_, now, ok, _id, rev, note = (r + [''] * 12)[:12]
    status = 'Revertido' if rev == '1' else ('Confirmado' if ok == '1' else 'Não confirmado')
    fix_rows.append([shop, PL.get(pl, pl), sku, num(frm), num(to), num(now), status, ts_[11:19] if len(ts_) > 19 else ts_, note, _id])
wrap_cols['Precos corrigidos'] = (9,)
end = write_table(ws_fix, 4, ['Loja', 'Plataforma', 'SKU', 'Preço antes', 'Preço gravado', 'Preço agora', 'Situação', 'Hora (UTC)', 'Observação', 'ID UpSeller'], fix_rows,
                  [18, 14, 20, 12, 13, 12, 15, 11, 70, 20], money_cols=(4, 5, 6))
for i in range(5, end + 1):
    s = ws_fix.cell(row=i, column=7)
    s.fill = OK_FILL if s.value == 'Confirmado' else (WARN_FILL if s.value == 'Revertido' else BAD_FILL)

# ---------------------------------------------------------------- Fora da regra
ws_div = wb.create_sheet('Fora da regra')
title(ws_div, 'Anúncios Led/Xenon com preço fora da regra que o robô NÃO conseguiu corrigir',
      'Agrupado por loja e SKU. Preço do kit = preço modal dos anúncios ativos do SKU base na mesma loja. Preço certo = kit + 20 (Led) ou kit + 40 (Xenon).')
div_rows = []
for r in sections['DIVERG_G']['rows']:
    shop, pl, sku, base, line, bp, bn, bt, exp, n, fix, cur, reason, items = r
    div_rows.append([shop, PL.get(pl, pl), sku, base, LINE.get(line, line), num(bp), f'{bn} de {bt}', num(exp), int(n), cur.replace('x', ' x'), REASON.get(reason, reason), items])
wrap_cols['Fora da regra'] = (11, 12)
end = write_table(ws_div, 4, ['Loja', 'Plataforma', 'SKU', 'Kit (SKU base)', 'Linha', 'Preço do kit', 'Anúncios do kit no preço modal', 'Preço certo', 'Qtd anúncios', 'Preços atuais (preço x qtd)', 'Por que não corrigiu', 'IDs dos anúncios'],
                  div_rows, [16, 13, 20, 17, 11, 12, 14, 11, 9, 24, 48, 60], money_cols=(6, 8))
for i in range(5, end + 1):
    ws_div.cell(row=i, column=11).fill = WARN_FILL

# ---------------------------------------------------------------- Variacoes faltantes
ws_mis = wb.create_sheet('Variacoes faltantes')
title(ws_mis, 'Kits de farol de milha sem a versão Led (-M) e/ou Xenon (-X) na loja',
      'Só SKUs de farol de milha (SSS/FUN/GRX/GR) com kit ativo na loja. Encaixe: da própria loja; senão de outra loja; senão H8 (padrão da casa) — confirmar na descrição antes de criar o SKU.')
mis_rows = []
for r in sections['MISSING']['rows']:
    shop, pl, base, bp, nb, has, miss, enc, sm, sx, ttl = r
    enc_code = enc.split(' ')[0]
    falta = {'MX': 'Led e Xenon', 'M': 'Led', 'X': 'Xenon'}.get(miss, miss)
    tem = {'-': 'nenhuma', 'M': 'só Led', 'X': 'só Xenon', 'MX': 'Led e Xenon'}.get(has, has)
    sku_m = f'{base}-M{enc_code}' if 'M' in miss else ''
    sku_x = f'{base}-X{enc_code}' if 'X' in miss else ''
    mis_rows.append([shop, PL.get(pl, pl), base, ttl, num(bp), int(nb), tem, falta, enc, sku_m, num(sm) if sku_m else '', sku_x, num(sx) if sku_x else ''])
wrap_cols['Variacoes faltantes'] = (4, 9)
end = write_table(ws_mis, 4, ['Loja', 'Plataforma', 'SKU base (kit)', 'Título de um anúncio do kit', 'Preço do kit', 'Anúncios do kit', 'Já tem', 'Falta criar', 'Encaixe sugerido', 'SKU Led a criar', 'Preço Led (+20)', 'SKU Xenon a criar', 'Preço Xenon (+40)'],
                  mis_rows, [16, 13, 16, 52, 12, 9, 12, 13, 26, 20, 12, 20, 12], money_cols=(5, 11, 13))
for i in range(5, end + 1):
    ws_mis.cell(row=i, column=8).fill = BAD_FILL if ws_mis.cell(row=i, column=8).value == 'Led e Xenon' else WARN_FILL

# ---------------------------------------------------------------- Variante sem kit
ws_vnb = wb.create_sheet('Variante sem kit')
title(ws_vnb, 'Versões Led/Xenon no ar sem o kit base ativo na mesma loja',
      'Sem o kit base na loja não dá para conferir a regra (pendência 63.5.2 do repo): ou sobe o kit base, ou o preço é tratado à mão.')
vnb_rows = [[r[0], PL.get(r[1], r[1]), r[2], r[3], int(r[4]), r[5]] for r in sections['VARNOBASE']['rows']]
write_table(ws_vnb, 4, ['Loja', 'Plataforma', 'SKU base ausente', 'Variantes no ar', 'Qtd anúncios', 'Preços atuais'], vnb_rows, [18, 14, 18, 34, 12, 20])

# ---------------------------------------------------------------- Kit preco entre lojas
ws_cross = wb.create_sheet('Kit preco entre lojas')
title(ws_cross, 'SKU base com preço de kit diferente entre as lojas',
      'Pela regra o preço é o mesmo nas lojas (o ML é a referência). Vazio = o SKU não tem kit ativo na loja. Diferença = maior menos menor (fórmula).')
cross_rows = []
for r in sections['CROSS']['rows']:
    base, prices = r[0], json.loads(r[1])
    cross_rows.append([base] + [prices.get(s, '') for s in STORES])
hdr = ['SKU base'] + STORES + ['Menor', 'Maior', 'Diferença']
end = write_table(ws_cross, 4, hdr, cross_rows, [18] + [15] * 6 + [11, 11, 12], money_cols=tuple(range(2, 11)))
for i in range(5, end + 1):
    ws_cross.cell(row=i, column=8, value=f'=MIN(B{i}:G{i})').number_format = MONEY
    ws_cross.cell(row=i, column=9, value=f'=MAX(B{i}:G{i})').number_format = MONEY
    ws_cross.cell(row=i, column=10, value=f'=I{i}-H{i}').number_format = MONEY
    for j in (8, 9, 10):
        ws_cross.cell(row=i, column=j).font = BODY; ws_cross.cell(row=i, column=j).border = BORDER

# ---------------------------------------------------------------- SKU 2 blocos
ws_mb = wb.create_sheet('SKU 2 blocos de preco')
title(ws_mb, 'SKUs base com mais de um bloco de preço na mesma loja (mesmo SKU em veículos diferentes)',
      'Lista fixa = exclusão permanente (FUN100-101 e SSS905RN). Detectado = 3 ou mais anúncios do kit fora do preço modal e pelo menos 10% do total. Esses SKUs nunca são corrigidos automaticamente.')
mb_rows = [[r[0], PL.get(r[1], r[1]), r[2], r[3].replace(' ', ' | ').replace('x', ' x '), int(r[4]), r[5]] for r in sections['MULTIBLOCK']['rows']]
wrap_cols['SKU 2 blocos de preco'] = (4,)
write_table(ws_mb, 4, ['Loja', 'Plataforma', 'SKU base', 'Blocos de preço (preço x qtd de anúncios)', 'Variantes Led/Xenon na loja', 'Origem'], mb_rows, [18, 14, 16, 60, 14, 12])

# ---------------------------------------------------------------- Fora do padrao
ws_nk = wb.create_sheet('SKUs fora do padrao kit')
title(ws_nk, 'SKUs base que o robô não trata como kit de farol de milha',
      'DRL, molduras, suportes, fitas e SKUs numéricos: não entram na checagem de variação faltante. Se algum deles devia ter Led/Xenon, avisar para incluir.')
nk_rows = [[r[0], r[1]] for r in sections['NOTKIT']['rows']]
wrap_cols['SKUs fora do padrao kit'] = (2,)
write_table(ws_nk, 4, ['SKU base', 'Título de um anúncio'], nk_rows, [20, 80])

# ---------------------------------------------------------------- Resumo (primeira aba)
ws = wb.create_sheet('Resumo', 0)
title(ws, 'Robô verificador de preços — UpSeller', f'Leitura das 6 lojas em {data_str} (horário de São Paulo). Regra: Led (-MH3, -MH8…) = kit + R$ 20,00 · Xenon (-XH3, -XH8…) = kit + R$ 40,00.')
ws.column_dimensions['A'].width = 58
for col in 'BCDEFGH':
    ws.column_dimensions[col].width = 16

row = 4
ws.cell(row=row, column=1, value='Indicador').font = HEAD_FONT
ws.cell(row=row, column=2, value='Valor').font = HEAD_FONT
ws.cell(row=row, column=3, value='Fonte').font = HEAD_FONT
for j in (1, 2, 3):
    ws.cell(row=row, column=j).fill = HEAD_FILL; ws.cell(row=row, column=j).border = BORDER
kpis = [
    ('Anúncios lidos (ativos + revisão + pausados no ML; ativos Shopee; todos TikTok)', summary['total'], 'leitura API'),
    ('Anúncios ativos', summary['active'], 'leitura API'),
    ('Anúncios criados nas últimas 24 horas', "=COUNTA('Anuncios novos 24h'!C:C)-1", 'aba Anuncios novos 24h'),
    ('Preços corrigidos hoje e confirmados no marketplace', "=COUNTIF('Precos corrigidos'!G:G,\"Confirmado\")", 'aba Precos corrigidos'),
    ('Correções revertidas no mesmo dia (SKU em veículos diferentes)', "=COUNTIF('Precos corrigidos'!G:G,\"Revertido\")", 'aba Precos corrigidos'),
    ('Anúncios fora da regra que o robô não pode corrigir', "=SUM('Fora da regra'!I:I)", 'aba Fora da regra'),
    ('   … travados por promoção no Mercado Livre', "=SUMIF('Fora da regra'!B:B,\"Mercado Livre\",'Fora da regra'!I:I)-SUMIFS('Fora da regra'!I:I,'Fora da regra'!B:B,\"Mercado Livre\",'Fora da regra'!K:K,\"SKU em veículos*\")", 'aba Fora da regra'),
    ('   … em promoção na Shopee (ficam como estão, decisão de 22/10)', "=SUMIF('Fora da regra'!B:B,\"Shopee\",'Fora da regra'!I:I)-SUMIFS('Fora da regra'!I:I,'Fora da regra'!B:B,\"Shopee\",'Fora da regra'!K:K,\"SKU em veículos*\")", 'aba Fora da regra'),
    ('   … SKU em veículos diferentes (SSS905RN): conferir à mão', "=SUMIF('Fora da regra'!K:K,\"SKU em veículos*\",'Fora da regra'!I:I)", 'aba Fora da regra'),
    ('Kits sem Led e/ou Xenon na loja (pares loja × SKU)', "=COUNTA('Variacoes faltantes'!C:C)-1", 'aba Variacoes faltantes'),
    ('   … faltando Led E Xenon', "=COUNTIF('Variacoes faltantes'!H:H,\"Led e Xenon\")", 'aba Variacoes faltantes'),
    ('   … faltando só Xenon', "=COUNTIF('Variacoes faltantes'!H:H,\"Xenon\")", 'aba Variacoes faltantes'),
    ('Versões Led/Xenon sem kit base na loja', "=COUNTA('Variante sem kit'!C:C)-1", 'aba Variante sem kit'),
    ('SKUs com preço de kit diferente entre lojas', "=COUNTA('Kit preco entre lojas'!A:A)-3", 'aba Kit preco entre lojas'),
]
for label, val, src in kpis:
    row += 1
    a = ws.cell(row=row, column=1, value=label); a.font = BOLD if not label.startswith('   ') else BODY; a.border = BORDER
    b = ws.cell(row=row, column=2, value=val); b.font = BODY; b.border = BORDER; b.alignment = Alignment(horizontal='center')
    c = ws.cell(row=row, column=3, value=src); c.font = SUB_FONT; c.border = BORDER

row += 2
ws.cell(row=row, column=1, value='Por loja').font = TITLE_FONT
row += 1
for j, h in enumerate(['Loja', 'Anúncios lidos', 'Ativos', 'Sem SKU (fora da checagem)'], 1):
    c = ws.cell(row=row, column=j, value=h); c.font = HEAD_FONT; c.fill = HEAD_FILL; c.border = BORDER
first = row + 1
for s in STORES:
    row += 1
    c = counts.get(s, {'total': 0, 'active': 0, 'noSku': 0})
    for j, v in enumerate([s, c['total'], c['active'], c['noSku']], 1):
        cell = ws.cell(row=row, column=j, value=v); cell.font = BODY; cell.border = BORDER
row += 1
ws.cell(row=row, column=1, value='Total').font = BOLD
for j, col in zip((2, 3, 4), 'BCD'):
    cell = ws.cell(row=row, column=j, value=f'=SUM({col}{first}:{col}{row - 1})'); cell.font = BOLD; cell.border = BORDER
ws.cell(row=row, column=1).border = BORDER

row += 2
ws.cell(row=row, column=1, value='O que o robô fez hoje (03/11/2026)').font = TITLE_FONT
notes = [
    'Leu os 4.200 anúncios das 6 lojas pela API interna do UpSeller (sem abrir tela) e agrupou por loja e SKU base.',
    'Corrigiu 23 anúncios e confirmou cada um relendo o marketplace: SSS101FT-MH1 (12 no ML, de 188,88 para 159,99, kit 139,99) e SSS1306HY-XH8 (11 na JhonJhon Parts, de 939,88 para 927,00, kit 887,00).',
    'Corrigiu 6 SSS905RN-MH8 na Isadora ML e DESFEZ no mesmo dia: o SSS905RN tem dois blocos de preço (Peugeot 307/2008 e L200 a 139,99; Logan/Sandero/Kwid/Duster/Mobi/Argo/C4 Pallas a 168,88), então 188,88 estava certo. O SKU entrou na lista de exclusão junto com o FUN100-101.',
    'Descoberta: no Mercado Livre a API grava o preço (code 0) mas o ML devolve o preço antigo no sync quando o anúncio está em promoção. Os 104 "corrigidos" de 22/10 nunca valeram por isso — hoje são 70 anúncios travados.',
    'Nenhum anúncio novo nas últimas 24 horas (os últimos são de 30/10/2026).',
]
for n in notes:
    row += 1
    c = ws.cell(row=row, column=1, value='• ' + n); c.font = BODY; c.alignment = Alignment(wrap_text=True, vertical='top')
    ws.merge_cells(start_row=row, start_column=1, end_row=row, end_column=8)
    ws.row_dimensions[row].height = 32

row += 2
ws.cell(row=row, column=1, value='Decisões que precisam de você').font = TITLE_FONT
decisions = [
    'Mercado Livre em promoção (70 anúncios, 13 SKUs): para corrigir é preciso tirar o anúncio da promoção, gravar o preço e (se quiser) recolocar. Quer que o robô faça isso, ou ficam como estão igual à Shopee?',
    'Isadora ML: o kit SSS1306HY está a R$ 699,88 nos 30 anúncios, contra R$ 887,00 nas outras 5 lojas. Pela regra os -MH8/-XH8 da Isadora teriam de cair para 719,88/739,88 (travados pela promoção). É intencional? Se não, igualar o kit a 887,00.',
    'SSS905RN: dois blocos de preço no mesmo SKU. Vale separar em dois SKUs (como pede a 62.5 para o FUN100-101) para o robô voltar a controlar essas variações.',
    'SSS101FT-MH1 estava a 188,88 (parecia preço de kit 168,88, que não existe). Se 188,88 era o desejado, o kit precisa ir para 168,88 — o robô segue o kit.',
    'Variações faltantes: 168 pares loja × SKU (aba própria), a maior parte sem Led nem Xenon. Os SKUs sugeridos já saem com encaixe e preço.',
]
for n in decisions:
    row += 1
    c = ws.cell(row=row, column=1, value='• ' + n); c.font = BODY; c.alignment = Alignment(wrap_text=True, vertical='top')
    ws.merge_cells(start_row=row, start_column=1, end_row=row, end_column=8)
    ws.row_dimensions[row].height = 44

wb.save(out_path)
print('ok', out_path)
