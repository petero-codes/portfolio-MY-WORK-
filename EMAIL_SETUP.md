# Email Setup Guide for Contact Form

Your contact form uses EmailJS to send emails directly to your inbox.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Set Up Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for chapokumih@gmail.com)
   - Or **Outlook**, **Yahoo**, etc.
4. Follow the connection steps
5. **Copy your Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use this template:

**Template Name:** Portfolio Contact Form

**Email Settings:**
- **From Name:** `{{ Portfolio Contact Form }}`
- **From Email:** Use Default Email Address (checked) - your Gmail
- **Reply To:** `{{from_email}}` (so you can reply directly to the sender)
- **To Email:** `chapokumih@gmail.com` (your email)

**Subject:** New Message from {{from_name}}

**Content:**
```
Hello Petero,

You received a new message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
You can reply directly to {{from_email}}
```

**Important:** Make sure the field names in your template match:
- `{{from_name}}` - sender's name
- `{{from_email}}` - sender's email  
- `{{message}}` - sender's message

4. **Copy your Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find **Public Key**
3. **Copy your Public Key**

## Step 5: Add Environment Variables to Vercel

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add these three variables:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID = your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = your_public_key_here
```

4. Make sure to add them for **Production**, **Preview**, and **Development**
5. Click **Save**

## Step 6: Redeploy

After adding environment variables:
1. Go to **Deployments** in Vercel
2. Click the three dots on the latest deployment
3. Click **Redeploy**

## Testing

1. Visit your live portfolio
2. Go to the Contact page
3. Fill out and submit the form
4. Check your email (chapokumih@gmail.com) - you should receive the message!

---

## Alternative: Use Resend (More Reliable)

If you prefer a more professional solution:

1. Sign up at [Resend.com](https://resend.com)
2. Get your API key
3. Update the contact form to use Resend API
4. More reliable and better for production

Let me know if you want me to set up Resend instead!

