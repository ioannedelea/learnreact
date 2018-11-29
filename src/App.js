import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', nume: 'Ioan', varsta: 33},
      { id: '2', nume: 'Mihai', varsta: 34},
      { id: '3', nume: 'George', varsta: 37}
    ],
    otherState: 'some other value',
    showPersons: false
  }


nameChangedHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p =>{
    return p.id === id;
  });

  const person = {
    
    ...this.state.persons[personIndex]

  };

  // const person = Object.assign({}, this.state.persons[personIndex]);

  person.nume = event.target.value;
  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState({persons: persons});

}

deletePersonHandler = (personIndex) => {
  
  // const persons = this.state.persons.slice();

  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons})


}


togglePersonsHandler = () =>{

  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});

}


  render() {
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
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              nume={person.nume}
              varsta={person.varsta}
              key={person.id}
              changed={(event)=>this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>

      );
    }


    return (
      <div className="App">
          <h1>Hello World!</h1>
          <p>This is my first react app.</p>
          <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons
          </button>
       {persons}

        

         
          
      </div>
    );
  }
}

export default App;
