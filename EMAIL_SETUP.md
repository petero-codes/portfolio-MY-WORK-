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
- **From Name:** `Portfolio Contact Form` (or any static name you want)
- **From Email:** ✅ **Check "Use Default Email Address"** - this will use your Gmail
- **Reply To:** `{{from_email}}` ⚠️ **IMPORTANT: Must be exactly `{{from_email}}`** (so you can reply directly to the sender)
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

**⚠️ CRITICAL - Template Variable Names Must Match Exactly:**

The form sends these field names, so your template MUST use these exact variable names:
- `{{from_name}}` - sender's name (NOT `{{ sender's name}}` or `{{sender_name}}`)
- `{{from_email}}` - sender's email (NOT `{{email}}` or `{{sender_email}}`)
- `{{message}}` - sender's message

**Common Mistakes to Avoid:**
- ❌ Don't use `{{ sender's name}}` (with spaces) - use `{{from_name}}`
- ❌ Don't use `{{email}}` - use `{{from_email}}`
- ✅ Use exact variable names: `{{from_name}}`, `{{from_email}}`, `{{message}}`

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

## Troubleshooting

### Error: "Failed to send message"

**Most Common Issue: Template Variable Mismatch**

If you see this error, check your EmailJS template:

1. **Go to EmailJS Dashboard → Email Templates**
2. **Edit your template**
3. **Check these fields:**

   - **From Name field:** Should be a static value like `Portfolio Contact Form` (NOT a variable)
   - **Reply To field:** Must be exactly `{{from_email}}` (not `{{email}}` or `{{ sender's email}}`)
   - **Subject line:** Use `{{from_name}}` (not `{{ sender's name}}`)
   - **Email content:** Use `{{from_name}}`, `{{from_email}}`, and `{{message}}`

4. **Save the template**
5. **Test again**

### Error: "The service ID not found"

If you see this error, the Service ID in your environment variables doesn't match your EmailJS account.

**To fix this:**

1. **Go to EmailJS Dashboard:** https://dashboard.emailjs.com/admin
2. **Click on "Email Services"** in the left sidebar
3. **Find your service** (it should show your email provider like Gmail)
4. **Click on the service** to view its details
5. **Copy the Service ID** - it will look like `service_xxxxxxx`
6. **Update in Vercel:**
   - Go to Vercel → Your Project → Settings → Environment Variables
   - Find `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - Update it with the correct Service ID from step 5
   - Click Save
7. **Redeploy** your site in Vercel

**Important:** Make sure you're using the Service ID from the same EmailJS account where you created the template!

### Check Environment Variables in Vercel

Make sure all three variables are set correctly in Vercel:
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = Your actual Service ID from EmailJS dashboard (e.g., `service_ly12c7v`)
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = Your actual Template ID from EmailJS dashboard (e.g., `template_8zabl5f`)
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = Your Public Key (should be `fN-_U-7Bu0HMYWeaw`)

**⚠️ IMPORTANT:** The Template ID in Vercel must match the Template ID shown in your EmailJS dashboard!

**To verify your IDs:**
1. **Service ID:** EmailJS Dashboard → Email Services → Click your service → Copy the ID (e.g., `service_ly12c7v`)
2. **Template ID:** EmailJS Dashboard → Email Templates → Click your template → Copy the ID shown (e.g., `template_8zabl5f`)
3. **Public Key:** EmailJS Dashboard → Account → General → Copy Public Key

**Common Issue:** If you see "Service ID not found" error, check:
- ✅ Service ID exists in EmailJS (you confirmed `service_ly12c7v` exists)
- ✅ Template ID matches between Vercel and EmailJS dashboard
- ✅ All IDs are from the same EmailJS account
- ✅ Site has been redeployed after setting environment variables

After updating, **redeploy** your site in Vercel.

---

## Alternative: Use Resend (More Reliable)

If you prefer a more professional solution:

1. Sign up at [Resend.com](https://resend.com)
2. Get your API key
3. Update the contact form to use Resend API
4. More reliable and better for production

Let me know if you want me to set up Resend instead!

