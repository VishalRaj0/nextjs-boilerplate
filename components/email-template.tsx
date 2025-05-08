import * as React from 'react';

type EmailTemplateProps = {
  fullname: string;
  email: string;
  message: string;
};

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  fullname,
  email,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> {fullname}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Message:</strong></p>
    <p>{message}</p>
  </div>
);
