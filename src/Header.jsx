
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon  from '@material-ui/icons/VideoCall';
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar"
import React, { Component } from 'react';



class Header  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="header">
            <div className= "header_left">
            <MenuIcon />  
            <img 
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="" />
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
 
export default Header ;