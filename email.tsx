import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export interface EmailOptions {
  to: string
  subject: string
  html: string
  replyTo?: string
}

export async function sendEmail(options: EmailOptions) {
  const { to, subject, html, replyTo } = options

  const mailOptions = {
    from: process.env.SMTP_FROM || "Five Star Agro Solutions <noreply@5staragrosolution.com>",
    to,
    subject,
    html,
    replyTo,
  }

  const info = await transporter.sendMail(mailOptions)
  return info
}

export function createContactEmailHTML(data: { name: string; email: string; subject: string; message: string }) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <!-- Header -->
              <tr>
                <td style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 30px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
                </td>
              </tr>
              <!-- Content -->
              <tr>
                <td style="padding: 40px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding-bottom: 20px;">
                        <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Name</p>
                        <p style="margin: 0; color: #111827; font-size: 16px; font-weight: 600;">${data.name}</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-bottom: 20px;">
                        <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</p>
                        <p style="margin: 0; color: #111827; font-size: 16px;"><a href="mailto:${data.email}" style="color: #059669; text-decoration: none;">${data.email}</a></p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-bottom: 20px;">
                        <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Subject</p>
                        <p style="margin: 0; color: #111827; font-size: 16px; font-weight: 600;">${data.subject}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                        <div style="background-color: #f9fafb; border-radius: 8px; padding: 20px; margin-top: 10px;">
                          <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- Footer -->
              <tr>
                <td style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
                  <p style="margin: 0; color: #6b7280; font-size: 13px;">Five Star Agro Solutions</p>
                  <p style="margin: 5px 0 0 0; color: #9ca3af; font-size: 12px;">A greener universe through agriculture</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `
}

export function createNewsletterWelcomeHTML(email: string) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Five Star Agro Newsletter</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <!-- Header -->
              <tr>
                <td style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 40px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 28px;">Welcome to Our Newsletter!</h1>
                  <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">A greener universe through agriculture</p>
                </td>
              </tr>
              <!-- Content -->
              <tr>
                <td style="padding: 40px;">
                  <p style="margin: 0 0 20px 0; color: #374151; font-size: 16px; line-height: 1.6;">Thank you for subscribing to the Five Star Agro Solutions newsletter!</p>
                  <p style="margin: 0 0 20px 0; color: #374151; font-size: 16px; line-height: 1.6;">You'll now receive updates on:</p>
                  <ul style="margin: 0 0 20px 0; padding-left: 20px; color: #374151;">
                    <li style="margin-bottom: 10px;">Latest plantation news and updates</li>
                    <li style="margin-bottom: 10px;">Sustainable farming practices</li>
                    <li style="margin-bottom: 10px;">New crop varieties and products</li>
                    <li style="margin-bottom: 10px;">Industry insights and trends</li>
                  </ul>
                  <p style="margin: 0; color: #374151; font-size: 16px; line-height: 1.6;">Stay tuned for exciting updates!</p>
                </td>
              </tr>
              <!-- Footer -->
              <tr>
                <td style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
                  <p style="margin: 0; color: #6b7280; font-size: 13px;">Five Star Agro Solutions</p>
                  <p style="margin: 5px 0 0 0; color: #9ca3af; font-size: 12px;">You're receiving this email because you subscribed at ${email}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `
}
