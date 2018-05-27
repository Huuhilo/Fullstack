import React from 'react';
import Listaa from './Listaus.js';
import Filter from './filter.js';
import personService from '../services/persons.js';
import Notification from './Notification.js';
import '../message.css';

// lisäsin viestikenttään mahdollisuuden vihreään tai punaiseen taustaan 

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: '',
      message: null,
      messageState: 'messageOK'
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
    console.log("event.target.value: ", event.target.value);
    console.log("this.state.persons: ",this.state.persons);

    const poistettava = this.state.persons.filter(person => person.id == event.target.value.toString())[0].name.slice(0);
    console.log("poistettava: ",poistettava);

    if (window.confirm("Do you really want to delete?")) {
      console.log("delete: ",event.target.value);
      personService.remove(event.target.value).then(() => {
        personService
        .getAll()
        .then(response => {
          this.setState({persons: response.data})
        })
      })
      this.ShowNotification(`Poisto onnistui '${poistettava}'`,'messageOK');

    }


  }

  render() {
    return (
      <div>
        <Notification message={this.state.message} messageState={this.state.messageState} />
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


  ShowNotification = (message, messageState) => {
    this.setState({
      message: message,
      messageState: messageState
    })
  setTimeout(() => {
    this.setState({message: null})
  }, 5000)
}


  Lisaa = (event) => {
    console.log("LISAA");
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

//    console.log("Testivirhe alku");

//    personService.update(100,{name: 'testi´', number: 'testi'})
//      .catch(error => {console.log("testivirhe! ", error)});

//    console.log("Testivirhe loppu");

    // otetaan newName talteen, muuten alempana oleva ShowNotification näyttää tyhjää nimeä käytettäessä state.newName
    const name = this.state.newName.slice(0);    
    if (index >=0 ) {
        if (window.confirm("Henkilö löytyy jo, haluatko päivittää numeron??")) {
          console.log("update: ",index);
          personService.update(index,{name: this.state.newName, number: this.state.newNumber}).then(() => {
          personService
            .getAll()
            .then(response => {
              console.log('personService.Update');
              this.setState({persons: response.data})
          })

          this.ShowNotification(`Numero päivitetty '${this.state.newName}'`,'messageOK');
          
        }).catch(error => {
          this.ShowNotification(`'${name}' on poistettu palvelimelta`,'messageError');
          this.setState({ persons: this.state.persons.filter(person => person.id !== index) })
          return('');
      })
  
    }
  
      // tyhjennetään nimi ja numerokenttä
      this.setState({ newName: '', newNumber: ''});

      console.log("INDEX: ",index);
          return('');
    } else {
      this.ShowNotification(`Lisätty '${this.state.newName}'`,'messageOK');
    }


    const nameObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }
  
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