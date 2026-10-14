import { useState } from 'react'
import { business, faqs, services, waLink } from '../data'
import { InstagramIcon, MailIcon, WhatsAppIcon } from './Icons'
import Reveal from './Reveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', service: '', moment: '', message: '' })
  const [openFaq, setOpenFaq] = useState(0)

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const lines = [
      `¡Hola! Soy ${form.name.trim()}.`,
      form.service && `Me interesa: ${form.service}.`,
      form.moment && `Preferencia horaria: ${form.moment}.`,
      form.message.trim() && form.message.trim(),
    ].filter(Boolean)
    window.open(waLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contacto" className="section">
      <div className="container contact">
        <Reveal className="contact__intro">
          <p className="eyebrow">Contacto</p>
          <h2 className="section__title">Reservá tu turno <em>en minutos</em></h2>
          <p className="section__lead">
            Completá tus datos y te abrimos WhatsApp con el mensaje listo para enviar.
            Respondemos en menos de una hora en horario de atención.
          </p>

          <ul className="contact__channels">
            <li>
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                <span className="channel-icon channel-icon--wa"><WhatsAppIcon /></span>
                <span><small>WhatsApp</small>{business.whatsappDisplay}</span>
              </a>
            </li>
            <li>
              <a href={`https://instagram.com/${business.instagram}`} target="_blank" rel="noopener noreferrer">
                <span className="channel-icon"><InstagramIcon /></span>
                <span><small>Instagram</small>@{business.instagram}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`}>
                <span className="channel-icon"><MailIcon /></span>
                <span><small>Email</small>{business.email}</span>
              </a>
            </li>
          </ul>

          <div className="faq">
            <h3 className="faq__title">Preguntas frecuentes</h3>
            {faqs.map((f, i) => (
              <div key={f.q} className={`faq__item ${openFaq === i ? 'is-open' : ''}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}>
                  {f.q}
                  <span className="faq__plus" aria-hidden="true" />
                </button>
                <div className="faq__answer"><div><p>{f.a}</p></div></div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal as="form" className="form" onSubmit={submit} delay={120}>
          <h3 className="form__title">Solicitá tu turno</h3>
          <label className="field">
            <span>Nombre</span>
            <input name="name" value={form.name} onChange={update} required placeholder="¿Cómo te llamás?" autoComplete="given-name" />
          </label>
          <label className="field">
            <span>Tratamiento de interés</span>
            <select name="service" value={form.service} onChange={update}>
              <option value="">Todavía no sé / quiero asesoramiento</option>
              {services.flatMap((s) => s.items.map((it) => (
                <option key={it} value={it}>{s.title} — {it}</option>
              )))}
            </select>
          </label>
          <fieldset className="field">
            <span>Preferencia horaria</span>
            <div className="chips">
              {['Mañana', 'Tarde', 'Sábado'].map((m) => (
                <label key={m} className={`chip ${form.moment === m ? 'is-active' : ''}`}>
                  <input type="radio" name="moment" value={m} checked={form.moment === m} onChange={update} />
                  {m}
                </label>
              ))}
            </div>
          </fieldset>
          <label className="field">
            <span>Mensaje <small>(opcional)</small></span>
            <textarea name="message" rows="3" value={form.message} onChange={update} placeholder="Contanos lo que necesites" />
          </label>
          <button type="submit" className="btn btn--primary btn--block">
            <WhatsAppIcon size={18} /> Enviar por WhatsApp
          </button>
          <p className="form__note">No compartimos tus datos con terceros.</p>
        </Reveal>
      </div>
    </section>
  )
}
