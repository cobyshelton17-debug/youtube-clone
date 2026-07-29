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
    <aside className={`sidebar ${isOpen ? 'sidebar--open' : 'sidebar--collapsed'}`}>
      <div className="sidebar-header">
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
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
  )
}

export default SideBar
