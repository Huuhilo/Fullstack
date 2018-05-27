import React from 'react';


 const Filter = (props) => {
    return (
        <div>
        rajaa näytettäviä: <input value={props.filter} onChange={props.handleFilterChange}/>
        </div>
    )
}

  export default Filter