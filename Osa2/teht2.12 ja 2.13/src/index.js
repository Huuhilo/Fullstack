import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
      console.log("Filter change: ",event.target.value)
      this.setState({ filter: event.target.value })
    }

    // en keksinyt miten saada klikatun kohteen nimi, kunnes löysin alla olevan ratkaisun netistä (item välitys)
    handleLink = (item) => (event) => {
        this.setState({filter: item});
        console.log("item", item);
    }


    render() {

        let show = 'Too many matches, specify another filter';
        let countriesToShow =
            this.state.countries.filter(country => country.name.toLowerCase().indexOf(this.state.filter.toLowerCase()) > -1 );
        console.log("Render: ", countriesToShow);

        // osumia enemmän kuin yksi ja alle 10
        if ((countriesToShow.length < 10) && (countriesToShow.length > 1)) {
            show = countriesToShow.map(country => {
                return (
                    <div> 
                    <li onClick={this.handleLink(country.name)} value={country.name}>
                        {country.name}
                    </li>
                    </div>
                )
            })
        }

        if (countriesToShow.length == 0) {
            show = 'No matches';
        }

        if (this.state.filter === '') {
            show = '';
        }



        // vain yksi osuma, näytetään tiedot
        if (countriesToShow.length == 1) {
            show = countriesToShow.map(country => {
                return (
                    <div>
                        <h3>{country.name} {country.nativeName}</h3>
                        <p>Capital: {country.capital}</p>
                        <p>Population: {country.population}</p>
                        <img src={country.flag}/>
                    </div>
                )
            })
        }


        return (
            <div>
            <h2>Maaluettelo</h2>

            <form>
                Filter countries: <input value={this.filter} onChange={this.handleFilterChange}/>
            </form>

            <ul>
            {show}
            </ul>      
            </div>
            );
        }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
  );    