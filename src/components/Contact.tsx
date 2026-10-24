import { Button, Field, Textarea, TextField } from '@rupa-ui/react'
import { useState, type FormEvent } from 'react'
import { contacts, profile } from '../data.ts'
import { useClock, useCopy } from '../hooks.ts'
import { useLang } from '../i18n.ts'
import { Icon, type IconName } from './Icon.tsx'
import { Reveal, Section } from './Section.tsx'

const ICONS: Record<string, IconName> = { email: 'mail', linkedin: 'linkedin', github: 'github' }

export function Contact() {
  const { t, tr, lang } = useLang()
  const email = contacts.find((c) => c.href.startsWith('mailto:'))
  const others = contacts.filter((c) => c !== email)
  const time = useClock(profile.timeZone, lang)
  // Link mailto: tidak berbuat apa-apa jika pengunjung tidak punya aplikasi email default, jadi ada tombol salin.
  const { copied, copy } = useCopy(t.copyPrompt)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const send = (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    const params = new URLSearchParams({ subject: t.mailSubject(name.trim()), body: message.trim() })
    window.location.href = `${email.href}?${params.toString().replace(/\+/g, '%20')}`
  }

  return (
    <Section id="kontak" title={t.contactTitle} lead={t.contactLead}>
      <div className="contact">
        <Reveal className="contact-info">
          {email && (
            <div className="contact-email">
              <a href={email.href} className="contact-big">
                {email.value}
              </a>
              <Button size="sm" iconStart={<Icon name="copy" size={15} />} onClick={() => copy(email.value)}>
                {copied ? t.copied : t.copyEmail}
              </Button>
            </div>
          )}
          <ul className="contact-links">
            {others.map((c) => (
              <li key={c.href}>
                <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  <Icon name={ICONS[tr(c.label).toLowerCase()] ?? 'globe'} size={18} />
                  <span>
                    <small>{tr(c.label)}</small>
                    {c.value}
                  </span>
                  <Icon name="arrowUpRight" size={16} />
                </a>
              </li>
            ))}
          </ul>
          <p className="contact-time">
            <Icon name="clock" size={16} /> {t.localTime}: <b>{time}</b> · {tr(profile.location)}
          </p>
        </Reveal>

        {email && (
          <Reveal as="form" className="contact-form" delay={120} onSubmit={send}>
            <TextField label={t.yourName} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
            <Field label={t.message}>
              {({ id, describedBy }) => (
                <Textarea
                  id={id}
                  aria-describedby={describedBy}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.messagePlaceholder}
                  rows={5}
                  required
                />
              )}
            </Field>
            <Button variant="primary" type="submit" iconStart={<Icon name="mail" size={16} />}>
              {t.send}
            </Button>
          </Reveal>
        )}
      </div>
    </Section>
  )
}
