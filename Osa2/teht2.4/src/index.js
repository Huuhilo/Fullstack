import React from 'react'
import ReactDOM from 'react-dom'


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


    const rivit = () => kurssit.map(kurssi => {
        return (
        <div key={kurssi.id}>
            {console.log(kurssi)}
            <Kurssi kurssi={kurssi}/> 
        </div>
    )
        }
    )

//    const rivit = () => <Kurssi key={kurssit[1].id} kurssi={kurssit[1]}/> 



    console.log(rivit());


    return (
        <div>
            {rivit()}
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
            {console.log(props.kurssi)}
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

    // taulukossa objekteja, joissa jokaisessa tehtavia. 
    // Puretaan ensin tehtavia omaksi taulukoksi, sitten lasketaan arvot yhteen
    const sum = props.kurssi.osat.map(osa => osa.tehtavia).reduce((acc, curr) => acc + curr);

    return( 
          <p>yhteensä {sum} tehtävää</p>
    )
}
 

ReactDOM.render(
  <App />,
  document.getElementById('root')
)