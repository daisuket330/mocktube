import { Component } from 'react'
import './App.css';
import Header from './Header';
import Sidebar from './sidebar';
import Recommend from './recommended';
import axios from 'axios'







class App extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        videos:[],
        selectedVideo: null,
        comments: [],
        search: '',
       }
    }
  
    async getComments() {
      let response = await axios.get('http://127.0.0.1:8000/mytube/video')
      console.log(response)
      this.setState({
        comments: response.data
      })
    }
  
    async getVideos(search) {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search/`, {
        params:{
          part: 'snippet',
          maxResults: 5,
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
      const onSelect = (video) =>{
        this.setState({selectedVideo: video});
        console.log(video);
      }
      return (
        <div className="app">
            

            <Header />
            <div className="app_page">
              <Sidebar />
              <Recommend/>    
            </div>
            
        </div>

       );
       }
   } 
export default App;


    


            

