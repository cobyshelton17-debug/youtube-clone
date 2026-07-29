import './VideoCard.css'

function VideoCard({ video }) {
  return (
    <div className="video-card">
      <div className="video-card-thumb">
        <img
          src={`https://picsum.photos/seed/${video.seed}/320/180`}
          alt={video.title}
          loading="lazy"
        />
      </div>
      <div className="video-card-info">
        <div className="video-card-avatar">
          <img
            src={`https://picsum.photos/seed/avatar${video.seed}/36/36`}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="video-card-meta">
          <div className="video-card-title">{video.title}</div>
          <div className="video-card-channel">{video.channel}</div>
          <div className="video-card-stats">
            {video.views} · {video.time}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
