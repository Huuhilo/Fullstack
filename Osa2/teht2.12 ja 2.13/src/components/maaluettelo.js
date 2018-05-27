import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        countries: [],
        filter: ''
      }
    }
  
    componentDidMount() {
        console.log('will mount')
        axios
          .get('https://restcountries.eu/rest/v2/all')
          .then(response => {
            console.log('promise fulfilled')
            this.setState({ countries: response.data })
          })
    }
    


    handleFilterChange = (event) => {
      console.log(event.target.value)
      this.setState({ filter: event.target.value })
    }



render() {
    const countriesToShow =
    this.state.notes.filter(note => note.important === true)


    return (
        <div>
        <h2>Maaluettelo</h2>
//        <Filter filter={this.state.filter} handleFilterChange = {this.handleFilterChange} />
        <ul>
            {this.state.countries.map(country => {
                return (country.name);
            })}
        </ul>      
        </div>
    );
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
  );