import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shubh Law Firm - Professional Legal Services',
  description: 'Shubh Law Firm provides expert legal services in criminal law, civil litigation, corporate law, and family law. Get professional legal consultation today.',
  keywords: 'law firm, legal services, criminal law, civil litigation, corporate law, family law, attorney, lawyer',
  authors: [{ name: 'Shubh Law Firm' }],
  openGraph: {
    title: 'Shubh Law Firm - Professional Legal Services',
    description: 'Expert legal services with decades of experience in criminal law, civil litigation, corporate law, and family law.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
