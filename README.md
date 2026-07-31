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

## Onde trocar a arte de marca do hero

- O emblema exibido ao lado do H1 fica em
  **[public/media/brand/emblem.webp](public/media/brand/emblem.webp)** e é
  referenciado em `src/components/Hero/Hero.jsx`.
- Essa imagem já vem com as bordas esmaecidas (fade para transparente) pra não
  aparecer como um retângulo colado no fundo escuro — foi gerada a partir da
  arte oficial fornecida pelo cliente, recortada e com um degradê radial de
  transparência. Se for trocar por outra imagem, repita esse tratamento
  (recorte + fade nas bordas) pra manter a mesma integração visual.

## Onde ficam os tokens de cor

- **[src/tokens.css](src/tokens.css)** — todas as cores (`--ink`, `--navy`,
  `--gold`, `--gold-lit`, `--pine`, `--pine-dark`, `--bone`), a escala
  tipográfica (`--h1-size`, `--h2-size`, `--body-size`, `--mono-size`) e o
  espaçamento de seção (`--band-padding`, `--gutter`) como custom properties
  globais. Qualquer ajuste de paleta ou tipografia começa por aqui.

## Estrutura

```
public/media/gallery/    fotos e vídeos reais exibidos na Galeria
public/media/brand/      emblema de marca usado no hero
src/
  tokens.css              tokens globais + reset
  data/business.js        fonte única dos dados do negócio
  hooks/useReveal.js       reveal on scroll (IntersectionObserver)
  components/
    Header/                header fixo com nav e CTA
    Hero/                   H1, CTAs, emblema de marca (imagem)
    Divider/                motivo de tábuas entre seções
    PbrStandard/            texto + tabela de especificação
    Commitments/            grade 2x2 dos 4 compromissos
    Gallery/                fotos e vídeos reais do galpão, produto e equipe
    Delivery/               endereço + WhatsApps
    FinalCta/               CTA final em --gold
    Footer/                 rodapé
```
