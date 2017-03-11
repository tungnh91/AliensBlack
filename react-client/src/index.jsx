import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Offline from './components/Offline.jsx'
import ListSubs from './components/ListSubs.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:3000/items',
      type: 'GET',

      success: (redditData) => {
        redditData = JSON.parse(redditData);
        console.log('===========', redditData.data.children);
        this.setState({
          items: redditData.data.children
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  // console.log('this is the state', this.state)

  render () {
    return (<div>
      <h1>Aliens Black</h1>
      <h2>Reddit, declustered, offline.</h2>
      <List items={this.state.items}/>

    </div>)
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
