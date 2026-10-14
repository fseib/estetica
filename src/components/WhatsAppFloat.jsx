import { useEffect, useState } from 'react'
import { waLink } from '../data'
import { WhatsAppIcon } from './Icons'

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a href={waLink()} target="_blank" rel="noopener noreferrer"
      className={`wa-float ${show ? 'is-visible' : ''}`} aria-label="Escribinos por WhatsApp">
      <WhatsAppIcon size={28} />
      <span className="wa-float__tip">¿Consultas? Escribinos</span>
    </a>
  )
}
