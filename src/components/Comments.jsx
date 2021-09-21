import axios from 'axios';
import React, { Component } from 'react'

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comment: '',
            video_id: '',
            like:0,
            dislike:0,
        }
    }
    

    addComment = async() => {
        await axios.post(`http://127.0.0.1:8000/mytube/video`, this.state.comment);
        
      }  

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value         
        });
     }
 
     handleSubmit = (event) =>{
         event.preventDefault();
        this.addComment();
     }  






    render() { 
        return (  );
    }
}
 
export default Comments;