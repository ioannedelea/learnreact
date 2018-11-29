import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { nume: 'Ioan', varsta: 33},
      { nume: 'Mihai', varsta: 34},
      { nume: 'George', varsta: 37}
    ],
    otherState: 'some other value'
  }
switchNameHandler = (newName) => {
  // console.log('Was clicked');
  // DON'T DO THIS: this.state.persons[0].nume = 'Ioan Nedelea';
  this.setState(
    {persons:[
      { nume: newName, varsta: 33},
      { nume: 'Mihai', varsta: 34},
      { nume: 'George The Gay', varsta: 38}
    ] }
    )

}

nameChangedHandler = (event) => {
  this.setState(
    {persons:[
      { nume: 'Ioan', varsta: 33},
      { nume: event.target.value, varsta: 34},
      { nume: 'George The Gay', varsta: 38}
    ] }
    )

}



  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };


    return (
      <div className="App">
          <h1>Hello World!</h1>
          <p>This is my first react app.</p>
          <button 
          style={style}
          onClick={() => this.switchNameHandler('Ioan Nedelea xxx')}>Switch Name
          </button>
          <Person 
          nume={this.state.persons[0].nume} 
          varsta={this.state.persons[0].varsta} />

          <Person 
          nume={this.state.persons[1].nume} 
          varsta={this.state.persons[1].varsta}
          click={this.switchNameHandler.bind(this, 'Ioan Nedelea!!!')}
          changed={this.nameChangedHandler}>My Hobbies: Racing</Person>

          <Person 
          nume={this.state.persons[2].nume} 
          varsta={this.state.persons[2].varsta} />
          
      </div>
    );
  }
}

export default App;
