import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/navbar'
import { Lexend } from 'next/font/google'

export const metadata: Metadata = {
  title: 'monkey-split',
  description: 'An app to split bills between friends',
}

const lexend = Lexend({ subsets: ['latin'], weight: ['400', '600'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body
        className={(lexend.className, 'max-h-screen w-full overflow-hidden')}
      >
        <div className="flex h-screen flex-col">
          <div className="block h-fit shrink-0">
            <Navbar />
          </div>
          <div className="flex h-full flex-1 flex-col">{children}</div>
        </div>
      </body>
    </html>
  )
}
