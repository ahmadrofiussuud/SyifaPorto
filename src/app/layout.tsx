import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { cn } from '@/lib/utils';
import { personalInfo } from '@/data/content';
import { ThemeProvider } from '@/components/ThemeProvider';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-heading', weight: ['400', '500', '600', '700', '800', '900'] });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: {
    default: `${personalInfo.name} - ${personalInfo.role}`,
    template: `%s | ${personalInfo.name}`,
  },
  authors: [{ name: personalInfo.name }],
  metadataBase: new URL('https://portosyifa.vercel.app'),
  openGraph: {
    title: {
      default: `${personalInfo.name} - ${personalInfo.role}`,
      template: `%s | ${personalInfo.name}`,
    },
    description: personalInfo.bio.short,
    url: 'https://portosyifa.vercel.app',
    siteName: personalInfo.name,
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} - ${personalInfo.role}`,
    description: personalInfo.bio.short,
    creator: '@syifadesign',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans text-foreground antialiased flex flex-col selection:bg-primary/20 selection:text-primary",
        jakarta.variable,
        outfit.variable
      )}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
