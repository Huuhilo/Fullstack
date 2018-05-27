import React from 'react';


const Notification = (props) => {
  console.log("message: ",props.message);
  console.log("messageState: ",props.messageState);
  if (props.message === null) {
    return null
  }
  return (
    <div className={props.messageState}>
      {props.message}
    </div>
  )
}

export default Notification