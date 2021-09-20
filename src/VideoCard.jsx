import { Avatar } from '@material-ui/core'
import React from 'react'

function VideoCard(image,title,channel,views,timestamp,channel) {
    return (
        <div className="videoCard">
          <img src={} alt=""/> 
          <div className="video_info">
          < Avatar className="videoCard)avatar" alt={channnel} src={}/>
          <div className="video_text">
              <h4>{title}</h4>
              <p>{channel}</p>
              <p>{views} • {timestamp} </p>
              
          </div>

            </div>
        </div>
    )
}

export default VideoCard
