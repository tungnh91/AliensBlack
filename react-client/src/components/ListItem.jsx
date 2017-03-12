import React from 'react';

const ListItem = ({item}) => (
  <div>
    <div key={item.data.id} className="posts">
        <div className="score">{item.data.score}</div>
        <img className="thumbnail" src={(item.data.thumbnail === "self" || item.data.thumbnail === "default") ? "favicon.png" : item.data.thumbnail} />
        <div className="title">
          <a href={item.data.url}>
            {item.data.title}
          </a>
        <div className="author">
          <div>Posted by {item.data.author} in {item.data.subreddit_name_prefixed}</div>
        </div>
      </div>
    </div>
  </div>
)


export default ListItem;

