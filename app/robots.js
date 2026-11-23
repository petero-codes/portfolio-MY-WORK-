export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://iam-petero.vercel.app/sitemap.xml',
  };
}
