import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      pisteet: [0,0,0,0,0,0]
    }
  }

  arvonta = () => {
    let arvottu = Math.floor(Math.random() * 6);
    this.setState({ selected: arvottu});
    console.log("arvottu: ",arvottu);
}

  aanesta = () => {
    const kopio = this.state.pisteet;
    kopio[this.state.selected] += 1;
    this.forceUpdate();
    console.log(this.state.pisteet);
}

  Winner = () => {
    let a = Math.max(...this.state.pisteet);
    console.log(a);

    for (let i = 0; i < 6; i++) {
        if (this.state.pisteet[i] === a) {
            return (
                <div>
                {this.props.anecdotes[i]}<br/>
                has {this.state.pisteet[i]} votes 
                </div>                
            )
        }
    }

  }


  render() {
    return (
      <div>
        {this.props.anecdotes[this.state.selected]}<br/>
        has {this.state.pisteet[this.state.selected]} votes
        <br/>
        <button onClick={this.aanesta}>vote</button>
        <button onClick={this.arvonta}>random anecdote</button>
        <h2>Anecdote with most votes:</h2>
        <this.Winner/>
      </div>



    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)