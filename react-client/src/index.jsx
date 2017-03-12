import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import ListSubs from './components/ListSubs.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.goOffline = this.goOffline.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:3000/items',
      type: 'GET',
      success: (redditData) => {
        redditData = (JSON.parse(redditData)).data.children;
        console.log(redditData[0], 'this is what I hoped to be an array', 'is it?', Array.isArray(redditData));
        this.setState({
          items: redditData
        })
      },
      error: (err) => {
        console.log('err from inside componentDidMount', err);
      }
    });
  }
  goOffline(redditData) {
    console.log('go offline son!');
    ((callback) => {  
      $.ajax({
        url: 'http://localhost:3000/offline',
        type: 'GET',
        success: (redditData) => {
          // console.log( redditData,'redditdata-----------','typeof', typeof redditData);
          console.log(this.state.items, 'current state after loading offline data');
          callback(redditData);
        },
        error: (err) => {
          console.log('err from inside offline method', err);
        }
      });
    })((redditData) => {
      console.log('ran', this.setState);
      this.setState({
        items: redditData
      });
      console.log('state====*****************==');
    })
  }


  clicked() {
    $.ajax({
      url: 'http://localhost:3000/',
      type: 'POST',
      success: () => {
        console.log('get request sending from client is completed!')
      },
      error: (err) => {
        console.log('err from inside clicked method', err);
      }
    });
  }

  render () {
    return (<div>
      <button onClick={this.goOffline}> Go offline son! </button>
      <h1>Aliens Black</h1>
      <h2>Reddit, declustered, <button onClick={this.clicked}> offline. </button></h2>
      <List items={this.state.items}/>

    </div>)
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
