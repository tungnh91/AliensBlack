import React from 'react';

const ListItem = ({item}) => (
  <div>
    <div key={item.data.id}>
        <div className="score">{item.data.score}</div>
        <div className="title">
          <div href={item.data.url}>
            {item.data.title}
          </div>
        <div className="author">
          Posted by <div>{item.data.author}</div>
        </div>
      </div>
    </div>
  </div>
)


export default ListItem;

// <div className="video-list-entry">
//     <div className="media-left media-middle">
//       <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
//     </div>
//     <div className="media-body">
//       <div 
//         className="video-list-entry-title"
//         onClick={() => handleVideoListEntryTitleClick(video)}
//       >
//         {video.snippet.title}
//       </div>
//       <div className="video-list-entry-detail">{video.snippet.description}</div>
//     </div>
//   </div>