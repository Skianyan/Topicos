import './globals.css'
import { Quattrocento_Sans } from 'next/font/google'
import Navbar from '@/components/Navbar'

const quattro = Quattrocento_Sans({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Citas',
  description: 'Aplicacion de citas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={quattro.className}>
        <div className='flex h-[100vh]'>
          <Navbar/>
          {children}
        </div>
        </body>
    </html>
  )
}
