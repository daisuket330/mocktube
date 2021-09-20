import React, { Component } from 'react'

import './recommended.css';
import VideoCard from './VideoCard';
class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
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
         );
    }
}
 

export default Recommend
