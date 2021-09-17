import React, { Component } from 'react';
import axios from 'axios';



class Video extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        q: '',
        part: 'snippet',
        maxResults: 11,
        key: KEY   
        }
            
        
        
                

    componentDidMount(){
        this.getAllvideos();
    }


    async getAllvideos(){
        let response = await axios.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=Fiction%20Junction%yuuka&key=AIzaSyAYK1c_uKCU4g4XfW7Upmvy4b2B8PTQaYo');
        this.setState({
            videos: response.data
        });
        console.log(response.data)
    }

    export default Video;