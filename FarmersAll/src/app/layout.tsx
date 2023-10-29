import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FarmersAll',
  description: 'Farmers Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      {/* <script src="https://apis.mapmyindia.com/advancedmaps/v1/<Lic_Key>/map_load?v=1.3"></script> */}
      </body>
    </html>
  )
}
