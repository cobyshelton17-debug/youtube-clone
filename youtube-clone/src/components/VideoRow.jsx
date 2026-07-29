import VideoCard from './VideoCard'
import './VideoRow.css'

function VideoRow({ category }) {
  return (
    <section className="video-row">
      <h2 className="video-row-title">{category.title}</h2>
      <div className="video-row-scroll">
        <div className="video-row-track">
          {category.videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoRow
