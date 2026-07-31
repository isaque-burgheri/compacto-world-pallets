const WHATSAPP_MESSAGE = 'Olá! Preciso de um orçamento de paletes PBR novos.'
const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE)

export const business = {
  name: 'Compacto World Pallets',
  tagline: 'Compromisso, qualidade e agilidade em cada entrega',
  materialCall: 'Soluções em paletes com qualidade e confiança',
  product: 'Paletes PBR novos, primeira qualidade',
  address: 'Av. Adriano Bertozzi, 563 — São Paulo/SP',
  deliveryArea: 'São Paulo e região',
  whatsapp: [
    {
      label: '(11) 92121-8541',
      url: `https://wa.me/5511921218541?text=${encodedMessage}`
    },
    {
      label: '(11) 99102-3133',
      url: `https://wa.me/5511991023133?text=${encodedMessage}`
    }
  ]
}

export const differentials = [
  {
    label: 'MATERIAL',
    title: 'Paletes PBR novos',
    highlight: 'PBR',
    text: 'Mais resistência e durabilidade em cada unidade entregue.'
  },
  {
    label: 'PADRÃO',
    title: 'Primeira qualidade',
    highlight: 'qualidade',
    text: 'Produtos novos e de alto padrão, sem reforma.'
  },
  {
    label: 'GARANTIA',
    title: 'Qualidade garantida',
    highlight: 'garantida',
    text: 'Compromisso com a excelência em cada produto.'
  },
  {
    label: 'LOGÍSTICA',
    title: 'Entregamos em São Paulo',
    highlight: 'São Paulo',
    text: 'Agilidade e segurança para sua empresa.'
  }
]

export const pbrSpec = [
  { label: 'MEDIDAS', value: '1200 × 1000 mm' },
  { label: 'FACES', value: 'Dupla face' },
  { label: 'ENTRADAS', value: '4 entradas para empilhadeira' },
  { label: 'MADEIRA', value: 'Pinus' },
  { label: 'CONDIÇÃO', value: 'Novo' },
  { label: 'CAPACIDADE DE CARGA', value: 'Sob consulta' },
  { label: 'ENTREGA', value: 'São Paulo e região' }
]

export const heroFacts = ['Novos', '1ª qualidade', 'São Paulo']
