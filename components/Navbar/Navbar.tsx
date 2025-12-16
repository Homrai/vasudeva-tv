'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './navbar.css'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-brand">
          <div className="brand-content">
            <h1 className="brand-title">Vasudeva </h1>
            <p className="brand-subtitle">tv</p>
          </div>
        </Link>
        <div className="navbar-nav">
          <Link
            href="/tv"
            className={`global-nav-link ${pathname.startsWith('/tv') ? 'active' : ''}`}
          >
            TV
          </Link>
        </div>
      </div>
    </nav>
  )
}
