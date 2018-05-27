import React from 'react'
import ReactDOM from 'react-dom'
import Kurssi from './components/kurssi.js'


const App = () => {

    const kurssit = [
        {
          nimi: 'Half Stack -sovelluskehitys',
          id: 1,
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
        },
        {
          nimi: 'Node.js',
          id: 2,
          osat: [
            {
              nimi: 'Routing',
              tehtavia: 3,
              id: 1
            },
            {
              nimi: 'Middlewaret',
              tehtavia: 7,
              id: 2
            }
          ]
        }
    ]


    // kurssit taulukon läpikäynti on index.js:ssä, kurssi komponentti omassa tiedostossaan
    const rivit = () => kurssit.map(kurssi => {
        return (
        <div key={kurssi.id}>
            {console.log(kurssi)}
            <Kurssi kurssi={kurssi}/> 
        </div>
    )
        }
    )

    console.log(rivit());


    return (
        <div>
            {rivit()}
        </div>
      )
    }
    
 

ReactDOM.render(
  <App />,
  document.getElementById('root')
)