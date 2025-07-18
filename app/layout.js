import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hydrify',
  description: 'Hydrify is your go-to assistant for staying refreshed. With personalized goals and tailored reminders, it ensures you drink enough water daily. Achieve well-being and feel rejuvenated effortlessly with Hydrify.  ',
  metadataBase: new URL('https://hydrify.app'),
  other: {
    'apple-itunes-app': 'app-id=6450311759, app-argument=https://apps.apple.com/app/hydrify/id6450311759'
  },
  "manifest": "/manifest.webmanifest"
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover'
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
        </body>
    </html>
  )
}
 
