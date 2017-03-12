import React from 'react';

const ListItem = ({item}) => (
  <div>
    <div key={item.data ? item.data.id : item._id} className="posts">
        <div className="score">{item.data ? item.data.score : item.score}</div>
        <img className="thumbnail" src={((item.data ? item.data.thumbnail :item.thumbnail) === "self" || (item.data ? item.data.thumbnail : item.thumbnail) === "default") ? "favicon.png" : (item.data ? item.data.thumbnail : item.thumbnail)} />
        <div className="title">
          <a href={item.data ? item.data.url : item.url}>
            {item.data ? item.data.title : item.title}
          </a>
        <div className="author">
          <div>Posted by {item.data ? item.data.author : item.author} in {item.data ? item.data.subreddit_name_prefixed : item.subreddit_name_prefixed}</div>
        </div>
      </div>
    </div>
  </div>
)


export default ListItem;

