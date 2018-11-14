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
      ],
      showPersons: false
    });
  }


  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: '28'},
        {name: event.target.value, age: '34'},
        {name: 'Stephanie', age: '17'}
      ]
    });
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow })
  }

  render() {
    //Inline Style - at the button element - doesn't give the full power of CSS. Example: Hover State
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
            <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            />
            <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler}
            />
            <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}
            click = {this.switchNameHandler.bind(this,'Harry')}
            >
              My Hobby is Racing
            </Person>
          </div>  
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
         
      {persons}    
      </div>
      
    );
  }
}

export default App;
