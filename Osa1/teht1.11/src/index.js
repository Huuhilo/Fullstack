import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        hyva: 0,
        neutraali: 0,
        huono: 0
      }
    }

    button = (arvo) =>  {
        return () => {
        if (arvo === "hyva") {
            this.setState({ hyva: this.state.hyva + 1 })
            }
        if (arvo === "neutraali") {
            this.setState({ neutraali: this.state.neutraali + 1 })
            }
        if (arvo === "huono") {
            this.setState({ huono: this.state.huono + 1 })
            }
        }
    }

    Statistic = (props) => {

        return (
                <tr><td>{props.otsikko}:</td><td> {props.value}</td>
                </tr>
        )
    
    }
    

    Statistics = () => {
        let lkm = this.state.hyva + this.state.neutraali + this.state.huono;
        let keskiarvo = (this.state.hyva * 1 + this.state.huono * -1) / lkm;

        if ( lkm === 0 ) {
            return(
                <div>
                    <h2>Statistiikka</h2>
                    ei yhtään palautetta annettu
                </div>
            )
        } else { 
            return (
                <div>
                    <table border="0"><tbody>
                    <tr><td colSpan="2">
                    <h2>Statistiikka</h2>
                    </td></tr>
                    <this.Statistic otsikko="Hyvä" value={this.state.hyva} />
                    <this.Statistic otsikko="Neutraali" value={this.state.neutraali} />
                    <this.Statistic otsikko="Huono" value={this.state.huono} />
                    <this.Statistic otsikko="Keskiarvo" value={keskiarvo} />   
                    <this.Statistic otsikko="Positiivisia" value= {this.state.hyva / lkm * 100 + " %"} />   
                    </tbody></table>
                </div>
            )
        }
    }



    render() {

        return (
        <div>
         <h2>Anna palautetta</h2>
          <div>
            <button onClick={this.button("hyva")}>
              Hyvä
            </button>
            <button onClick={this.button("neutraali")}>
              Neutraali
            </button>
            <button onClick={this.button("huono")}>
              Huono
            </button>
          </div>
          <this.Statistics/>
          
        </div>
      )
    }
  }


ReactDOM.render(
    <App />,
    document.getElementById('root')
  )