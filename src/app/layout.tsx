import '../styles/globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Seth Dowell',
  description: 'Personal website of Seth Dowell',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex">
          {/* Left Navigation */}
          <nav className="w-64 p-8 flex flex-col space-y-4">
            <div className="mb-8">
              <h1 className="text-2xl font-bold">Seth Dowell</h1>
              <p className="text-text-gray">Creative Technologist</p>
            </div>
            <a href="/" className="menu-item">INDEX</a>
            <a href="/about" className="menu-item">ABOUT ME</a>
            <a href="/assencium" className="menu-item">ASSENCIUM</a>
            <a href="/bridge-east" className="menu-item">BRIDGE EAST</a>
            <a href="/blog" className="menu-item">BLOG</a>
            
            <div className="mt-auto text-text-gray text-sm">
              <p>Based in the United States</p>
              <p>contact@sethdowell.com</p>
            </div>
          </nav>
          
          {/* Main Content */}
          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
} 