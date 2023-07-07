import './globals.css'
import { Inter } from 'next/font/google'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Countries API Example',
  description: 'Example of fetching data from the countries API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className='d-flex justify-content-center'>Countries API Example</header>
        {children}
        </body>
    </html>
  )
}
