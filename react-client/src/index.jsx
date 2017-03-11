import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Offline from './components/Offline.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Aliens Black</h1>
      <List items={window.fakeData[0].data.children}/>
    </div>)
  }
}

// class Layout extends React.Component {
//   constructor(props) {

//   }

//   render () {
//     return (

//     )
//   }
// }

ReactDOM.render(<App />, document.getElementById('app'));
