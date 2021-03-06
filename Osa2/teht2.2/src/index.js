import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {

    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
          {
            nimi: 'Reactin perusteet',
            tehtavia: 10,
            id: 1
          },
          {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7,
            id: 2
          },
          {
            nimi: 'Redux',
            tehtavia: 7,
            id: 4
          },
          {
            nimi: 'Komponenttien tila',
            tehtavia: 14,
            id: 3
          }
        ]
      }
    
      return (
        <div>
          <Kurssi kurssi={kurssi} />
        </div>
      )
    }

const Otsikko = (props) => {

    return (
    <div>
        <h1>{props.nimi}</h1>
    </div>
    )
}

const Kurssi = (props) => {

    return (
        <div>
            <Otsikko nimi = {props.kurssi.nimi}/>
            {props.kurssi.osat.map(o => <Osa key = {o.id} osa = {o.nimi} tehtavia = {o.tehtavia} />)}
            <Yhteensa kurssi = {props.kurssi} />
        </div>
    )
}

const Osa = (props) => {

    return (
    <div>
        <p>{props.osa} {props.tehtavia}</p>
    </div>
    )
}



const Yhteensa = (props) => {

    let sum = 0;
    props.kurssi.osat.map(o => sum = sum + o.tehtavia);
    
    return( 
          <p>yhteensä {sum} tehtävää</p>
    )
}
 

ReactDOM.render(
  <App />,
  document.getElementById('root')
)