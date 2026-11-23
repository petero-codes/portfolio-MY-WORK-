import localFont from "next/font/local";
import "./globals.css";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/Providers/Theme";
import Header from "@/components/Header";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL('https://iam-petero.vercel.app'),
  title: {
    default: "Peter Njuguna | Full-Stack Developer & AI Systems Engineer",
    template: "%s | Peter Njuguna"
  },
  icons: {
    icon: "/logo.png"
  },
  description: "Portfolio of Peter Njuguna — Full-Stack Developer, Python Backend Engineer, and AI Systems Specialist. Expertise in Next.js, FastAPI, Clean Architecture, and AI evaluation infrastructure.",
  keywords: [
    "Peter Njuguna",
    "Full-Stack Developer",
    "Python Developer",
    "FastAPI",
    "Next.js",
    "AI Engineering",
    "AI Evaluation",
    "Clean Architecture",
    "SQL Server",
    "PostgreSQL",
    "React",
    "Remote Software Engineer"
  ],
  authors: [{ name: "Peter Njuguna", url: "https://iam-petero.vercel.app" }],
  creator: "Peter Njuguna",
  openGraph: {
    title: "Peter Njuguna | Full-Stack Developer & AI Systems Engineer",
    description: "Production web applications, Python backends, and verified AI evaluation case studies.",
    url: "https://iam-petero.vercel.app",
    siteName: "Peter Njuguna Portfolio",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Peter Njuguna | Full-Stack Developer & AI Systems Engineer",
    description: "Production web applications, Python backends, and verified AI evaluation case studies."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} antialiased`}
      >

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >

          <NextTopLoader />
          <Header />

          {children}

          <Footer />
          <Toaster
            position="top-right"
            toastOptions={{
              className: 'font-semibold backdrop-blur-md text-black rounded-3xl',
            }}
          />

          <GridPattern
            width={200}
            height={200}
            x={-1}
            y={-1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom,white,transparent)]",
            )}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
