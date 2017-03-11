import React from 'react';

const ListSubs = ({item}) => (
  <div key={item.data.id} className="list">
          <a href={'http://reddit.com/' +item.data.subreddit_name_prefixed}>
            {item.data.subreddit}
          </a>
  </div>
)

export default ListSubs;