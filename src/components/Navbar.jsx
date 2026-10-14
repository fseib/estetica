import { useEffect, useState } from 'react'
import { business, waLink } from '../data'

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#opiniones', label: 'Opiniones' },
  { href: '#ubicacion', label: 'Ubicación' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="container nav__inner">
        <a href="#inicio" className="logo" onClick={() => setOpen(false)}>
          <span className="logo__name">{business.name}</span>
          <span className="logo__tag">{business.tagline}</span>
        </a>

        <nav className="nav__links" aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={waLink('¡Hola! Quisiera reservar un turno.')} target="_blank" rel="noopener noreferrer"
            className="btn btn--primary btn--sm nav__cta">
            Reservar turno
          </a>
        </nav>

        <button className="nav__toggle" aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <span /><span />
        </button>
      </div>
    </header>
  )
}
