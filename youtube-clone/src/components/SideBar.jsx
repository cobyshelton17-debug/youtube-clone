import { useState } from 'react'
import './SideBar.css'

const navItems = [
  { icon: '🏠', label: 'Home' },
  { icon: '🔥', label: 'Trending' },
  { icon: '📺', label: 'Subscriptions' },
  { icon: '📚', label: 'Library' },
  { icon: '📜', label: 'History' },
  { icon: '⏰', label: 'Watch later' },
  { icon: '👍', label: 'Liked videos' },
]

function SideBar({ activeSection, onSectionChange }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>

      <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar-header">
          <span className="sidebar-logo">▶ YouTube</span>
        </div>
        <nav>
          <ul className="sidebar-nav">
            {navItems.map((item) => (
              <li
                key={item.label}
                className={`sidebar-nav-item${activeSection === item.label ? ' sidebar-nav-item--active' : ''}`}
                onClick={() => { onSectionChange(item.label); setIsOpen(false) }}
              >
                <span className="sidebar-nav-icon">{item.icon}</span>
                <span className="sidebar-nav-label">{item.label}</span>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {isOpen && <div className="sidebar-mobile-overlay" onClick={() => setIsOpen(false)} />}
    </>
  )
}

export default SideBar
