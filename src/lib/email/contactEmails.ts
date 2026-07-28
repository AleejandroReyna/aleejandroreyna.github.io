// Email templates for the contact form.
//
// These are plain strings, not React: mail clients render with wildly different
// engines (Outlook uses Word), so everything here is table-based with fully
// inline styles, web-safe fonts and solid background colours only. No flexbox,
// no <style> blocks, no web fonts, no SVG, no gradients — all of which get
// dropped somewhere along the chain.

import { envs } from '@/lib/envs'

export interface ContactSubmissionData {
    name: string
    email: string
    subject?: string | null
    phone?: string | null
    company?: string | null
    budget?: string | null
    message: string
    locale?: string | null
}

const SITE = 'https://alejandroreyna.com'
const CALENDLY = 'https://calendly.com/aleejandroreyna'
const LINKEDIN = 'https://linkedin.com/in/aleejandroreyna'
const GITHUB = 'https://github.com/aleejandroReyna'
// The address visitors are told to write to. Falls back to a sensible default
// so the template never renders an empty mailto if the env var is missing.
const CONTACT_EMAIL = envs.smtp.notifyTo ?? 'me@alejandroreyna.com'

// Escapes user-supplied values before they go into an HTML email. Without this
// a submitted "<script>" or a stray "<" would break the markup, and the owner
// notification echoes back whatever a stranger typed.
const esc = (value: string | null | undefined): string =>
    String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')

// Preserves the line breaks someone typed into the textarea.
const nl2br = (value: string): string => esc(value).replace(/\r?\n/g, '<br>')

/* ------------------------------------------------------------------ */
/* 1. Notification to the site owner — functional, not decorative.      */
/* ------------------------------------------------------------------ */

export function buildOwnerNotification(data: ContactSubmissionData) {
    // Only rows with a value render — an empty "Company:" line is noise in
    // something read at a glance, often on a phone.
    const row = (label: string, value?: string | null) =>
        value
            ? `<tr>
                 <td style="padding:7px 18px 7px 0;font-family:Consolas,'Courier New',monospace;font-size:11px;letter-spacing:1.4px;color:#6f7f75;white-space:nowrap;vertical-align:top;">${label}</td>
                 <td style="padding:7px 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#dfe5e0;vertical-align:top;">${esc(value)}</td>
               </tr>`
            : ''

    const firstName = esc(data.name.trim().split(/\s+/)[0]).toUpperCase()

    const html = `
<table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;background-color:#060907;">
 <tr><td align="center" style="padding:32px 12px;">

  <table cellpadding="0" cellspacing="0" border="0" width="560" style="border-collapse:collapse;width:560px;max-width:560px;background-color:#0a0d0b;">

    <tr>
      <td style="padding:32px 38px 0 38px;">
        <div style="font-family:Consolas,'Courier New',monospace;font-size:11px;letter-spacing:2px;color:#46d386;">NUEVO MENSAJE &middot; ${data.locale === 'es' ? 'ESPA&Ntilde;OL' : 'INGL&Eacute;S'}</div>
      </td>
    </tr>

    <tr>
      <td style="padding:18px 38px 0 38px;">
        <div style="font-family:Georgia,'Times New Roman',serif;font-size:32px;line-height:1.15;color:#f2f4f0;letter-spacing:-0.4px;">${esc(data.name)}<span style="color:#46d386;">.</span></div>
      </td>
    </tr>

    <tr>
      <td style="padding:22px 38px 0 38px;">
        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
          ${row('CORREO', data.email)}
          ${row('TEL&Eacute;FONO', data.phone)}
          ${row('EMPRESA', data.company)}
          ${row('PRESUPUESTO', data.budget)}
          ${row('ASUNTO', data.subject)}
        </table>
      </td>
    </tr>

    <tr>
      <td style="padding:26px 38px 0 38px;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
          <tr>
            <td bgcolor="#0f1512" style="background-color:#0f1512;border-left:3px solid #46d386;padding:18px 22px;">
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.8;color:#f2f4f0;">${nl2br(data.message)}</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <tr>
      <td style="padding:26px 38px 34px 38px;">
        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
          <tr>
            <td style="border:1px solid #46d386;padding:12px 24px;">
              <a href="mailto:${esc(data.email)}" style="font-family:Consolas,'Courier New',monospace;font-size:12px;letter-spacing:1.4px;color:#9be8b8;text-decoration:none;">RESPONDER A ${firstName} &rarr;</a>
            </td>
          </tr>
        </table>
        <div style="font-family:Consolas,'Courier New',monospace;font-size:11px;line-height:1.7;color:#6f7f75;padding-top:16px;">
          O responde a este correo directamente.
        </div>
      </td>
    </tr>

  </table>

 </td></tr>
</table>`.trim()

    return {
        subject: `Nuevo contacto: ${data.name}${data.company ? ` — ${data.company}` : ''}`,
        html,
    }
}

/* ------------------------------------------------------------------ */
/* 2. Confirmation to the visitor — the branded one.                    */
/* ------------------------------------------------------------------ */

const COPY = {
    en: {
        subject: 'Thanks for reaching out — Alejandro Reyna',
        identity: 'ALEJANDRO REYNA · SENIOR SOFTWARE DEVELOPER',
        headlineTop: 'Thanks for',
        headlineBottom: 'writing',
        body: (name: string) =>
            `Hi ${name}, your message is in my inbox. I read every one of them myself and reply in under 24 hours, usually sooner.`,
        meanwhile: 'IN THE MEANTIME',
        links: [
            { href: `${SITE}/portfolio`, title: 'Portfolio', desc: 'Platforms, e-commerce and chatbots in production' },
            { href: `${SITE}/blog`, title: 'Blog', desc: 'Notes on architecture and cloud systems' },
            { href: CALENDLY, title: 'Book a call', desc: '30 minutes, no sales pitch' },
        ],
        quote: 'Simple is better than complex.',
        footerNote: "This mailbox isn't monitored. To reach me directly:",
    },
    es: {
        subject: 'Gracias por escribir — Alejandro Reyna',
        identity: 'ALEJANDRO REYNA · DESARROLLADOR DE SOFTWARE SENIOR',
        headlineTop: 'Gracias por',
        headlineBottom: 'escribir',
        body: (name: string) =>
            `Hola ${name}, tu mensaje ya está en mi bandeja. Los leo todos personalmente y te respondo en menos de 24 horas, normalmente antes.`,
        meanwhile: 'MIENTRAS TANTO',
        links: [
            { href: `${SITE}/portfolio`, title: 'Portafolio', desc: 'Plataformas, e-commerce y chatbots en producción' },
            { href: `${SITE}/blog`, title: 'Blog', desc: 'Notas sobre arquitectura y sistemas en la nube' },
            { href: CALENDLY, title: 'Agenda una llamada', desc: '30 minutos, sin discurso de venta' },
        ],
        quote: 'Lo simple es mejor que lo complejo.',
        footerNote: 'Este buzón no se revisa. Para escribirme directamente:',
    },
} as const

export function buildUserConfirmation(data: ContactSubmissionData) {
    const lang = data.locale === 'es' ? 'es' : 'en'
    const t = COPY[lang]
    const firstName = esc(data.name.trim().split(/\s+/)[0])

    // Rows for the three invitations. Built as table rows rather than a list
    // so Outlook keeps the dividers and spacing.
    const linkRows = t.links
        .map(
            (link, i) => `
          <tr>
            <td style="border-top:1px solid #1c2521;${i === t.links.length - 1 ? 'border-bottom:1px solid #1c2521;' : ''}padding:18px 0;">
              <a href="${link.href}" style="text-decoration:none;">
                <span style="font-family:Georgia,'Times New Roman',serif;font-size:21px;color:#f2f4f0;">${link.title}</span>
                <span style="font-family:Georgia,serif;font-size:21px;color:#46d386;">&nbsp;&rarr;</span>
                <br>
                <span style="font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;color:#8b9b91;">${link.desc}</span>
              </a>
            </td>
          </tr>`,
        )
        .join('')

    const html = `
<table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;background-color:#060907;">
 <tr><td align="center" style="padding:32px 12px;">

  <table cellpadding="0" cellspacing="0" border="0" width="540" style="border-collapse:collapse;width:540px;max-width:540px;background-color:#0a0d0b;">

    <tr>
      <td style="padding:36px 40px 0 40px;">
        <div style="font-family:Consolas,'Courier New',monospace;font-size:11px;letter-spacing:2px;color:#46d386;">${t.identity}</div>
      </td>
    </tr>

    <tr>
      <td style="padding:26px 40px 0 40px;">
        <div style="font-family:Georgia,'Times New Roman',serif;font-size:40px;line-height:1.1;color:#f2f4f0;letter-spacing:-0.5px;">${t.headlineTop}<br>${t.headlineBottom}<span style="color:#46d386;">.</span></div>
      </td>
    </tr>

    <tr>
      <td style="padding:22px 40px 0 40px;">
        <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.8;color:#a8bcb0;">${t.body(firstName)}</div>
      </td>
    </tr>

    <tr>
      <td style="padding:38px 40px 0 40px;">
        <div style="font-family:Consolas,'Courier New',monospace;font-size:11px;letter-spacing:2px;color:#46d386;padding-bottom:6px;">${t.meanwhile}</div>
      </td>
    </tr>

    <tr>
      <td style="padding:0 40px;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">${linkRows}
        </table>
      </td>
    </tr>

    <tr>
      <td style="padding:26px 40px 0 40px;">
        <div style="font-family:Consolas,'Courier New',monospace;font-size:12px;letter-spacing:1.4px;color:#8b9b91;">
          <a href="${LINKEDIN}" style="color:#9be8b8;text-decoration:none;">LINKEDIN</a>
          &nbsp;&middot;&nbsp;
          <a href="${GITHUB}" style="color:#9be8b8;text-decoration:none;">GITHUB</a>
        </div>
      </td>
    </tr>

    <tr>
      <td style="padding:34px 40px 36px 40px;">
        <div style="font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:16px;line-height:1.5;color:#6f7f75;padding-bottom:18px;">${t.quote}</div>
        <div style="font-family:Consolas,'Courier New',monospace;font-size:11px;line-height:1.8;color:#6f7f75;">
          <a href="${SITE}" style="color:#8b9b91;text-decoration:none;">alejandroreyna.com</a>
          &nbsp;&middot;&nbsp; Guatemala City &middot; UTC&minus;6
          <br>
          ${t.footerNote}
          <a href="mailto:${CONTACT_EMAIL}" style="color:#8b9b91;text-decoration:none;">${CONTACT_EMAIL}</a>
        </div>
      </td>
    </tr>

  </table>

 </td></tr>
</table>`.trim()

    return { subject: t.subject, html }
}
