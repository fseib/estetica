import { business } from '../data'
import { ArrowIcon, ClockIcon, PinIcon } from './Icons'
import Reveal from './Reveal'

export default function Location() {
  const q = encodeURIComponent(business.mapQuery)
  const embed = `https://maps.google.com/maps?q=${q}&z=16&output=embed`
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${q}`

  return (
    <section id="ubicacion" className="section section--tinted">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">Ubicación</p>
          <h2 className="section__title">Te esperamos <em>en Palermo</em></h2>
        </Reveal>

        <div className="location">
          <Reveal className="location__map">
            <iframe title={`Mapa de ${business.name}`} src={embed} loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </Reveal>

          <Reveal className="location__info" delay={120}>
            <div className="info-block">
              <span className="info-block__icon"><PinIcon /></span>
              <div>
                <h3>Dirección</h3>
                <p>{business.address}<br />{business.city}</p>
                <p className="muted">A 2 cuadras de la estación Bulnes (Línea D)</p>
              </div>
            </div>

            <div className="info-block">
              <span className="info-block__icon"><ClockIcon /></span>
              <div>
                <h3>Horarios</h3>
                <dl className="hours">
                  {business.hours.map((h) => (
                    <div key={h.days}>
                      <dt>{h.days}</dt>
                      <dd className={h.time === 'Cerrado' ? 'muted' : ''}>{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <a href={directions} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--block">
              Cómo llegar <ArrowIcon />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
