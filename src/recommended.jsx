import React from 'react'
import './recommended.css';
import VideoCard from './VideoCard';
function Recommend() {
    return (
        <div className="recommend">
          <h2>reccomended videos</h2>
          <div className="recommend_videos">
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard /> 
          </div>
        </div>
    )
}

export default Recommend
