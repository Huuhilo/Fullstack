import React from 'react';
import Listaa from './Listaus.js';
import Filter from './filter.js';
import personService from '../services/persons.js';


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
    personService
    .getAll()
    .then(response => {
      this.setState({persons: response.data})
    })

    console.log(this.state.persons)

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

  handleDelete = (event) => {
    console.log("handleDelete");
    if (window.confirm("Do you really want to delete?")) {
      console.log("delete: ",event.target.value);
      personService.remove(event.target.value).then(() => {
        personService
        .getAll()
        .then(response => {
          this.setState({persons: response.data})
        })
          })
    }
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
          {this.state.persons.map(person => <Listaa key={person.id} person={person} filter={this.state.filter} deleteHandler={this.handleDelete} />) }
        </ul>      
        </div>
    )
  }



  Lisaa = (event) => {
    event.preventDefault()
    console.log('nappia painettu')
    let index = -1;

    // jos nimi löytyy, palautetaan person.id
    this.state.persons.map(person => { 
      if (person.name.indexOf(this.state.newName) === 0 ) { 
        console.log("osuma: ", person.id);
          index = person.id;

      } 
    })

    console.log("index: ",index);


    if (index >=0 ) {
        if (window.confirm("Henkilö löytyy jo, haluatko päivittää numeron??")) {
          console.log("update: ",index);
          personService.update(index,{name: this.state.newName, number: this.state.newNumber}).then(() => {
            personService
            .getAll()
            .then(response => {
              this.setState({persons: response.data})
            })
          })
      }
      
      // tyhjennetään nimi ja numerokenttä
      this.setState({ newName: '', newNumber: ''});

      console.log("INDEX: ",index);
          return('');
    }


    const nameObject = {
      name: this.state.newName,
//      id: this.state.persons.length ,   //ei oikeastaan tarvitse length + 1, koska indeksi lähtee nollasta, mutta lukumäärä yhdestä
      number: this.state.newNumber
    }
  
//    const persons = this.state.persons.concat(nameObject)
  
    // lisätään palvelimelle
    personService.create(nameObject)
    .then(response => {
      console.log(response)
      this.setState({
        persons: this.state.persons.concat(response.data),
        newName: '',
        newNumber: ''
      })  
      })

  


  }


}





export default App