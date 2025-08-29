import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Chimera Ant',
  description: 'Empowering Growth with Seamless Technical Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-primary font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
