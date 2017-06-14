import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import ListSubs from './components/ListSubs.jsx'

$('document').onLoad = $('.saved').hide();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      showSaved: false
    }
    this.goOffline = this.goOffline.bind(this);
    this.clicked = this.clicked.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:3000/items',
      type: 'GET',
      success: (redditData) => {
        redditData = (JSON.parse(redditData)).data.children;
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
    ((callback) => {  
      $.ajax({
        url: 'http://localhost:3000/offline',
        type: 'GET',
        success: (redditData) => {
          callback(redditData);
        },
        error: (err) => {
          console.log('err from inside offline method', err);
        }
      });
    })
    ((redditData) => {
      this.setState({
        items: redditData
      });
    })
  }


  clicked() {
    $.ajax({
      url: 'http://localhost:3000/',
      type: 'POST',
      success: () => {
        this.setState({showSaved: true});
      },
      error: (err) => {
        console.log('err from inside clicked method', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Alien<button onClick={this.clicked} className="s">s</button> Black</h1>

      <div className={this.state.showSaved ? 'saved' : 'hidden'}>Saved! </div> 

      <h2>Reddit, declustered, <button onClick = {this.goOffline}> offline. </button></h2>
      <List items={this.state.items}/>

    </div>)
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
