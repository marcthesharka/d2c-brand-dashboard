import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, website, instagramHandle } = req.body;

  if (!name && !website && !instagramHandle) {
    return res.status(400).json({ error: 'At least one field is required.' });
  }

  // Set up Nodemailer transporter with Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `Bodega Sana <${process.env.GMAIL_USER}>`,
    to: 'marcellorossi98@gmail.com',
    subject: 'New Brand Suggestion from Bodega Sana',
    text: `Brand Name: ${name || '-'}\nWebsite: ${website || '-'}\nInstagram Handle: ${instagramHandle || '-'}`,
    html: `<h2>New Brand Suggestion</h2><ul><li><b>Brand Name:</b> ${name || '-'}</li><li><b>Website:</b> ${website || '-'}</li><li><b>Instagram Handle:</b> ${instagramHandle || '-'}</li></ul>`
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Suggestion sent successfully.' });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: 'Failed to send email.' });
  }
} 

'updated send-brand-suggestion.ts'