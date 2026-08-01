const WHATSAPP_MESSAGE = 'Olá! Preciso de um orçamento de paletes PBR novos.'
const ADDRESS = 'Av. Adriano Bertozzi, 563 — São Paulo/SP'

export function buildWhatsAppUrl(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export const business = {
  name: 'Compacto World Pallets',
  tagline: 'Compromisso, qualidade e agilidade em cada entrega',
  materialCall: 'Soluções em paletes com qualidade e confiança',
  product: 'Paletes PBR novos, primeira qualidade',
  address: ADDRESS,
  // Endereço quebrado em 2 linhas para a barra de contato
  addressLines: ['Av. Adriano Bertozzi, 563', 'São Paulo - SP'],
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`,
  // CONFIRMAR: e-mail real da Compacto. Este é um placeholder de teste.
  email: 'contato@exemplo.com.br',
  deliveryArea: 'São Paulo e região',
  whatsapp: [
    {
      number: '5511921218541',
      label: '(11) 92121-8541',
      url: buildWhatsAppUrl('5511921218541', WHATSAPP_MESSAGE)
    },
    {
      number: '5511991023133',
      label: '(11) 99102-3133',
      url: buildWhatsAppUrl('5511991023133', WHATSAPP_MESSAGE)
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
  { label: 'MADEIRA', value: 'Eucalipto' },
  { label: 'CONDIÇÃO', value: 'Novo' },
  { label: 'CAPACIDADE DE CARGA', value: 'Sob consulta' },
  { label: 'ENTREGA', value: 'São Paulo e região' }
]

export const heroFacts = ['Novos', '1ª qualidade', 'São Paulo']
