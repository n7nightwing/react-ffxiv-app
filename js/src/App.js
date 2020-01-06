import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      character: "",
    }
  }

componentDidMount() {
  fetch('https://xivapi.com/character/search?name=artemis+quohn&server=cactuar')
  .then(results => {
    return results.json();
  }).then(data => {
    let character = data.results[0].map((pic) => {
      return(
        <div key={pic.results}>
          <img src={pic.Avatar} />
        </div>
      )
    })
  })
}
}

export default App;
