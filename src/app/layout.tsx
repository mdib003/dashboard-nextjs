import type { Metadata } from 'next'
import './globals.css'
import { Sidebar } from '@component/components/dashboard/sidebar'
import { Navbar } from '@component/components/dashboard/navbar'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Manage users and products from the admin dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <div className='dashboard-container'>
          <div className='sidebar-main'>          
            <Sidebar />
          </div>
          <div className='dashboard-main'>            
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
