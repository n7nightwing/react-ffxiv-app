import React, { Component } from 'react';
import './App.css';
import Search from './components/search.js';
import Header from './components/header.js';
import Form from './components/form.js';
import About from './components/about.js';
import { Switch, Route, Link } from 'react-router-dom';


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
      this.getCharacterData(data.Results[0].ID)
    })
  }

  getCharacterData(Id) {
    console.log(Id)
    fetch(`https://xivapi.com/character/${this.state.lodestoneID}`)
    .then(results => {
      return results.json()})
      .then(data => {
        console.log(data.Character)
        this.setState({character: data.Character, hasChar: true})
      })
  }

  render() {
    return (
      <div className="container">
        <Header 
        avatar={this.state.character.Avatar}
        charName ={this.state.character.Name} />
        {/* add in route, this should route to '/' while passing down getcharactercall */}
        {/* < Form 
          getCharacterCall={this.getCharacterCall} /> */}
          <Route exact path='/' render={ (props) => <Form getCharacterCall={this.getCharacterCall} {...props} /> } />
          <Route exact path='/about' component={About} />
          {/* this should show jobs on '/jobs' */}
        <Search jobs={this.state.character.ClassJobs}/>
        <p>{this.state.character.Id}</p>
      </div>
    );
  }
}

export default App;
