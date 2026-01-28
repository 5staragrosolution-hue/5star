// Email template types
export interface ContactEmailData {
  name: string
  email: string
  subject: string
  message: string
}

export interface NewsletterEmailData {
  email: string
}

// Contact form email template - sent to company
export function getContactEmailTemplate(data: ContactEmailData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">New Contact Form Submission</h1>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="padding: 30px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #059669; display: block; margin-bottom: 4px;">From:</strong>
                    <span style="color: #374151;">${data.name} &lt;${data.email}&gt;</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #059669; display: block; margin-bottom: 4px;">Subject:</strong>
                    <span style="color: #374151;">${data.subject}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0;">
                    <strong style="color: #059669; display: block; margin-bottom: 8px;">Message:</strong>
                    <div style="color: #374151; background-color: #f9fafb; padding: 16px; border-radius: 8px; line-height: 1.6;">
                      ${data.message.replace(/\n/g, "<br>")}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #6b7280; font-size: 12px;">
                This email was sent from the Five Star Agro Solutions website contact form.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

// Contact confirmation email - sent to user
export function getContactConfirmationTemplate(data: ContactEmailData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 40px; text-align: center;">
              <h1 style="margin: 0 0 8px 0; color: #ffffff; font-size: 28px; font-weight: 700;">Thank You!</h1>
              <p style="margin: 0; color: rgba(255,255,255,0.9); font-size: 16px;">We've received your message</p>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                Dear <strong>${data.name}</strong>,
              </p>
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                Thank you for contacting Five Star Agro Solutions. We have received your inquiry regarding "<strong>${data.subject}</strong>" and our team will review it shortly.
              </p>
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
                We typically respond within 24-48 business hours. If your matter is urgent, please call us directly.
              </p>
              <div style="background-color: #ecfdf5; border-left: 4px solid #059669; padding: 16px; border-radius: 0 8px 8px 0;">
                <p style="margin: 0; color: #047857; font-size: 14px;">
                  <strong>Your Reference:</strong> #${Date.now().toString(36).toUpperCase()}
                </p>
              </div>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 8px 0; color: #374151; font-weight: 600;">Five Star Agro Solutions</p>
              <p style="margin: 0; color: #6b7280; font-size: 14px;">A greener universe through agriculture</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

// Newsletter welcome email
export function getNewsletterWelcomeTemplate(data: NewsletterEmailData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #059669 0%, #0ea5e9 100%); padding: 50px 30px; text-align: center;">
              <h1 style="margin: 0 0 8px 0; color: #ffffff; font-size: 32px; font-weight: 700;">Welcome!</h1>
              <p style="margin: 0; color: rgba(255,255,255,0.9); font-size: 18px;">You're now part of our community</p>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                Thank you for subscribing to the Five Star Agro Solutions newsletter!
              </p>
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
                You'll receive updates on:
              </p>
              <ul style="color: #374151; font-size: 16px; line-height: 2; margin: 0 0 30px 0; padding-left: 20px;">
                <li>Latest agricultural insights and trends</li>
                <li>New plantation developments</li>
                <li>Sustainable farming practices</li>
                <li>Exclusive offers and opportunities</li>
              </ul>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="https://5staragrosolution.com" style="display: inline-block; background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 16px;">
                      Visit Our Website
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 8px 0; color: #374151; font-weight: 600;">Five Star Agro Solutions</p>
              <p style="margin: 0 0 16px 0; color: #6b7280; font-size: 14px;">A greener universe through agriculture</p>
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                You received this because ${data.email} subscribed to our newsletter.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

// Plain text versions
export function getPlainTextContact(data: ContactEmailData): string {
  return `
NEW CONTACT FORM SUBMISSION
============================

From: ${data.name} <${data.email}>
Subject: ${data.subject}

Message:
${data.message}

---
This email was sent from the Five Star Agro Solutions website contact form.
  `.trim()
}

export function getPlainTextNewsletter(data: NewsletterEmailData): string {
  return `
WELCOME TO FIVE STAR AGRO SOLUTIONS NEWSLETTER!
================================================

Thank you for subscribing!

You'll receive updates on:
- Latest agricultural insights and trends
- New plantation developments  
- Sustainable farming practices
- Exclusive offers and opportunities

Visit us: https://5staragrosolution.com

---
Five Star Agro Solutions
A greener universe through agriculture

You received this because ${data.email} subscribed to our newsletter.
  `.trim()
}
