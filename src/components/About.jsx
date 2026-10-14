import { useEffect, useState } from 'react'
import { stats, steps } from '../data'
import { useReveal } from '../hooks/useReveal'
import Reveal from './Reveal'

function Counter({ value, decimals = 0, suffix }) {
  const [ref, visible] = useReveal()
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!visible) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(value)
      return
    }
    let raf
    const start = performance.now()
    const duration = 1600
    const tick = (t) => {
      const p = Math.min((t - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(value * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [visible, value])

  const formatted = n.toLocaleString('es-AR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <span ref={ref} className="stat__value">
      {formatted}<small>{suffix}</small>
    </span>
  )
}

export default function About() {
  return (
    <section id="nosotros" className="section section--tinted">
      <div className="container about">
        <Reveal className="about__text">
          <p className="eyebrow">Nosotros</p>
          <h2 className="section__title">Un espacio donde la ciencia <em>se encuentra con el cuidado</em></h2>
          <p>
            Desde 2014 acompañamos a cientos de personas en Buenos Aires a sentirse bien en su piel.
            Nuestro equipo de cosmiatras y kinesiólogas matriculadas combina formación constante,
            productos de primera línea y un trato cercano.
          </p>
          <p>
            Creemos en resultados reales y naturales, sin promesas mágicas: cada plan se arma con vos
            y se ajusta en cada sesión.
          </p>

          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <Counter {...s} />
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="steps">
          <Reveal as="p" className="steps__title">¿Cómo empezamos?</Reveal>
          {steps.map((s, i) => (
            <Reveal className="step" key={s.title} delay={i * 120}>
              <span className="step__num">0{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
