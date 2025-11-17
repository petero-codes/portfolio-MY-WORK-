import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { from_name, from_email, message } = body;

    // Validate input
    if (!from_name || !from_email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(from_email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Sanitize input to prevent XSS
    const sanitize = (str) => {
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    };

    const sanitizedName = sanitize(from_name);
    const sanitizedEmail = sanitize(from_email);
    const sanitizedMessage = sanitize(message).replace(/\n/g, '<br>');

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // This will be your verified domain later
      to: ['chapokumih@gmail.com'],
      replyTo: from_email,
      subject: `New Message from ${sanitizedName}`,
      html: `
        <div style="font-family: system-ui, sans-serif, Arial; font-size: 14px; line-height: 1.6; color: #333;">
          <div style="margin-bottom: 20px;">
            <p>A message by <strong>${sanitizedName}</strong> has been received. Kindly respond at your earliest convenience.</p>
          </div>
          <div style="margin-top: 20px; padding: 15px 0; border-width: 1px 0; border-style: dashed; border-color: #ddd;">
            <table role="presentation" style="width: 100%;">
              <tr>
                <td style="vertical-align: top; padding-right: 15px;">
                  <div style="padding: 6px 10px; margin: 0 10px; background-color: #e3f2fd; border-radius: 5px; font-size: 26px; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;">
                    👤
                  </div>
                </td>
                <td style="vertical-align: top;">
                  <div style="color: #2c3e50; font-size: 16px; font-weight: bold; margin-bottom: 5px;">
                    ${sanitizedName}
                  </div>
                  <div style="color: #7c7c7c; font-size: 13px; margin-bottom: 10px;">
                    ${sanitizedEmail}
                  </div>
                  <p style="font-size: 16px; margin: 0; white-space: pre-wrap;">${sanitizedMessage}</p>
                </td>
              </tr>
            </table>
          </div>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; color: #999; font-size: 12px;">
            <p>This message was sent from your portfolio contact form.</p>
            <p>You can reply directly to this email to respond to ${sanitizedName}.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

