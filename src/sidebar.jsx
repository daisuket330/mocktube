import React, { Component } from 'react'

import SideBarRow from './sideBarRow';
import './sidebar.css';
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import Subscriptions from '@material-ui/icons/Subscriptions';
import { ExpandMoreOutlined, History, OndemandVideo, ThumbUpAltOutlined, VideoLibrary, WatchLater } from '@material-ui/icons';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="sidebar">
          


            <SideBarRow selected Icon={HomeIcon} Title="Home"/>
            <SideBarRow Icon={WhatshotIcon} Title="Trending"/>
            <SideBarRow Icon={Subscriptions}  Title="Sunscriptions"/>
            <hr />
            <SideBarRow Icon={VideoLibrary}  Title="Library"/>
            <SideBarRow Icon={History}  Title="History"/>
            <SideBarRow Icon={OndemandVideo}  Title="Your Videos"/>
            <SideBarRow Icon={WatchLater}  Title="Watch Later"/>
            <SideBarRow Icon={ThumbUpAltOutlined}  Title="Liked Videos"/>
            <SideBarRow Icon={ExpandMoreOutlined}  Title="Show More"/>
            <hr />
          </div>
         );
    }
}
 


export default Sidebar
