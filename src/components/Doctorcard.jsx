import React from 'react'

function Doctorcard({img,name,gender,specialization}) {
  return (
   <div className='card'>
    <div>
        <img src={img} alt={name} />

    </div>
        <h1>{name}</h1>
        <p>{gender}</p>
        <p>{specialization}</p>
        <button>View Details</button>
   </div>
  )
}

export default Doctorcard