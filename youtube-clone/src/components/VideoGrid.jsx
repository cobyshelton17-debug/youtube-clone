import VideoCard from './VideoCard'
import './VideoGrid.css'

function VideoGrid({ title, videos }) {
  return (
    <section className="video-grid-section">
      {title && <h2 className="video-grid-title">{title}</h2>}
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  )
}

export default VideoGrid
