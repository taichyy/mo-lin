import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from '@/components/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MO LIN | HOME',
  description: 'A personal portfolio website demo with more comprehensive features from lama dev on youtube',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className='container'>
              <Navbar/>
              <main className='childrenContainer'>
                {children}
              </main>
              <Footer/>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
