'use server';

import nodemailer from 'nodemailer';

export type ContactFormData = {
  name: string;
  email: string;
  inquiryType: string;
  role: string;
  message: string;
};

export async function sendContactEmail(data: ContactFormData) {
  const { name, email, inquiryType, role, message } = data;

  // Use environment variables for sensitive info
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const recipientEmail = process.env.CONTACT_RECIPIENT || 'mas@filmclusive.com,james@aaronkoganmanagement.com';

  if (!gmailUser || !gmailPass) {
    console.error('SMTP configuration missing: GMAIL_USER or GMAIL_APP_PASSWORD not set.');
    return { success: false, error: 'Email service not configured.' };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  });

  const mailOptions = {
    from: `"${name}" <${gmailUser}>`, // Gmail often overrides this, but good to have
    to: recipientEmail,
    replyTo: email,
    subject: `Enemy Alien: ${inquiryType} from ${name} (${role})`,
    text: `
Name: ${name}
Email: ${email}
Role: ${role}
Inquiry Type: ${inquiryType}

Message:
${message}
    `,
    html: `
      <h2>New Contact Inquiry: Enemy Alien</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Role:</strong> ${role}</p>
      <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
      <br/>
      <p><strong>Message:</strong></p>
      <div style="white-space: pre-wrap; background: #f4f4f4; padding: 15px; border-radius: 5px; border-left: 4px solid #cc0000;">
        ${message.replace(/\n/g, '<br/>')}
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error: any) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message || 'Failed to send message.' };
  }
}
