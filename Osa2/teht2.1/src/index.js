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



/*const Yhteensa = (props) => {

    return( 
    <div>
      <p>yhteensä {props.tehtavia1 + props.tehtavia2 + props.tehtavia3} tehtävää</p>
    </div>
    )
}
*/ 

ReactDOM.render(
  <App />,
  document.getElementById('root')
)