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
  componentWillReceiveProps(redditData) {
    console.log('go offline son!');
    $.ajax({
      url: 'http://localhost:3000/offline',
      type: 'GET',
      success: (redditData) => {
        console.log( redditData[23],'redditdata-----------','typeof', typeof redditData);
        this.setState({
          items: redditData
        })
        console.log(this.state.items, 'current state after loading offline data');
      },
      error: (err) => {
        console.log('err from inside offline method', err);
      }
    });
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
      <button onClick={this.componentWillReceiveProps.bind(this)}> Go offline son! </button>
      <h1>Aliens Black</h1>
      <h2>Reddit, declustered, <button onClick={this.clicked.bind(this)}> offline. </button></h2>
      <List items={this.state.items}/>

    </div>)
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
