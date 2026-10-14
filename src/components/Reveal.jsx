import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, visible] = useReveal()
  // Una vez terminada la entrada, quitamos el delay para que no afecte hovers posteriores.
  const [done, setDone] = useState(false)

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={done || !delay ? undefined : { transitionDelay: `${delay}ms` }}
      onTransitionEnd={(e) => {
        if (visible && e.target === e.currentTarget) setDone(true)
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
