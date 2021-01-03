import React from "react";
import "./VideoItem.css";

interface VideoItemProps {
  video: any;
  key: number;
  onVideoSelect: any;
}

const VideoItem = ({ video, onVideoSelect }: VideoItemProps) => {
  return (
    <div
      onClick={() => {
        onVideoSelect(video);
      }}
      className="video-item item"
    >
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.high.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
