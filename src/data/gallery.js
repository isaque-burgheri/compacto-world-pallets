const BASE = '/media/gallery'

export const galleryPhotos = [
  {
    file: 'ambiente-galpao-02.jpg',
    alt: 'Vista geral do galpão da Compacto World Pallets com pilhas de paletes PBR organizadas'
  },
  {
    file: 'produto-unidade-03.jpg',
    alt: 'Palete PBR novo, unidade avulsa, vista completa sobre o piso do galpão'
  },
  {
    file: 'equipe-colaboradores.jpg',
    alt: 'Colaboradores da Compacto World Pallets em uniforme trabalhando no galpão'
  },
  {
    file: 'produto-pbr-fileiras.jpg',
    alt: 'Fileiras de paletes PBR novos com estampa PBR empilhados no galpão'
  },
  {
    file: 'ambiente-galpao-carregamento.jpg',
    alt: 'Caminhão sendo carregado com paletes PBR dentro do galpão'
  },
  {
    file: 'produto-unidade-01.jpg',
    alt: 'Palete PBR novo visto de lado, mostrando a dupla face e as entradas para empilhadeira'
  },
  {
    file: 'produto-pilha-01.jpg',
    alt: 'Pilha de paletes PBR novos vista de cima, com marcação de qualidade'
  },
  {
    file: 'ambiente-doca-carregamento.jpg',
    alt: 'Doca de carregamento do galpão com colaboradores carregando o caminhão'
  },
  {
    file: 'produto-unidade-02.jpg',
    alt: 'Palete PBR novo em primeiro plano, com pilhas de paletes ao fundo'
  },
  {
    file: 'ambiente-galpao-01.jpg',
    alt: 'Corredor do galpão com fileiras de paletes PBR empilhados'
  },
  {
    file: 'equipamento-paleteira.jpg',
    alt: 'Paleteira manual em frente a uma pilha de paletes PBR novos'
  },
  {
    file: 'produto-pilha-02.jpg',
    alt: 'Pilha de paletes PBR novos vista de perto, mostrando as travessas de madeira'
  },
  {
    file: 'produto-pilha-03.jpg',
    alt: 'Pilha de paletes PBR novos iluminada pela luz natural do galpão'
  },
  {
    file: 'produto-pilha-04.jpg',
    alt: 'Detalhe de pilha de paletes PBR novos, madeira de eucalipto à mostra'
  },
  {
    file: 'produto-pilha-05.jpg',
    alt: 'Pilha de paletes PBR novos sob a estrutura do telhado do galpão'
  },
  {
    file: 'produto-pilha-06.jpg',
    alt: 'Detalhe de pilha de paletes PBR novos, encaixe das travessas'
  }
]

export const galleryVideos = Array.from({ length: 9 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0')
  return {
    file: `video-${n}.mp4`,
    poster: `posters/video-${n}.jpg`,
    label: `Vídeo ${i + 1}`
  }
})

export function galleryAssetUrl(file) {
  return `${BASE}/${file}`
}
