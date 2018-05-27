import React from 'react'



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


export default Kurssi