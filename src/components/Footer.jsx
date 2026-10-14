import { business, waLink } from '../data'
import { InstagramIcon, WhatsAppIcon } from './Icons'

export default function Footer() {
  return (
    <>
      <section className="cta-band">
        <div className="container cta-band__inner">
          <h2>Regalate un momento <em>para vos</em>.</h2>
          <a href={waLink('¡Hola! Quisiera reservar un turno.')} target="_blank" rel="noopener noreferrer"
            className="btn btn--light">
            <WhatsAppIcon size={18} /> Reservar ahora
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="logo logo--light">
            <span className="logo__name">{business.name}</span>
            <span className="logo__tag">{business.tagline}</span>
          </div>
          <p className="footer__addr">{business.address} · {business.city}</p>
          <div className="footer__social">
            <a href={`https://instagram.com/${business.instagram}`} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsAppIcon /></a>
          </div>
        </div>
        <div className="container footer__legal">
          <span>© {new Date().getFullYear()} {business.name} {business.tagline}. Todos los derechos reservados.</span>
          <span>Profesionales matriculadas · Habilitación GCBA</span>
        </div>
      </footer>
    </>
  )
}
