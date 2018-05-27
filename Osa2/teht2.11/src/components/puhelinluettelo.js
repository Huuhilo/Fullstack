import React from 'react';
import Listaa from './Listaus.js';
import Filter from './filter.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentDidMount() {
    console.log('will mount')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ persons: response.data })
      })
  }



  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }


  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNumber: event.target.value })
  }

  handleFilterChange = (event) => {
    console.log(event.target.value)
    this.setState({ filter: event.target.value })
  }

  

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Filter filter={this.state.filter} handleFilterChange = {this.handleFilterChange} />
        <form onSubmit={this.Lisaa}>
          <h2>Lisää uusi</h2>
          <div>
            nimi: <input value={this.state.newName} onChange={this.handleNameChange}/>
          </div>
          <div>
            numero: <input value={this.state.newNumber} onChange={this.handleNumberChange}/>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <ul>
          {this.state.persons.map(person => <Listaa key={person.id} person={person} filter={this.state.filter} />) }
        </ul>      
        </div>
    )
  }



  Lisaa = (event) => {
    event.preventDefault()
    console.log('nappia painettu')

    if (this.state.persons.map(person => person.name).indexOf(this.state.newName) >= 0 ) {
        alert("Nimi löytyy jo");
        return('');
    }


    const nameObject = {
      name: this.state.newName,
      id: this.state.persons.length ,   //ei oikeastaan tarvitse length + 1, koska indeksi lähtee nollasta, mutta length yhdestä
      number: this.state.newNumber
    }
  
    const persons = this.state.persons.concat(nameObject)
  
    this.setState({
      persons: persons,
      newName: '',
      newNumber: ''
    })  
  }



}





export default App