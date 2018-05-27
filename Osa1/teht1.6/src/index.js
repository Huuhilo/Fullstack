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
  
    render() {
      return (
        <div>
         <h2>Anna palautetta</h2>
          <div>
            <button onClick={() => this.setState({ hyva: this.state.hyva + 1 })}>
              Hyvä
            </button>
            <button onClick={() => this.setState({ neutraali: this.state.neutraali + 1 })}>
              Neutraali
            </button>
            <button onClick={() => this.setState({ huono: this.state.huono + 1 })}>
              Huono
            </button>
          </div>

         <h2>Statistiikka</h2>
         Hyvä: {this.state.hyva} <br/>
         Neutraali: {this.state.neutraali} <br/>
         Huono: {this.state.huono} <br/>
        </div>
      )
    }
  }

ReactDOM.render(
    <App />,
    document.getElementById('root')
  )