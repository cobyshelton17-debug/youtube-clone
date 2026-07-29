import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../auth/AuthContext.jsx'
import './Nav.css'

function Nav({ searchQuery, onSearch }) {
  const { user, signInWithGoogle, signOutUser } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)
  const [notifOpen, setNotifOpen] = useState(false)
  const [darkTheme, setDarkTheme] = useState(false)
  const [inputValue, setInputValue] = useState(searchQuery || '')
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const inputRef = useRef(null)
  const menuRef = useRef(null)
  const btnRef = useRef(null)
  const notifRef = useRef(null)
  const notifBtnRef = useRef(null)

  useEffect(() => {
    setInputValue(searchQuery || '')
  }, [searchQuery])

  useEffect(() => {
    function handleClick(e) {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setMenuOpen(false)
      }
      if (
        notifOpen &&
        notifRef.current &&
        !notifRef.current.contains(e.target) &&
        notifBtnRef.current &&
        !notifBtnRef.current.contains(e.target)
      ) {
        setNotifOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [menuOpen, notifOpen])

  function toggleTheme() {
    setDarkTheme(!darkTheme)
    document.documentElement.setAttribute(
      'data-theme',
      darkTheme ? 'light' : 'dark'
    )
  }

  function submitSearch() {
    const trimmed = inputValue.trim()
    if (trimmed) {
      inputRef.current?.blur()
      onSearch(trimmed)
      setMobileSearchOpen(false)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      submitSearch()
    }
  }

  function openMobileSearch() {
    setMobileSearchOpen(true)
    setTimeout(() => inputRef.current?.focus(), 100)
  }

  return (
    <header className={`topnav ${mobileSearchOpen ? 'topnav--searching' : ''}`}>
      <div className="topnav-left">
        <span className="topnav-logo">▶</span>
        <span className="topnav-brand">YouTube</span>
      </div>

      <div className={`topnav-search ${mobileSearchOpen ? 'topnav-search--expanded' : ''}`}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          className="topnav-search-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="topnav-search-btn" onClick={submitSearch}>
          🔍
        </button>
      </div>

      <div className="topnav-right">
        <button
          className="topnav-icon-btn topnav-mobile-search-toggle"
          onClick={mobileSearchOpen ? () => setMobileSearchOpen(false) : openMobileSearch}
        >
          {mobileSearchOpen ? '✕' : '🔍'}
        </button>
        <button className="topnav-icon-btn topnav-mic-btn">🎤</button>
        <button
          className="topnav-icon-btn"
          ref={notifBtnRef}
          onClick={() => setNotifOpen(!notifOpen)}
        >
          ⋮
        </button>

        {notifOpen && (
          <div className="notif-menu" ref={notifRef}>
            <div className="notif-menu-empty">No new notifications...</div>
          </div>
        )}

        {user ? (
          <>
            <button
              className="topnav-avatar-btn"
              ref={btnRef}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <img
                src={user.photoURL}
                alt=""
                className="topnav-avatar"
                referrerPolicy="no-referrer"
              />
            </button>

            {menuOpen && (
              <div className="profile-menu" ref={menuRef}>
                <div className="profile-menu-header">
                  <img
                    src={user.photoURL}
                    alt=""
                    className="profile-menu-avatar-img"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="profile-menu-name">{user.displayName}</div>
                    <div className="profile-menu-username">{user.email}</div>
                  </div>
                </div>

                <div className="profile-menu-divider" />

                <button className="profile-menu-item" onClick={signOutUser}>
                  <span className="profile-menu-icon">🚪</span>
                  <span>Sign out</span>
                </button>

                <button className="profile-menu-item" onClick={toggleTheme}>
                  <span className="profile-menu-icon">{darkTheme ? '☀️' : '🌙'}</span>
                  <span>{darkTheme ? 'Light Theme' : 'Dark Theme'}</span>
                </button>

                <button className="profile-menu-item">
                  <span className="profile-menu-icon">⚙️</span>
                  <span>Settings</span>
                </button>
              </div>
            )}
          </>
        ) : (
          <button className="topnav-signin-btn" onClick={signInWithGoogle}>
            Sign in
          </button>
        )}
      </div>
    </header>
  )
}

export default Nav
