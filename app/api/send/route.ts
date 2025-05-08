export async function POST(req: Request) {
  try {
    const { fullname, email, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['thakurcmp1@gmail.com'],
      subject: 'New Contact Message',
      react: EmailTemplate({
        fullname,
        email,
        message,
      }) as React.ReactElement,
    });

    if (error) {
      return new Response(JSON.stringify({ error }), {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}
