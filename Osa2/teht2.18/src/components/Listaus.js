import React from 'react';

 const Listaa = (props) => {

    if (props.person.name.toLowerCase().indexOf(props.filter) > -1) {
      return (
        <div>
        {props.person.name} {props.person.number} (id: {props.person.id}) <button value={props.person.id} onClick={props.deleteHandler}>Poista</button>
        </div>
      )
    } else { return('')}
  }

  export default Listaa