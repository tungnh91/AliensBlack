import React from 'react';
import ListItem from './ListItem.jsx';
import ListSubs from './ListSubs.jsx';

const List = (props) => (
  <div >
    { props.items.map(item => <ListItem key ={item.data.id} item={item}/>)}
    { props.items.map(item => <ListSubs key ={item.data.id} item={item}/>)}

  </div>
)

export default List;
