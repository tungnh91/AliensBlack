import React from 'react';
import ListItem from './ListItem.jsx';
import ListSubs from './ListSubs.jsx';

const List = (props) => (
  <div >
    { props.items.map(item => <ListItem item={item}/>)}
    { props.items.map(item => <ListSubs item={item}/>)}

  </div>
)

export default List;
