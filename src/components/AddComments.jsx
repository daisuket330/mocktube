import axios from 'axios';
import React, { Component } from 'react';

class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comment: ''
         }
    }
 
 

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
    event.preventDefault();
    this.AddComment(this.state)

}
    
async addNewSong(){
    const comments = {
        comment:''
    }
    try{
        let response = await axios.post('http://http://127.0.0.1:8000/mytube/',comment);
        window.location.reload();

    }
    catch{
        console.log("comment not added :(") 
    }
}

 render() {
    return (
        <div>
            <h1>Comment</h1>
            <form onSubmit = {this.handleSubmit}>
                <label> Title:</label>
                <input name="comment" onChange={this.handleChange} value={this.state.comment}></input><br/>
                
                <button className="newSongButton" type="submit">Submit</button>
            </form>
        </div>
     );
   }
}        
export default AddComment ;