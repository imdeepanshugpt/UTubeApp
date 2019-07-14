import React from 'react';
import './VideoDetail.css';
const VideoDetails = ({ video }) => {
    if (!video) {
        return (
            <div>Loading....</div>
        );
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;
    return (
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSrc} allowfullscreen />
            </div>
            <div className="ui segment">
                <h3 className="channelTitle">{video.snippet.channelTitle}</h3>
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetails;