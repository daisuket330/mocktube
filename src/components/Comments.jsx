import axios from 'axios';
import React, { Component } from 'react'
import {useEffect, useState} from 'react';



class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comment: '',
            video_id: props.selectedVideo,
            like:0,
            dislike:0,
        }
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

    addComment = async() => {
        const comments ={
            video_id:this.state.video_id,
            comment:this.state.comment,
            dislike:this.state.dislike,
            like:this.state.like
        };
        try{

            let response = await axios.post(`http://127.0.0.1:8000/mytube/video/`, comments);
            console.log(response);
        }
        catch{
            console.log("comment not added")
        }
      
    }  







    render() { 
        return (
            <form onSubmit ={this.handleSubmit}>
            <label>Comment:</label>
            <input name="comment" onChange={this.handleChange} value={this.state.comment}></input>
            <button className="add comment" type="submit">Add Comment</button>
            </form> 
         );
    }
}
 
export default Comments;