import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Check if API key is configured
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the site administrator.' },
        { status: 500 }
      );
    }

    // Initialize Resend inside the function to avoid build-time errors
    const resend = new Resend(apiKey);

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

    // Ensure sender email is not the owner's email (safety check)
    if (from_email.toLowerCase() === 'chapokumih@gmail.com') {
      console.warn('Warning: Sender email matches owner email, but proceeding...');
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

    // Send both emails in parallel for better performance
    console.log('=== EMAIL SENDING DEBUG ===');
    console.log('API Key present:', !!apiKey);
    console.log('Sender name:', from_name);
    console.log('Sender email (raw):', from_email);
    console.log('Sender email (sanitized):', sanitizedEmail);
    console.log('Owner email:', 'chapokumih@gmail.com');
    console.log('Auto-reply will be sent to:', from_email);
    console.log('===========================');
    
    // Send both emails simultaneously
    const [ownerEmail, autoReply] = await Promise.all([
      // Email to portfolio owner
      resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
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
      }),
      // Automated reply to sender - IMPORTANT: Must be sender's email, not owner's
      const senderEmail = from_email.trim().toLowerCase();
      console.log('🔵 Preparing auto-reply email...');
      console.log('🔵 Sender email (for auto-reply):', senderEmail);
      console.log('🔵 Owner email (should NOT receive auto-reply):', 'chapokumih@gmail.com');
      console.log('🔵 Are they different?', senderEmail !== 'chapokumih@gmail.com');
      
      resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: [senderEmail], // MUST be sender's email, NOT owner's email
        subject: 'Thank you for reaching out!',
        html: `
          <div style="font-family: system-ui, sans-serif, Arial; font-size: 14px; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Thank You, ${sanitizedName}!</h1>
            </div>
            <div style="background: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
                It's great hearing from you! I've received your message and I'll be back to you in a minute.
              </p>
              <p style="font-size: 14px; color: #666; margin-bottom: 20px;">
                I typically respond within 24 hours, so you can expect to hear from me soon.
              </p>
              <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 20px;">
                <p style="font-size: 14px; color: #999; margin: 0;">
                  Best regards,<br>
                  <strong style="color: #667eea;">Petero Mzee</strong><br>
                  <span style="color: #999;">Full Stack Developer</span>
                </p>
              </div>
            </div>
            <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
              <p style="margin: 0;">This is an automated response. Please do not reply to this email.</p>
              <p style="margin: 5px 0 0 0;">If you have any urgent inquiries, feel free to reach out directly.</p>
            </div>
          </div>
        `,
      })
    ]);

    // Check results
    if (ownerEmail.error) {
      console.error('Resend error (owner email):', JSON.stringify(ownerEmail.error, null, 2));
      return NextResponse.json(
        { error: 'Failed to send email', details: ownerEmail.error.message || JSON.stringify(ownerEmail.error) },
        { status: 500 }
      );
    }

    console.log('✅ Owner email sent successfully! Email ID:', ownerEmail.data?.id);
    console.log('Owner email sent to: chapokumih@gmail.com');

    if (autoReply.error) {
      console.error('❌ Resend error (auto-reply):', JSON.stringify(autoReply.error, null, 2));
      console.error('Auto-reply error details:', {
        message: autoReply.error.message,
        name: autoReply.error.name,
        statusCode: autoReply.error.statusCode
      });
      console.error('Failed to send auto-reply to:', from_email);
      console.warn('⚠️ Auto-reply failed, but owner email was sent successfully');
    } else {
      console.log('✅ Auto-reply sent successfully! Email ID:', autoReply.data?.id);
      console.log('Auto-reply sent to:', from_email);
      console.log('Auto-reply subject: Thank you for reaching out!');
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully', 
        ownerEmailId: ownerEmail.data?.id,
        autoReplyId: autoReply.data?.id,
        autoReplySent: !autoReply.error
      },
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

