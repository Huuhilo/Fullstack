import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas',
        id: 1 
        }
      ],
      newName: ''
    }
  }

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }


  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.Lisaa}>
          <div>
            nimi: <input value={this.state.newName} onChange={this.handleNameChange}/>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <ul>
          {this.state.persons.map(person => <this.Listaa key={person.id} person={person} />)}
        </ul>      
        </div>
    )
  }

  Listaa(props) {

    return (
        <div>
        {props.person.id} {props.person.name}
        </div>
    )
  }

  Lisaa = (event) => {
    event.preventDefault()
    console.log('nappia painettu')

    const nameObject = {
      name: this.state.newName,
      id: this.state.persons.length + 1
    }
  
    const persons = this.state.persons.concat(nameObject)
  
    this.setState({
      persons: persons,
      newName: ''
    })  }



}





export default App