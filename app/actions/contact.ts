'use server';

import nodemailer from 'nodemailer';

export type ContactFormData = {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
  website?: string;
};

const LIMITS = { name: 100, email: 254, inquiryType: 60, message: 4000 } as const;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let transporter: ReturnType<typeof nodemailer.createTransport> | null = null;

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]!);
}

function getTransporter(user: string, pass: string) {
  transporter ??= nodemailer.createTransport({
    service: 'gmail',
    pool: true,
    maxConnections: 1,
    maxMessages: 50,
    connectionTimeout: 8_000,
    greetingTimeout: 8_000,
    socketTimeout: 12_000,
    auth: { user, pass },
  });
  return transporter;
}

export async function sendContactEmail(input: ContactFormData) {
  if (input.website) return { success: true };

  const data = {
    name: clean(input.name, LIMITS.name),
    email: clean(input.email, LIMITS.email).toLowerCase(),
    inquiryType: clean(input.inquiryType, LIMITS.inquiryType),
    message: clean(input.message, LIMITS.message),
  };

  if (!data.name || !EMAIL_PATTERN.test(data.email) || !data.inquiryType || data.message.length < 10) {
    return { success: false, error: 'Please complete every field with valid information.' };
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const recipientEmail = process.env.CONTACT_RECIPIENT || 'cleanslateproduction@gmail.com';
  if (!gmailUser || !gmailPass) return { success: false, error: 'Email service is not configured.' };

  const safe = Object.fromEntries(Object.entries(data).map(([key, value]) => [key, escapeHtml(value)]));
  try {
    await getTransporter(gmailUser, gmailPass).sendMail({
      from: `"Clean Slate website" <${gmailUser}>`,
      to: recipientEmail,
      replyTo: data.email,
      subject: `Clean Slate: ${data.inquiryType} from ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nInquiry: ${data.inquiryType}\n\n${data.message}`,
      html: `<h2>New Clean Slate inquiry</h2><p><strong>Name:</strong> ${safe.name}</p><p><strong>Email:</strong> ${safe.email}</p><p><strong>Inquiry:</strong> ${safe.inquiryType}</p><p style="white-space:pre-wrap">${safe.message}</p>`,
    });
    return { success: true };
  } catch (error) {
    console.error('Contact email failed', error instanceof Error ? error.message : 'Unknown error');
    return { success: false, error: 'Message could not be sent. Please email the production directly.' };
  }
}
