import { Component } from 'react'
import './App.css';

import axios from 'axios'
import Search from './components/search';
import MainVideo from './components/MainVideo';
import Header from './Header';
import Sidebar from './sidebar';
import Recommend from './recommended';




class App extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        videos:[],
        selectedVideo: null,
        comments: [],
        search: '',
        videoTitle: '',
        videoDescription: ''
       }
    }
  
    
  
    async getVideos(search) {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search/`, {
        params:{
          part: 'snippet',
          maxResults: 10,
          key: 'AIzaSyAYK1c_uKCU4g4XfW7Upmvy4b2B8PTQaYo',
          q: search,
          type: 'video'
        }
      });
      console.log(response);
      this.setState({
        videos: response.data.items,
        selectedVideo: 'AxEl8J-bZ_c'
      });
      console.log("GetVideos");
      console.log(response.data.items);
    }
  
    myCallback = (searchData) =>{
      this.setState({search: searchData});
      this.getVideos(searchData);
    }
  
    
    render() { 
        const {search} = this.state;
        const onSelect = (video, video_title, video_description) =>{
          this.setState({selectedVideo: video, videoTitle: video_title, 
            videoDescription: video_description});
          console.log(video);
          
    }
    return ( 
        <div>
            
          <Search search = {this.myCallback}/>

          <Header />
          <Sidebar />
          <div className="MainVideo"><MainVideo   selectedVideo = {this.state.selectedVideo}/> 
            videoTitle = {this.state.videoTitle} 
            videoDescription ={this.state.videoDescription}
            relatedVideos = {this.getRelatedVideos}</div>
         
            
          <Recommend />
            {this.state.search !== ''}
            {/* <Sidebar />
            <Recommend/> */}
          

         
          
        </div>
     );
  }
}
export default App;


    


            

