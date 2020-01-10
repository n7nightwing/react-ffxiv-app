import React, { Component } from 'react';
import './App.css';
import Search from './components/search.js';
import Header from './components/header.js';
import Form from './components/form.js'


// use for constructing the url
let firstName = '';
let lastName = '';
let gameWorld = 'cactuar'

class App extends Component {
  constructor() {
    super();
    this.state = {
      character: {},
      hasChar: false,
      shouldUpdate: false,
      lodestoneID: 0,
    }
  }
  // componentDidMount() {
  //   fetch('https://xivapi.com/character/8612301')
  //   .then(results => {
  //     return results.json();
  //   }).then(data => {
  //     this.setState({character: data.Character, hasChar: true});
  //   })
  // }

  getCharacterCall = (e) => {
    let firstName = e.target.elements.firstSearch.value;
    let lastName = e.target.elements.lastSearch.value;
    e.preventDefault();
    console.log(firstName, lastName);
    fetch(`https://xivapi.com/character/search?name=${firstName}+${lastName}&server=${gameWorld}`)
    .then(results => {
     return results.json()})
    .then(data => {
      this.setState({ lodestoneID: data.Results[0].ID, shouldUpdate: true});
    })
  }

  render() {
    return (
      <div className="container">
        <Header 
        avatar={this.state.character.Avatar}
        charName ={this.state.character.Name} />
        <Form 
          getCharacterCall={this.getCharacterCall} />
        <Search jobs={this.state.character.ClassJobs}/>
        <p>{this.state.character.Id}</p>
      </div>
    );
  }
}

export default App;
