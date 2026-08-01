import { useState } from 'react'
import { business, buildWhatsAppUrl } from '../../data/business'
import styles from './QuoteForm.module.css'

export default function QuoteForm() {
  const [nome, setNome] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [observacoes, setObservacoes] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const partes = [
      `Olá! Meu nome é ${nome.trim()}${empresa.trim() ? `, da empresa ${empresa.trim()}` : ''}.`,
      `Preciso de ${quantidade.trim()} paletes PBR novos.`
    ]
    if (observacoes.trim()) partes.push(observacoes.trim())

    const url = buildWhatsAppUrl(business.whatsapp[0].number, partes.join(' '))
    window.open(url, '_blank', 'noopener')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="quote-nome">
          Nome
        </label>
        <input
          id="quote-nome"
          className={styles.input}
          type="text"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Seu nome"
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="quote-empresa">
          Empresa (opcional)
        </label>
        <input
          id="quote-empresa"
          className={styles.input}
          type="text"
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
          placeholder="Nome da empresa"
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="quote-quantidade">
          Quantidade de paletes
        </label>
        <input
          id="quote-quantidade"
          className={styles.input}
          type="text"
          required
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          placeholder="Ex.: 50 unidades"
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="quote-observacoes">
          Observações (opcional)
        </label>
        <textarea
          id="quote-observacoes"
          className={styles.textarea}
          value={observacoes}
          onChange={(e) => setObservacoes(e.target.value)}
          placeholder="Medida, endereço de entrega, prazo..."
        />
      </div>

      <button type="submit" className={styles.submit}>
        Montar mensagem e abrir WhatsApp
      </button>
    </form>
  )
}
