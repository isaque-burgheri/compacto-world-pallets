import { useRef } from 'react'
import { useReveal } from '../../hooks/useReveal'
import styles from './Reveal.module.css'

export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', threshold, ...rest }) {
  const ref = useRef(null)
  const isVisible = useReveal(ref, threshold === undefined ? undefined : { threshold })

  const classes = [styles.reveal, isVisible && styles.visible, className].filter(Boolean).join(' ')

  return (
    <Tag
      ref={ref}
      className={classes}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
