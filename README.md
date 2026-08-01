# Compacto World Pallets — Landing page

Landing page de conversão da Compacto World Pallets. Job único da página: levar
o visitante a pedir orçamento pelo WhatsApp.

## Como rodar

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

Para gerar o build de produção:

```bash
npm run build
npm run preview
```

## Onde trocar telefone, endereço e textos

Tudo isso está centralizado em um único arquivo, para nunca precisar caçar
texto espalhado pelos componentes:

- **[src/data/business.js](src/data/business.js)** — telefones/WhatsApp (com a
  mensagem pré-preenchida), endereço, tagline, os 4 diferenciais e a tabela de
  especificação do padrão PBR-1.

Textos que não vêm desse arquivo (títulos, parágrafos longos, microcopy dos
CTAs) ficam no JSX de cada seção, dentro de `src/components/<Nome>/<Nome>.jsx`.

## Onde trocar as fotos e vídeos da galeria

- **[src/data/gallery.js](src/data/gallery.js)** — lista os arquivos e o texto
  alternativo (alt) de cada foto/vídeo exibido na seção "Como é de perto".
- Os arquivos em si ficam em **[public/media/gallery/](public/media/gallery/)**.
  Para trocar uma foto ou vídeo, substitua o arquivo mantendo o mesmo nome, ou
  adicione um novo arquivo e uma entrada correspondente em `gallery.js`.
- Os vídeos usam `preload="metadata"` (sem autoplay) de propósito: eles só
  baixam o vídeo inteiro quando o visitante aperta play, para não pesar o
  carregamento no celular.

## O banner do topo e a escrita principal

O topo da página (`src/components/Hero/Hero.jsx`) é **só a arte oficial da
Compacto**, sem texto por cima:
**[public/media/brand/hero-banner.webp](public/media/brand/hero-banner.webp)**.

Toda a escrita — H1, lede, os dois CTAs e a faixa de fatos — vive no começo da
seção seguinte (`src/components/PbrStandard/PbrStandard.jsx`, bloco `.pitch`),
separada da ficha técnica por uma hairline.

- **Acima de 1000px**: o banner aparece inteiro, na largura total, sem recorte
  nenhum.
- **Até 1000px**: na faixa larga o desenho ficaria minúsculo, então a imagem é
  recortada em volta dele (`aspect-ratio: 4/3` + `object-position: 52%`), que é
  onde o desenho está na arte.
- Como a seção é clara (`--bone`), o destaque do H1 é um **bloco estampado
  dourado com texto escuro** — o dourado como cor de texto não teria contraste.
  O CTA principal é pílula escura com texto dourado, mesma linguagem da barra de
  contato da arte. Contrastes medidos: 13,3:1 (H1), 8,8:1 (estampa e botão).

### Barra de contato

A pílula de contato sobre a faixa azul da arte é HTML de verdade
(`src/components/ContactBar/ContactBar.jsx`), não parte da imagem — os ícones
são SVG inline. Cada item é clicável:

| Item | Vai para |
| --- | --- |
| Endereço | Google Maps (`business.mapsUrl`, gerado a partir de `business.address`) |
| (11) 92121-8541 | WhatsApp 1, com a mensagem pré-preenchida |
| (11) 99102-3133 | WhatsApp 2, com a mensagem pré-preenchida |
| Entre em contato | `mailto:` de `business.email` |

> **⚠️ O e-mail é um placeholder.** `business.email` está como
> `contato@exemplo.com.br` em [src/data/business.js](src/data/business.js).
> Trocar pelo e-mail real antes de publicar.

Acima de 1000px a pílula é posicionada sobre a faixa azul da arte; abaixo disso
ela sai de cima da imagem e vira um bloco logo abaixo dela, com os três grupos
empilhados.

### Texto corrigido dentro da imagem

As artes recebidas vinham com as descrições dos diferenciais escritas errado
(ex.: *"Produtas navas e do sho peorho."*, *"de alto padrád."*,
*"resistencia"*). As linhas erradas foram apagadas e reescritas corretas sobre o
mesmo fundo, na mesma posição e com fonte equivalente (Segoe UI Semibold). O
arquivo como recebido está preservado em
`public/media/brand/hero-banner-original.webp` — se chegar uma versão nova e
já correta da arte, basta substituir `hero-banner.webp`.

> Nota: a arte escreve "PALETS" no título, enquanto o material oficial da
> empresa usa "paletes". Isso veio assim da arte e **não** foi alterado.

`emblem.webp` é uma versão anterior do topo (emblema recortado com bordas
esmaecidas); ficou no repositório para facilitar voltar atrás.

## Sobre as fotos da seção "Nossos paletes"

As duas imagens em **[public/media/products/](public/media/products/)**
(`pallet-pbr-stock.webp` e `pallet-grid-stock.webp`) são fotos de estoque, não
fotos reais da Compacto — diferente de tudo que está em `public/media/gallery/`.
Foram usadas a pedido explícito do cliente, mesmo isso não sendo o padrão do
resto do site (que é só foto real ou gráfico em código). Os dados de cada card
(medida, carga, material) ficam em `src/data/products.js` — mantive "sob
consulta" na carga porque não temos capacidade confirmada, mesmo a referência
usada mostrando números fixos.

## Vídeo controlado por scroll (2ª seção)

À direita do título "Paletes PBR novos e sob medida..." (bloco `.pitch` do
`PbrStandard.jsx`) tem um vídeo que avança/retrocede conforme o scroll, e a
seção fica "travada" na tela enquanto ele não termina.

- **[src/hooks/useScrollScrub.js](src/hooks/useScrollScrub.js)** — a lógica:
  o contêiner (`.pitchScrub`) é mais alto que a viewport (100vh visível + 220vh
  de "pista" de scroll); enquanto se rola por essa pista, o hook calcula o
  progresso (0 a 1) e seta `video.currentTime = progresso × duração`. O "travar
  na tela" é feito com `position: sticky` (não é scroll-jacking via JS/
  `preventDefault`) — por isso a página sempre continua rolando normalmente
  depois, sem trecho nenhum de código pra "destravar".
- Pra ajustar a velocidade do scrub, mude `220vh` em
  `PbrStandard.module.css` (`.pitchScrub`) — mais alto = rolagem mais lenta/
  longa até o vídeo terminar.
- **Sem efeito** (vídeo normal, em loop mudo, sem seção travada) em duas
  situações: `prefers-reduced-motion: reduce` ou telas ≤900px — controlado por
  `narrowBreakpoint` em `useScrollScrub`.
- O vídeo é sempre mudo e sem controles (`muted`, sem `controls`), só decorativo
  (`aria-hidden`).

### Sobre o arquivo de vídeo

O vídeo enviado (`Downloads/pallett.mp4`, 1920×1080, 30fps, 16,7 MB) tinha
só **2 keyframes em 201 frames** — nesse formato, buscar um frame arbitrário
(o que o scroll-scrub faz o tempo todo) trava, porque o navegador precisa
decodificar a partir do keyframe anterior a cada busca. Reencodei com ffmpeg
pra **cada frame ser um keyframe** (`-g 1 -keyint_min 1 -sc_threshold 0`),
reduzindo também a resolução (960×540) e removendo o áudio (o vídeo é mudo).
Resultado: **[public/media/video/pitch-scroll.mp4](public/media/video/pitch-scroll.mp4)**,
1,4 MB, busca instantânea em qualquer frame — confirmei com `ffprobe` que os
201 frames do arquivo final são todos keyframes.

Se for trocar o vídeo, reencode com o mesmo comando (ajustando duração/
resolução conforme o novo arquivo):

```bash
ffmpeg -i entrada.mp4 -an -vf "scale=960:-2" \
  -c:v libx264 -profile:v high -pix_fmt yuv420p \
  -g 1 -keyint_min 1 -sc_threshold 0 \
  -crf 28 -preset slow -movflags +faststart \
  public/media/video/pitch-scroll.mp4
```

## Reveal on scroll

O efeito de entrada (opacidade 0 → 1, `translateY(24px)` → posição original) é
feito com dois arquivos:

- **[src/hooks/useReveal.js](src/hooks/useReveal.js)** — recebe um `ref` e
  devolve `isVisible`. Cria um `IntersectionObserver` (`threshold` padrão 0.2),
  chama `observer.unobserve()` assim que o elemento entra na tela (a animação
  roda só uma vez) e faz o cleanup no `useEffect`. Se
  `prefers-reduced-motion: reduce` estiver ativo, pula o observer e já entrega
  `isVisible = true`.
- **[src/components/Reveal/Reveal.jsx](src/components/Reveal/Reveal.jsx)** —
  componente `<Reveal as="div" delay={100}>...</Reveal>` que usa o hook acima e
  aplica `Reveal.module.css` (`.reveal` = estado inicial, `.visible` = estado
  final). `delay` vira `transitionDelay` inline, usado pra escalonar cards
  irmãos (100–150ms entre um e outro). `as` troca a tag renderizada
  (`div`, `article`, etc.) sem perder a ref.

Todas as seções da home usam `<Reveal>` no lugar do hook antigo; os 4
compromissos e os 2 cards de produto têm stagger real (cada um com um delay
maior que o anterior), o resto revela como bloco único. O CSS global antigo
(`.reveal`/`.is-visible` em `tokens.css`) foi removido — o efeito inteiro agora
vive dentro do componente `Reveal`.

## Sobre o mapa

A seção "Entrega" (`#entrega`) embute um mapa do Google Maps via `<iframe>`
(sem precisar de chave de API), apontando pro endereço real da Compacto em
`src/data/business.js` (`business.address`). Se o endereço mudar nesse
arquivo, o mapa atualiza sozinho — não precisa mexer no `Delivery.jsx`.

## Sobre o formulário de orçamento

A seção final (`#orcamento`) tem um formulário (Nome, Empresa, Quantidade,
Observações) em **[src/components/QuoteForm/QuoteForm.jsx](src/components/QuoteForm/QuoteForm.jsx)**.
Ele **não envia dado nenhum pra lugar algum** — não há backend nem serviço de
e-mail. Ao clicar em "Montar mensagem e abrir WhatsApp", o próprio navegador
monta um texto com o que foi preenchido e abre o link `wa.me` de sempre, igual
aos outros botões de WhatsApp do site. Os botões diretos continuam logo abaixo
do formulário, para quem preferir não preencher nada.

## Onde ficam os tokens de cor

- **[src/tokens.css](src/tokens.css)** — todas as cores (`--ink`, `--navy`,
  `--gold`, `--gold-lit`, `--pine`, `--pine-dark`, `--bone`), a escala
  tipográfica (`--h1-size`, `--h2-size`, `--body-size`, `--mono-size`) e o
  espaçamento de seção (`--band-padding`, `--gutter`) como custom properties
  globais. Qualquer ajuste de paleta ou tipografia começa por aqui.

## Estrutura

```
public/media/gallery/    fotos e vídeos reais exibidos na Galeria
public/media/brand/      banner da marca usado como fundo do hero
public/media/products/   fotos de estoque usadas nos cards de produto
public/media/video/      vídeo controlado por scroll (2ª seção)
src/
  tokens.css              tokens globais + reset
  data/business.js        fonte única dos dados do negócio
  hooks/useReveal.js       reveal on scroll (IntersectionObserver)
  components/
    Header/                header fixo com nav e CTA
    ContactBar/             pílula de contato (maps, 2 WhatsApps, e-mail)
    Reveal/                 wrapper de reveal on scroll (fade + translateY)
    Hero/                   banner da marca como fundo + H1, CTAs e fatos
    Divider/                motivo de tábuas entre seções
    PbrStandard/            texto + tabela de especificação
    ProductCards/           cards "Palete PBR" e "Palete Sob Medida" (fotos de estoque)
    Commitments/            grade 2x2 dos 4 compromissos
    Gallery/                fotos e vídeos reais do galpão, produto e equipe
    Delivery/               endereço + WhatsApps
    FinalCta/               CTA final em --gold, com o QuoteForm
    QuoteForm/              formulário que monta a mensagem e abre o WhatsApp
    Footer/                 rodapé
```
