import { Inter } from 'next/font/google'
import './globals.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import Providers from './util/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Slider Web',
  description: 'Create and import custom slide templates into any presentation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="app/favicon.ico" sizes="any" />
      <body className={`${inter.className} dark:text-white text-black bg-gray-100`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
