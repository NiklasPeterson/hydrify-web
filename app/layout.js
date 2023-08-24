import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hydrify',
  description: 'Hydrify is your personalized hydration partner. It helps you track, remember, conquer your water goals, and discover the path to a healthier, more refreshed you.',

  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    viewportFit: 'cover'
  },

  other: {
    'apple-Itunes-App': 'app-id=id6450311759, app-argument=https://apps.apple.com/us/app/hydrify/id6450311759',
  }
  
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
