import React from 'react';

export default function YouTubeEmbed({ videoId, title = 'YouTube video' }) {
  return (
    <div style={{
      position: 'relative',
      paddingBottom: '56.25%', // This maintains a 16:9 aspect ratio
      height: 0,
      overflow: 'hidden'
    }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
} 