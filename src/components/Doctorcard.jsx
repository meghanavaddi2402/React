import { useNavigate } from "react-router-dom"


function Doctorcard({img,name,gender,specialization,id,deletedata,updatedata}) {
  let navigate = useNavigate()
  return (
   <div className='card'>
    <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3Z78AmoKkL2eZC3HnWzIhS-UAoaH9zGX_QXDwaWTJA&s=10' />

    </div>
        <h1>{name}</h1>
        <p>{gender}</p>
        <p>{specialization}</p>
        <button onClick={()=>navigate(`/doctordetails/${id}`)}>View Details</button>
        <button onClick={()=>deletedata(id)}>Delete</button>
        <button onClick={()=>updatedata(id)}>Update</button>
   </div>
  )
}

export default Doctorcard