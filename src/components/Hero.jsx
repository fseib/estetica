import { waLink } from '../data'
import { ArrowIcon, StarIcon, WhatsAppIcon } from './Icons'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow hero__anim" style={{ '--d': '0ms' }}>Centro de estética · Palermo, CABA</p>
          <h1 className="hero__title hero__anim" style={{ '--d': '120ms' }}>
            Tu piel, tu tiempo,
            <br />
            <em>tu mejor versión.</em>
          </h1>
          <p className="hero__lead hero__anim" style={{ '--d': '240ms' }}>
            Tratamientos faciales, corporales y de bienestar diseñados a tu medida, con
            profesionales matriculadas y tecnología de última generación.
          </p>
          <div className="hero__actions hero__anim" style={{ '--d': '360ms' }}>
            <a href={waLink('¡Hola! Quisiera reservar un turno.')} target="_blank" rel="noopener noreferrer"
              className="btn btn--primary">
              <WhatsAppIcon size={18} /> Reservá por WhatsApp
            </a>
            <a href="#servicios" className="btn btn--ghost">
              Ver tratamientos <ArrowIcon />
            </a>
          </div>
          <div className="hero__trust hero__anim" style={{ '--d': '480ms' }}>
            <div className="avatars" aria-hidden="true">
              <span>C</span><span>L</span><span>M</span><span>+</span>
            </div>
            <div>
              <div className="stars" aria-label="4,9 de 5 estrellas">
                {[...Array(5)].map((_, i) => <StarIcon key={i} size={14} />)}
              </div>
              <p>+8.500 clientas confían en nosotras</p>
            </div>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="arch arch--back" />
          <div className="arch arch--front">
            <div className="arch__ring" />
            <span className="arch__word">Aurea</span>
          </div>
          <div className="float-card float-card--top">
            <span className="float-card__value">4,9</span>
            <span className="float-card__label">en Google<br />+600 reseñas</span>
          </div>
          <div className="float-card float-card--bottom">
            <span className="dot" />
            <span className="float-card__label">Evaluación inicial<br /><strong>sin cargo</strong></span>
          </div>
        </div>
      </div>
    </section>
  )
}
