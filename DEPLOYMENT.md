# Portfolio Deployment Guide

## Option 1: Deploy to Vercel (Recommended - Easiest for Next.js)

### Method A: Deploy via Vercel Website (Easiest)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio website"
   git branch -M main
   git remote add origin https://github.com/petero-codes/portfolio.git
   git push -u origin main
   ```

2. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account

3. **Import your project:**
   - Click "Add New Project"
   - Select your `portfolio` repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

4. **Your site will be live!**
   - Vercel will give you a URL like: `your-portfolio.vercel.app`
   - You can add a custom domain later

### Method B: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **For production:**
   ```bash
   vercel --prod
   ```

---

## Option 2: Deploy to Netlify

1. **Push to GitHub** (same as above)

2. **Go to Netlify:**
   - Visit [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub

3. **Import project:**
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

---

## Option 3: Deploy to GitHub Pages (Advanced)

Requires additional configuration. Not recommended for Next.js apps.

---

## Before Deploying - Important Checks:

1. ✅ Make sure all your changes are committed
2. ✅ Test locally: `npm run build` (should complete without errors)
3. ✅ Check that your GitHub username is correct in `config.js`
4. ✅ Verify all links work correctly

---

## After Deployment:

1. **Update your GitHub profile** with your portfolio URL
2. **Share your portfolio** on social media
3. **Add to your resume** and LinkedIn profile

---

## Custom Domain (Optional):

1. **Vercel:**
   - Go to your project settings
   - Click "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Netlify:**
   - Go to Site settings
   - Click "Domain management"
   - Add custom domain

---

## Environment Variables (if needed):

If you add environment variables later:
- **Vercel:** Project Settings → Environment Variables
- **Netlify:** Site Settings → Environment Variables

