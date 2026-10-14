import { useCallback, useEffect, useRef, useState } from 'react'
import { testimonials } from '../data'
import { ChevronIcon, StarIcon } from './Icons'
import Reveal from './Reveal'

const INTERVAL = 6500

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef(null)
  const total = testimonials.length

  const go = useCallback((dir) => setIndex((i) => (i + dir + total) % total), [total])

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => go(1), INTERVAL)
    return () => clearInterval(id)
  }, [paused, go, index])

  const average = (testimonials.reduce((a, t) => a + t.rating, 0) / total).toFixed(1).replace('.', ',')

  return (
    <section id="opiniones" className="section">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">Opiniones</p>
          <h2 className="section__title">Lo que dicen <em>nuestras clientas</em></h2>
        </Reveal>

        <Reveal className="reviews" delay={100}>
          <aside className="reviews__summary">
            <span className="reviews__score">{average}</span>
            <div className="stars">
              {[...Array(5)].map((_, i) => <StarIcon key={i} size={18} />)}
            </div>
            <p>Promedio de reseñas verificadas en Google</p>
          </aside>

          <div className="carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            onTouchStart={(e) => { touchX.current = e.touches[0].clientX }}
            onTouchEnd={(e) => {
              if (touchX.current === null) return
              const dx = e.changedTouches[0].clientX - touchX.current
              if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1)
              touchX.current = null
            }}
            aria-roledescription="carrusel" aria-label="Opiniones de clientas">
            <div className="carousel__viewport">
              {testimonials.map((t, i) => (
                <figure key={t.name} className={`quote ${i === index ? 'is-active' : ''}`}
                  aria-hidden={i !== index}>
                  <span className="quote__mark" aria-hidden="true">“</span>
                  <div className="stars" aria-label={`${t.rating} de 5 estrellas`}>
                    {[...Array(5)].map((_, k) => <StarIcon key={k} size={14} filled={k < t.rating} />)}
                  </div>
                  <blockquote>{t.text}</blockquote>
                  <figcaption>
                    <span className="quote__avatar">{t.name[0]}</span>
                    <span>
                      <strong>{t.name}</strong>
                      <small>{t.location} · {t.service}</small>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="carousel__controls">
              <button className="icon-btn" onClick={() => go(-1)} aria-label="Opinión anterior">
                <ChevronIcon dir="left" />
              </button>
              <div className="dots" role="tablist">
                {testimonials.map((t, i) => (
                  <button key={t.name} role="tab" aria-selected={i === index}
                    aria-label={`Ver opinión ${i + 1}`}
                    className={`dots__dot ${i === index ? 'is-active' : ''}`}
                    onClick={() => setIndex(i)} />
                ))}
              </div>
              <button className="icon-btn" onClick={() => go(1)} aria-label="Opinión siguiente">
                <ChevronIcon />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
