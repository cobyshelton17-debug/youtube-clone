import { useState, useEffect } from 'react'
import './App.css'
import SideBar from './components/SideBar.jsx'
import Nav from './components/Nav.jsx'
import VideoRow from './components/VideoRow.jsx'
import VideoGrid from './components/VideoGrid.jsx'
import categories, { subscriptionCategories, watchLater, getAllVideos } from './data/videos.js'

function App() {
  const [activeSection, setActiveSection] = useState('Home')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeSection, searchQuery])

  function handleSectionChange(section) {
    setActiveSection(section)
    setSearchQuery('')
  }

  function handleSearch(query) {
    setSearchQuery(query)
  }

  let content
  if (searchQuery) {
    const results = getAllVideos().filter(
      (v) =>
        v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.channel.toLowerCase().includes(searchQuery.toLowerCase())
    )
    if (results.length > 0) {
      content = <VideoGrid title={`Results for "${searchQuery}"`} videos={results} />
    } else {
      content = (
        <div className="empty-state">
          <span className="empty-state-icon">🔍</span>
          <h2 className="empty-state-title">No results found</h2>
          <p className="empty-state-text">Try different keywords</p>
        </div>
      )
    }
  } else {
    switch (activeSection) {
      case 'Home':
        content = categories.map((cat) => (
          <VideoRow key={cat.title} category={cat} />
        ))
        break
      case 'Trending':
        content = <VideoGrid title="Trending" videos={categories[0].videos} />
        break
      case 'Subscriptions':
        content = subscriptionCategories.map((cat) => (
          <VideoRow key={cat.title} category={cat} />
        ))
        break
      case 'Library':
        content = <VideoGrid title="Library" videos={getAllVideos()} />
        break
      case 'History':
        content = <VideoGrid title="History" videos={[...getAllVideos()].reverse()} />
        break
      case 'Watch later':
        content = <VideoGrid title="Watch later" videos={watchLater} />
        break
      case 'Liked videos':
        content = (
          <div className="empty-state">
            <span className="empty-state-icon">👍</span>
            <h2 className="empty-state-title">No liked videos yet</h2>
            <p className="empty-state-text">Videos you like will appear here</p>
          </div>
        )
        break
      default:
        content = null
    }
  }

  return (
    <div>
      <Nav
        searchQuery={searchQuery}
        onSearch={handleSearch}
      />
      <SideBar activeSection={activeSection} onSectionChange={handleSectionChange} />
      <main className="content">
        {content}
      </main>
    </div>
  )
}

export default App
