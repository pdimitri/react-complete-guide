import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: '28'},
      {name: 'Peter', age: '34'},
      {name: 'Stephanie', age: '16'}
    ]
  }


  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    this.setState({
      persons: [
        {name: newName, age: '28'},
        {name: 'Georg', age: '34'},
        {name: 'Stephanie', age: '17'}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <button onClick={() => this.switchNameHandler('Volker')}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        />
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}
        click = {this.switchNameHandler.bind(this,'Harry')}>
          My Hobby is Racing
        </Person>
      </div>
    );
  }
}

export default App;
