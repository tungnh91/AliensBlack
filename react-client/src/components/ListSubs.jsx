import React from 'react';

const ListSubs = ({item}) => (
  <div key={item.data ? item.data.id : item._data} className="list">
          <a href={'http://reddit.com/' + (item.data ? item.data.subreddit_name_prefixed : item.subreddit_name_prefixed)}>
            { item.data ? item.data.subreddit : item.subreddit}
          </a>
  </div>
)

export default ListSubs;