import { Avatar } from '@material-ui/core'
import React from 'react'

function VideoCard(image,title,channel,views,timestamp) {
    return (
        <div className="videoCard">
          <img src={"https://i.ytimg.com/vi/cYo4XvAyK9k/default.jpg"} alt=""/> 
          <div className="video_info">
          < Avatar className="videoCard_avatar" alt={channel} src={"https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-articleLarge.jpg?quality=75&auto=webp&disable=upscale"}/>
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
