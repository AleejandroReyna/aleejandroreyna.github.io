// Email templates for the contact form.
//
// These are plain strings, not React: mail clients render with wildly different
// engines (Outlook uses Word), so everything here is table-based with fully
// inline styles, web-safe fonts and solid background colours only. No flexbox,
// no <style> blocks, no web fonts, no SVG, no gradients — all of which get
// dropped somewhere along the chain.

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
    const row = (label: string, value?: string | null) =>
        value
            ? `<tr>
                 <td style="padding:6px 16px 6px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#777;white-space:nowrap;vertical-align:top;">${label}</td>
                 <td style="padding:6px 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111;">${esc(value)}</td>
               </tr>`
            : ''

    const html = `
<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;max-width:600px;">
  <tr><td style="font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#111;padding-bottom:14px;">
    <strong>New contact submission</strong>
  </td></tr>
  <tr><td>
    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
      ${row('Name', data.name)}
      ${row('Email', data.email)}
      ${row('Phone', data.phone)}
      ${row('Company', data.company)}
      ${row('Budget', data.budget)}
      ${row('Subject', data.subject)}
      ${row('Language', data.locale)}
    </table>
  </td></tr>
  <tr><td style="padding-top:16px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.7;color:#111;border-top:1px solid #e0e0e0;margin-top:16px;">
    ${nl2br(data.message)}
  </td></tr>
  <tr><td style="padding-top:18px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#888;">
    Reply directly to this email to answer ${esc(data.name)}.
  </td></tr>
</table>`.trim()

    return {
        subject: `New contact: ${data.name}${data.company ? ` — ${data.company}` : ''}`,
        html,
    }
}

/* ------------------------------------------------------------------ */
/* 2. Confirmation to the visitor — the branded one.                    */
/* ------------------------------------------------------------------ */

const COPY = {
    en: {
        subject: 'Thanks for reaching out — Alejandro Reyna',
        role: 'SENIOR SOFTWARE DEVELOPER',
        greeting: (name: string) => `Hi ${name},`,
        body: 'Your message arrived. I read everything myself, and I reply in under 24 hours — usually sooner.',
        recap: 'What you sent',
        noSubject: '(no subject)',
        meanwhile: 'In the meantime, if it is easier to talk than to type:',
        cta: 'Book 30 minutes',
        footerNote: 'This address is unmonitored. Reply to this email and it reaches me directly.',
        quote: 'Simple is better than complex.',
    },
    es: {
        subject: 'Gracias por escribir — Alejandro Reyna',
        role: 'DESARROLLADOR DE SOFTWARE SENIOR',
        greeting: (name: string) => `Hola ${name}:`,
        body: 'Tu mensaje llegó. Los leo todos personalmente y respondo en menos de 24 horas, normalmente antes.',
        recap: 'Lo que enviaste',
        noSubject: '(sin asunto)',
        meanwhile: 'Mientras tanto, si prefieres hablar en vez de escribir:',
        cta: 'Agenda 30 minutos',
        footerNote: 'Esta dirección no se revisa. Responde a este correo y me llega directo.',
        quote: 'Lo simple es mejor que lo complejo.',
    },
} as const

export function buildUserConfirmation(data: ContactSubmissionData) {
    const lang = data.locale === 'es' ? 'es' : 'en'
    const t = COPY[lang]
    const firstName = esc(data.name.trim().split(/\s+/)[0])

    const html = `
<table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;background-color:#f2f4f2;">
 <tr><td align="center" style="padding:28px 12px;">

  <table cellpadding="0" cellspacing="0" border="0" width="520" style="border-collapse:collapse;width:520px;max-width:520px;">

    <!-- Header: dark field, same as the site -->
    <tr>
      <td bgcolor="#0f2419" style="background-color:#0f2419;padding:30px 34px 26px 34px;">
        <div style="font-family:Georgia,'Times New Roman',serif;font-size:27px;line-height:1.2;color:#f2f4f0;letter-spacing:-0.3px;">Alejandro Reyna<span style="color:#46d386;">.</span></div>
        <div style="font-family:Consolas,'Courier New',monospace;font-size:11px;letter-spacing:2px;color:#46d386;padding-top:8px;">${t.role}</div>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td bgcolor="#ffffff" style="background-color:#ffffff;padding:32px 34px 8px 34px;">
        <div style="font-family:Georgia,'Times New Roman',serif;font-size:20px;line-height:1.4;color:#0a1410;">${t.greeting(firstName)}</div>
        <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.75;color:#4f6157;padding-top:12px;">${t.body}</div>
      </td>
    </tr>

    <!-- Recap of what they sent -->
    <tr>
      <td bgcolor="#ffffff" style="background-color:#ffffff;padding:22px 34px 0 34px;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
          <tr>
            <td bgcolor="#f4fbf7" style="background-color:#f4fbf7;border-left:3px solid #46d386;padding:18px 20px;">
              <div style="font-family:Consolas,'Courier New',monospace;font-size:10px;letter-spacing:1.8px;color:#237a4b;padding-bottom:10px;">${t.recap.toUpperCase()}</div>
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:#0a1410;font-weight:bold;">${data.subject ? esc(data.subject) : t.noSubject}</div>
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.7;color:#55665c;padding-top:8px;">${nl2br(data.message)}</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- CTA -->
    <tr>
      <td bgcolor="#ffffff" style="background-color:#ffffff;padding:26px 34px 32px 34px;">
        <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.7;color:#4f6157;padding-bottom:16px;">${t.meanwhile}</div>
        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
          <tr>
            <td bgcolor="#0f2419" style="background-color:#0f2419;padding:13px 26px;">
              <a href="https://calendly.com/aleejandroreyna" style="font-family:Consolas,'Courier New',monospace;font-size:13px;letter-spacing:1.4px;color:#9be8b8;text-decoration:none;">${t.cta.toUpperCase()} &rarr;</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td bgcolor="#ffffff" style="background-color:#ffffff;border-top:1px solid #e4ede8;padding:22px 34px 30px 34px;">
        <div style="font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:15px;line-height:1.5;color:#8b9b91;padding-bottom:16px;">${t.quote}</div>
        <div style="font-family:Consolas,'Courier New',monospace;font-size:12px;line-height:1.9;color:#55665c;">
          <a href="${SITE}" style="color:#25543a;text-decoration:none;font-weight:bold;">alejandroreyna.com</a><br>
          <a href="https://github.com/aleejandroReyna" style="color:#55665c;text-decoration:none;">GitHub</a>
          &nbsp;&middot;&nbsp;
          <a href="https://linkedin.com/in/aleejandroreyna" style="color:#55665c;text-decoration:none;">LinkedIn</a><br>
          Guatemala City &middot; UTC&minus;6
        </div>
        <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:1.6;color:#9aa89f;padding-top:16px;">${t.footerNote}</div>
      </td>
    </tr>

  </table>

 </td></tr>
</table>`.trim()

    return { subject: t.subject, html }
}
