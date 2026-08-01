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

## O banner do hero (arte de marca como fundo)

O topo do site é a arte oficial da Compacto usada como fundo:
**[public/media/brand/hero-banner.webp](public/media/brand/hero-banner.webp)**,
referenciada em `src/components/Hero/Hero.jsx`.

A arte foi desenhada com a metade esquerda ocupada (globo + diferenciais +
barra de contato) e a metade direita vazia (céu) — é nesse vazio que entram o
H1, o lede, os CTAs e a faixa de fatos.

- **Acima de 1000px**: o banner é posicionado atrás do conteúdo (`object-fit:
  cover`, ancorado à esquerda) e o hero usa `aspect-ratio: 2000/729`, então a
  arte aparece inteira, sem corte, em qualquer largura.
- **Até 1000px**: o céu vazio da direita fica pequeno demais para texto, então o
  banner é recortado na metade da arte (`aspect-ratio: 1000/729`) e exibido
  inteiro no topo; o texto desce para baixo dele, sobre `--bone`.
- Como o fundo é claro, o texto do hero é escuro (`--ink`) e o destaque do H1
  virou um **bloco estampado dourado com texto escuro** — o dourado como cor de
  texto não tem contraste sobre o céu claro. O CTA principal é pílula escura com
  texto dourado, mesma linguagem da barra de contato da arte.

### Texto corrigido dentro da imagem

A versão do banner recebida trazia as quatro descrições dos diferenciais com
texto quebrado (ex.: *"Produtas navas e do sho peorho."*). Elas foram apagadas e
reescritas corretamente sobre o mesmo fundo, na mesma posição e fonte. O arquivo
original, como recebido, está preservado em
`public/media/brand/hero-banner-original.webp` — se um dia chegar uma versão
nova e correta da arte, basta substituir `hero-banner.webp`.

> Nota: a arte escreve "PALETS" no título, enquanto o material oficial da
> empresa usa "paletes". Isso veio assim da arte e **não** foi alterado.

`emblem.webp` é a versão anterior do hero (emblema recortado com bordas
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
src/
  tokens.css              tokens globais + reset
  data/business.js        fonte única dos dados do negócio
  hooks/useReveal.js       reveal on scroll (IntersectionObserver)
  components/
    Header/                header fixo com nav e CTA
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
