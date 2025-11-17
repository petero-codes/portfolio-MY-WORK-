# Resend Email Setup Guide

Your contact form now uses **Resend** to send emails directly from your server. This is more reliable than EmailJS and works automatically!

## Step 1: Create Resend Account

1. Go to [Resend.com](https://resend.com)
2. Sign up for a free account (allows 3,000 emails/month)
3. Verify your email address

## Step 2: Get Your API Key

1. After logging in, go to **API Keys** in the left sidebar
2. Click **Create API Key**
3. Give it a name (e.g., "Portfolio Contact Form")
4. **Copy the API Key** - it starts with `re_` (you'll need this!)

## Step 3: Add API Key to Vercel

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add this variable:
   - **Name:** `RESEND_API_KEY`
   - **Value:** Your Resend API key (starts with `re_`)
   - **Environment:** Select "Production", "Preview", and "Development" (or "All Environments")
4. Click **Save**

## Step 4: Verify Your Domain (Optional but Recommended)

For production use, you should verify your domain:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `yourdomain.com`)
4. Follow the DNS verification steps
5. Once verified, update the `from` field in `app/api/send-email/route.js`:
   ```javascript
   from: 'Portfolio Contact <contact@yourdomain.com>',
   ```

**Note:** For now, Resend allows sending from `onboarding@resend.dev` for testing. This works but emails might go to spam. Verifying your domain fixes this.

## Step 5: Redeploy

1. Go to **Deployments** in Vercel
2. Click the three dots (⋯) on the latest deployment
3. Click **Redeploy**
4. Wait for deployment to complete

## Testing

1. Visit your live portfolio
2. Go to the Contact page
3. Fill out and submit the form
4. Check your email (chapokumih@gmail.com) - you should receive the message!

## Benefits of Resend vs EmailJS

✅ **More reliable** - Server-side sending, no client-side issues  
✅ **Better deliverability** - Professional email service  
✅ **No template configuration** - Emails are sent directly from code  
✅ **Higher limits** - 3,000 emails/month (vs 200 with EmailJS free)  
✅ **Better error handling** - Clear error messages  
✅ **No Service ID/Template ID confusion** - Just one API key!

## Troubleshooting

### Error: "Missing required fields"
- Make sure all form fields are filled out
- Check browser console for details

### Error: "Invalid email address"
- The email format is invalid
- Check the email field

### Error: "Failed to send email"
- Check that `RESEND_API_KEY` is set in Vercel
- Make sure you've redeployed after adding the API key
- Check Resend dashboard for any account issues

### Emails going to spam
- Verify your domain in Resend (see Step 4)
- Update the `from` field to use your verified domain

## Current Configuration

- **To Email:** `chapokumih@gmail.com` (hardcoded in API route)
- **From Email:** `onboarding@resend.dev` (temporary, change after domain verification)
- **Reply To:** Sender's email (so you can reply directly)

---

**That's it!** Your contact form now sends emails automatically without any EmailJS configuration needed.

