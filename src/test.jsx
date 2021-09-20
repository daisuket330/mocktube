import React from 'react';

const SearchList = (props) => {
    let videos = props.videos
    let video_id = ''; 

    const callBack = (video_id, video_title, videoDescription) =>{
        props.function(video_id,video_title, videoDescription);
        console.log("callback");
        console.log(video_id);
    }

    return ( 
        
        <div>
            {videos.map((video)=>{
                video_id = video.id.videoId
                return(
                    
                    <div >
                    <button onClick={()=>callBackFunction(video.id.videoId, video.snippet.title, video.snippet.description)}><img src={video.snippet.thumbnails.default.url} alt = ""/></button><br/>
                    <bold>{video.snippet.title}</bold><br/>
                    {video.snippet.description}
                    </div>
                );
            })}
        </div>
     );
}

export default SearchList;