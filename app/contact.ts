import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { name, email, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'thakurcmp1@gmail.com',
      to: ['vishalraj0.work@gmail.com'],
      subject: `New Contact Form Message`,
      html: `<strong>Name:</strong> ${name}<br/>
             <strong>Email:</strong> ${email}<br/>
             <strong>Message:</strong><br/>${message}`
    });

    res.status(200).json({ success: true, id: data.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
