import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Doctorcard from './Doctorcard';
function Home({newdoctor,deletedata,updatedata}) {
    let [doctors,setDoctors] = useState([])
    let[search,setSearch] = useState('')
    let[specialization,setSpecialization] = useState('')
    async function getapidata(){
      let response = await axios.get(
      "https://doctorapibackend.onrender.com/doctors"
    )

    console.log(response)

    console.log(response.data)

    setDoctors(response.data)
    }
    useEffect(()=>{
        getapidata()
    },[newdoctor])


    // useEffect(()=>{
    //   if(newdoctor){
    //     setDoctors(prev=>[...prev,newdoctor])
    //   }
    // },[newdoctor])

    let filterdoctors = doctors.filter((val)=>{
      return(val.name.toLowerCase().includes(search.toLowerCase())&&(specialization=="" || val.specialization==specialization))
      
    })


  return (
    <div>
      <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='search doctor' /> <br />
      <select value={specialization} onChange={(e)=>setSpecialization(e.target.value)} name="" id="">
        <option value="Bones">Bones</option>
        <option value="Heart">Heart</option>
        <option value="Muscles">Muscles</option>
        <option value="Muscles">Neuro</option>
      </select>
        {doctors.length>0?(
          <div className='doctorcontainer'>
            {filterdoctors.map((doctor)=>{
                return <Doctorcard
                deletedata={deletedata}
                updatedata={updatedata}
                img={doctor.img}
                name={doctor.name}
                specialization={doctor.specialization}
                gender={doctor.gender}
                key = {doctor.id}
                id = {doctor.id}/>
            })}
        </div>):(<h1>Loading</h1>)}
    </div>
  )
}

export default Home