import { services, waLink } from '../data'
import { ArrowIcon, ServiceIcon } from './Icons'
import Reveal from './Reveal'

export default function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">Tratamientos</p>
          <h2 className="section__title">Cuidado integral, <em>pensado para vos</em></h2>
          <p className="section__lead">
            Cada tratamiento comienza con una evaluación personalizada para entender tu piel,
            tu cuerpo y tus objetivos.
          </p>
        </Reveal>

        <div className="services">
          {services.map((s, i) => (
            <Reveal as="article" key={s.title} className="service" delay={i * 100}>
              <div className="service__icon"><ServiceIcon name={s.icon} /></div>
              <h3 className="service__title">{s.title}</h3>
              <p className="service__desc">{s.description}</p>
              <ul className="service__list">
                {s.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
              <div className="service__foot">
                <span className="service__duration">{s.duration}</span>
                <a href={waLink(`¡Hola! Quisiera consultar por ${s.title.toLowerCase()}.`)}
                  target="_blank" rel="noopener noreferrer" className="service__link">
                  Consultar <ArrowIcon size={16} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
