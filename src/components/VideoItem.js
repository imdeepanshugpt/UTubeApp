import React from 'react';
import './VideoItem.css';
const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div className="ui items" onClick={() => onVideoSelect(video)} key={video.id.videoId}>
            <div className="item">
                <div className="image">
                    <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                </div>
                <div className="content">
                    <div className="meta">
                        <span>{video.snippet.title}</span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default VideoItem;