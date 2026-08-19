# refriar — site

Projeto estático simples para apresentação da `refriar` (Refrigeração & Assistência Técnica).

Como rodar localmente:

```bash
cd /Users/igorlima/Desktop/projeto-refriar
python3 -m http.server 8000
# abrir http://localhost:8000
```

O que falta ajustar/entregar:
- Fornecer imagens finais para o `hero` e galeria (preferivelmente WebP/AVIF).
- Substituir `logo.svg` pelo logo final (SVG/PNG). O `manifest.json` e `favicon` usam `logo.svg` atualmente.
- Preencher o `GA_ID` no `<script>` se desejar Google Analytics; o banner de consentimento controla o carregamento.
- Gerar favicons PNG em múltiplos tamanhos para Apple/Windows se precisar.

Gerar favicons a partir de `img/refriar.jpeg` (macOS / ImageMagick)

macOS (sips):
```bash
# 512x512
sips -Z 512 img/refriar.jpeg --out icon-512.png
# 180x180 (apple)
sips -Z 180 img/refriar.jpeg --out apple-touch-icon-180.png
# 32x32 e 16x16
sips -Z 32 img/refriar.jpeg --out favicon-32.png
sips -Z 16 img/refriar.jpeg --out favicon-16.png
```

ImageMagick (cross-platform):
```bash
magick img/refriar.jpeg -resize 512x512 icon-512.png
magick img/refriar.jpeg -resize 180x180 apple-touch-icon-180.png
magick img/refriar.jpeg -resize 32x32 favicon-32.png
magick img/refriar.jpeg -resize 16x16 favicon-16.png
```

Depois de gerar os PNGs, coloque-os na raiz do projeto (ao lado de `index.html`) — os links no `index.html` e `manifest.json` já apontam para esses nomes.

Deploy recomendado:
- GitHub Pages (simples) ou Netlify/Vercel para deploy contínuo com HTTPS.

O que posso fazer em seguida:
- Gerar placeholders WebP/AVIF e atualizar `srcset`.
- Integrar imagens que você enviar e otimizar tamanho/resolução.
- Conectar Analytics (com consentimento) e adicionar Tag Manager.
