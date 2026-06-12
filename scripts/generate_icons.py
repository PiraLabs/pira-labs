from PIL import Image, ImageDraw
import os

def draw_icon(size, bg_color=None):
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    if bg_color:
        draw.rectangle([0, 0, size, size], fill=bg_color)

    ink = (5, 38, 46, 255)
    s = size / 100.0

    # Meia-lua superior: círculo r=18 centrado em (50,50) clipado acima de y=47
    # Desenhar como elipse e cobrir a parte inferior
    cx, cy, r = 50*s, 50*s, 18*s
    draw.ellipse([cx-r, cy-r, cx+r, cy+r], fill=ink)
    # Cobrir gap e parte inferior com transparente (ou bg)
    gap_fill = bg_color if bg_color else (0, 0, 0, 0)
    draw.rectangle([0, int(47*s), size, size], fill=gap_fill)

    # Meia-lua inferior
    draw.ellipse([cx-r, cy-r, cx+r, cy+r], fill=ink)
    draw.rectangle([0, 0, size, int(53*s)], fill=gap_fill)

    # Conectores
    draw.rectangle([-1, int(47*s), int(32*s), int(53*s)], fill=ink)
    draw.rectangle([int(68*s), int(47*s), size+1, int(53*s)], fill=ink)

    return img

# icon.png 32x32 transparent background — for app/icon.png
img32 = draw_icon(32)
img32.save('app/icon.png')
print('app/icon.png created')

# favicon.ico 32x32
img32.save('public/favicon.ico')
print('public/favicon.ico created')

# apple-icon.png 180x180 with Sand background
img180 = draw_icon(180, bg_color=(232, 224, 214, 255))
img180.save('app/apple-icon.png')
print('app/apple-icon.png created')

print('Done.')
