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

A seção "Como é de perto" (`src/components/Gallery/Gallery.jsx`) é um
carrossel horizontal — fotos numa linha, vídeos em outra — com setas de
avançar/voltar dos dois lados (`CarouselRow`, componente interno do próprio
arquivo). Cada linha rola por `scrollBy` de ~86% da largura visível por clique,
com scroll-snap nativo; as setas ficam desabilitadas sozinhas no início/fim.

- **[src/data/gallery.js](src/data/gallery.js)** — lista os arquivos, o texto
  alternativo (alt) de cada foto/vídeo e o poster de cada vídeo.
- Os arquivos ficam em **[public/media/gallery/](public/media/gallery/)**.
  Para trocar uma foto ou vídeo, substitua o arquivo mantendo o mesmo nome, ou
  adicione um novo arquivo e uma entrada correspondente em `gallery.js`.
- **Os vídeos usam `preload="none"` + `poster`** (miniatura estática, em
  `public/media/gallery/posters/`, gerada com `ffmpeg` a partir do próprio
  vídeo). Isso é o que resolve a galeria não carregar no celular: com 9 vídeos
  na página, mesmo só metadados (`preload="metadata"`) já é pesado demais pra
  muitos navegadores mobile inicializarem de uma vez — com `preload="none"`
  nada é buscado/decodificado até o visitante apertar o play de um vídeo
  específico.

Se adicionar um vídeo novo, gere o poster dele com:

```bash
ffmpeg -i public/media/gallery/video-XX.mp4 -ss 00:00:00.5 -vframes 1 \
  -vf "scale=480:-2" -q:v 4 public/media/gallery/posters/video-XX.jpg
```

## O banner do topo e a escrita principal

O topo da página (`src/components/Hero/Hero.jsx`) é **só a arte oficial da
Compacto**, sem texto por cima.

### ⚠️ Três versões em avaliação pelo cliente (temporário)

Hoje o Hero mostra **três versões do banner**, com um botão que cicla entre
elas em sequência ("Opção 1 · esquerda" → "Opção 2 · com fundo" → "Opção 3 ·
sem fundo" → volta pra 1, canto superior direito da arte):

| Opção | Arquivo | O que é |
| --- | --- | --- |
| 1 (padrão) | `public/media/brand/hero-banner-c.webp` | globo alinhado à esquerda, sobre fundo de céu |
| 2 | `public/media/brand/hero-banner-a.webp` | globo centralizado + pátio de armazém com colaboradores e caminhão ao fundo |
| 3 | `public/media/brand/hero-banner-b.webp` | globo centralizado, sobre fundo de céu, sem cenário |

Isso é **provisório** — assim que o cliente decidir qual prefere, edite
`src/components/Hero/Hero.jsx`: apague o array `BANNER_OPTIONS`, o `useState`
e o `<button className={styles.bannerSwitch}>`, e deixe o `<img>` com o `src`
fixo na opção escolhida (o comentário no topo do arquivo já explica isso).
Pode apagar os arquivos `.webp` das opções descartadas também.

As três artes (`public/media/brand/alternativas/*.png`) vieram com os mesmos
erros de digitação recorrentes desse tipo de geração (ex.: "resistencia" sem
acento, "padrâd"/"padrád" em vez de "padrão") — cada uma foi corrigida com o
mesmo processo de apagar e redesenhar o texto por cima do próprio fundo antes
de virar `.webp`.

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

Toda arte recebida até agora (incluindo as duas opções acima) veio com as
descrições dos diferenciais escritas errado — cada uma com erros diferentes
(ex.: *"Produtas navas e do sho peorho."*, *"de alto padrád."*,
*"resistencia"*, *"durabaidade"*, *"escelência"*). As linhas erradas foram
apagadas e reescritas corretas sobre o mesmo fundo, na mesma posição e com
fonte equivalente (Segoe UI Semibold). Vale conferir com atenção se chegar uma
arte nova — esse tipo de erro se repetiu em toda geração até aqui.

O arquivo original da primeira arte, como recebido (com o erro), está
preservado em `public/media/brand/hero-banner-original.webp`. Os dois `.png`
em `public/media/brand/alternativas/` (origem das opções 1 e 2) foram
corrigidos diretamente no arquivo, sem guardar uma cópia bruta separada —
foram usados só como fonte pra gerar os `.webp` finais.

`public/media/brand/hero-banner.webp` (o banner único de antes das duas
opções) não é mais referenciado em lugar nenhum do código — pode apagar depois
que a decisão entre as opções 1/2 estiver fechada.

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
- **Sem moldura**: `.pitchVideoCol` não tem borda nem cantos arredondados —
  uma caixa com contorno visível reforça a sensação de "vídeo colado", então
  só o degradê define onde ele termina.
- **`.pitchVideo` tem `filter: brightness(1.14) saturate(0.9)`** — clareia um
  pouco o cinza de fundo do vídeo antes mesmo do degradê entrar (aproxima do
  tom do `--bone`, mas não faz o vídeo ficar branco puro — isso o navegador
  não faz sem recodificar o arquivo).
- **`.pitchVideoOverlay`** — degradê radial forte por cima do vídeo:
  transparente no centro (não mexe no conteúdo), esmaecendo até virar `--bone`
  **sólido** bem antes da borda da caixa — o vídeo se dissolve no fundo da
  página em vez de terminar num corte seco.

### Sobre o arquivo de vídeo

O vídeo em uso é
**[public/media/video/pitch-scroll2.mp4](public/media/video/pitch-scroll2.mp4)**
(1,9 MB, 960px de largura, 10s, 240 frames). Como todo vídeo usado no
scroll-scrub, ele passou pelo mesmo tratamento: o arquivo bruto tinha só
**1 keyframe em 240 frames** — nesse formato, buscar um frame arbitrário (o
que o scroll-scrub faz o tempo todo) trava, porque o navegador precisa
decodificar a partir do keyframe anterior a cada busca. Reencodei com ffmpeg
pra **cada frame ser um keyframe** (`-g 1 -keyint_min 1 -sc_threshold 0`),
reduzindo também a resolução (960px de largura) e removendo o áudio (o vídeo é
mudo). Confirmei com `ffprobe` que os 240 frames do arquivo final são todos
keyframes.

O arquivo bruto, como recebido, está preservado em
`public/media/video/pitch-scroll2-original.mp4`. O vídeo usado antes deste
segue em `public/media/video/pitch-scroll.mp4`, sem uso no código — mantido
só pra facilitar voltar atrás caso necessário.

Se for trocar o vídeo, reencode com o mesmo comando (ajustando duração/
resolução conforme o novo arquivo):

```bash
ffmpeg -i entrada.mp4 -an -vf "scale=960:-2" \
  -c:v libx264 -profile:v high -pix_fmt yuv420p \
  -g 1 -keyint_min 1 -sc_threshold 0 \
  -crf 28 -preset slow -movflags +faststart \
  public/media/video/pitch-scroll2.mp4
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
