import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'San Diego Living | Coastal Real Estate & Lifestyle',
    template: '%s | San Diego Living',
  },
  description:
    'The definitive guide to San Diego\'s most coveted neighborhoods, luxury real estate, and coastal California lifestyle. Expert insights on La Jolla, Del Mar, and beyond.',
  keywords: [
    'San Diego real estate',
    'La Jolla homes',
    'Del Mar luxury homes',
    'San Diego neighborhoods',
    'coastal California real estate',
    'luxury homes San Diego',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'San Diego Living',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col"> <Script id="meta-pixel" strategy="afterInteractive">
{`
!function(f,b,e,v,n,t,s){
if(f.fbq)return;
n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;
n.push=n;
n.loaded=true;
n.version='2.0';
n.queue=[];
t=b.createElement(e);
t.async=true;
t.src=v;
s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s);
}(window, document, 'script',
'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '269294361233360566');
fbq('track', 'PageView');
`}
</Script>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
