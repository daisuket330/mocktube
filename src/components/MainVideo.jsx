import React from 'react';

const MainVideo = ({ selectedVideo }) => {
    // if there's no video currently seleceted return "No Video Selected".

    const videoSrc = `https://www.youtube.com/embed/${selectedVideo}`;

    return (
        <div>
            <iframe id="ytplayer" type="text/html" width="640" height="390"
                src={videoSrc}
                frameborder="0">
            </iframe>
        </div>
            
    )
}

export default MainVideo;