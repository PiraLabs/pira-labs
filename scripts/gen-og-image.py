from PIL import Image, ImageDraw, ImageFont
import numpy as np
import os

# Dimensões
W, H = 1200, 630

# Cores
DEEP_TEAL = (5, 38, 45)
OFF_WHITE = (232, 224, 214)
ORANGE = (234, 99, 53)
PEACH = (242, 168, 94)

# Canvas
canvas = Image.new("RGB", (W, H), DEEP_TEAL)

# Foto dos fundadores
foto = Image.open("public/nos.png").convert("RGBA")

# Estratégia: redimensionar para largura 560px mantendo proporção
# Isso mostra os dois fundadores completos
# Redimensionar pela altura para preencher o canvas todo
ratio = H / foto.height
foto_w = int(foto.width * ratio)
foto = foto.resize((foto_w, H), Image.LANCZOS)

# Se ficar mais larga que 560px, recortar pelo centro horizontal
if foto_w > 520:
    crop_x = (foto_w - 520) // 2
    foto = foto.crop((crop_x, 0, crop_x + 520, H))
    foto_w = 520

pos_y = 0

# Aplicar fade na borda esquerda (120px)
foto_array = np.array(foto).astype(float)
fade_width = 120
for x in range(fade_width):
    alpha = x / fade_width
    foto_array[:, x, 0] = foto_array[:, x, 0] * alpha + DEEP_TEAL[0] * (1 - alpha)
    foto_array[:, x, 1] = foto_array[:, x, 1] * alpha + DEEP_TEAL[1] * (1 - alpha)
    foto_array[:, x, 2] = foto_array[:, x, 2] * alpha + DEEP_TEAL[2] * (1 - alpha)
foto = Image.fromarray(foto_array.astype(np.uint8))

# Colar à direita do canvas
foto_x = W - foto_w + 20
canvas.paste(foto.convert("RGB"), (foto_x, pos_y))

# Gradiente de respiro: de x=580 até x=700, do deep-teal sólido para transparente
respiro = ImageDraw.Draw(canvas)
for x in range(580, 700):
    alpha = (x - 580) / 120
    r = int(DEEP_TEAL[0] * (1 - alpha))
    g = int(DEEP_TEAL[1] * (1 - alpha))
    b = int(DEEP_TEAL[2] * (1 - alpha))
    respiro.line([(x, 0), (x, H)], fill=(
        int(DEEP_TEAL[0] * (1-alpha) + canvas.getpixel((x,H//2))[0] * alpha),
        int(DEEP_TEAL[1] * (1-alpha) + canvas.getpixel((x,H//2))[1] * alpha),
        int(DEEP_TEAL[2] * (1-alpha) + canvas.getpixel((x,H//2))[2] * alpha)
    ))

# Textos
draw = ImageDraw.Draw(canvas)

# Tentar carregar fonte do sistema, fallback para padrão
try:
    font_title = ImageFont.truetype("arialbd.ttf", 92)
    font_tag = ImageFont.truetype("arial.ttf", 27)
    font_url = ImageFont.truetype("arial.ttf", 22)
    print("Fontes carregadas: Arial")
except Exception as e:
    print(f"Fonte Arial não encontrada ({e}), usando fallback padrão")
    font_title = ImageFont.load_default()
    font_tag = ImageFont.load_default()
    font_url = ImageFont.load_default()

margin_left = 36

# PIRA LABS
draw.text((margin_left, 140), "PIRA LABS", font=font_title, fill=OFF_WHITE)

# Linha laranja
line_y = 260
draw.rectangle([(margin_left, line_y), (margin_left + 180, line_y + 2)], fill=ORANGE)

# Tagline
draw.text((margin_left, 286), "Creative Business Turnaround", font=font_tag, fill=(*OFF_WHITE, 216))
draw.text((margin_left, 320), "para empresas que precisam agir antes da crise", font=font_tag, fill=(*OFF_WHITE, 216))

# URL
draw.text((margin_left, 376), "piralabs.com.br", font=font_url, fill=PEACH)

# Salvar
canvas.save("public/og-image.png", "PNG", optimize=True)

# Reportar
size_kb = os.path.getsize("public/og-image.png") / 1024
print(f"og-image.png gerada com sucesso: {size_kb:.1f} KB")
print(f"Dimensões: {W}x{H}px")
print(f"Foto colada: {foto_w}x{H}px, posição x={W - foto_w - 20}")
