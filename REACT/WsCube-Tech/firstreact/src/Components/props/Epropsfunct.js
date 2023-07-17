import React from 'react'

 const Epropsfunct = (props) => {
    console.log(props)  //props-> object
  return (
    <div>
        <h3>{props.number}</h3>
    </div>
  )
}
export default Epropsfunct;
