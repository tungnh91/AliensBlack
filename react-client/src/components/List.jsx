import React from 'react';
import ListItem from './ListItem.jsx';
import ListSubs from './ListSubs.jsx';

const List = ({items}) => (
  <div >
    { items.map(item => <ListItem key ={ item.data ? item.data.id : item._id} item={item}/>)}
    { items.map(item => <ListSubs key ={item.data ? item.data.id : item._id} item={item}/>)}

  </div>
)

export default List;
