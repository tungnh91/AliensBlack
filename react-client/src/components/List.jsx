import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> Front Page </h4>
    {console.log('props ar2222r ', props)}
    { props.items.map(item => <ListItem item={item}/>)}
  </div>
)

export default List;
