import { Component } from 'react'
import './App.css';
import axios from 'axios'
import Search from './components/search';
import MainVideo from './components/MainVideo';
import Header from './Header';
import Sidebar from './sidebar';
import Recommend from './recommended';
import SearchResults from './components/SearchResults';
import RelatedVideos from './components/RelatedVideos';
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon  from '@material-ui/icons/VideoCall';
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar"
import Comments from './components/Comments';




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
      this.setState({selectedVideo: video, 
        videoTitle: video_title, 
        videoDescription: video_description,
        search: ''
      })
      this.getRelatedVideos(video);  
      this.getComments(video);
    }
    
    class Header  extends Component {
      constructor(props) {
          super(props);
          this.state = {  }
      }
      render() { 
          return (  
              <div className="header">
              <div className= "header_search">
              <MenuIcon />  
              <img 
              className="header_logo"
              src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="" />
              
              {}
              </div>
  
  
              
              <div className= "header_icons">
                  
              < VideoCallIcon className= "header_icon" />
                  < AppsIcon className= "header_icon"/>
                  < NotificationsIcon className= "header_icon"/>
                  < Avatar
                      alt="pepe la frog"
                      src="https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
                  />  
              </div>
              
              
          
          </div>
          );
      }
  }
    
    return ( 
      <div>
        
        <Search className= "header_search" search = {this.myCallback} />
          
        <Header />
        <Sidebar />
         {/* <Recommend /> */}

          <div className="MainVideo">
          <MainVideo   selectedVideo = {this.state.selectedVideo}
          videoTitle = {this.state.videoTitle} 
          videoDescription ={this.state.videoDescription}
          
          /> 
          </div>

         {this.state.search !== '' ?
        <SearchResults videos = {this.state.videos} func = {onSelect}/>
        : <div></div>}
        <Comments />
       

  
          
      </div>
       
          
          
          
        

       
        
      
   );
}
}
export default App;

    


            

