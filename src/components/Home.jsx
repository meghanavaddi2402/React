import React from 'react'
import { useEffect,useState } from 'react'
import Doctorcard from './Doctorcard';
function Home({newdoctor}) {
    let [doctors,setDoctors] = useState([])
    let[search,setSearch] = useState('')
    let[specialization,setSpecialization] = useState('')
    function getapidata(){
        let data = [
      {
        id: 1,
        name: "Teja",
        age: 26,
        gender: "Male",
        specialization: "Muscles",
        salary: 7000000,
        img: 'https://i.etsystatic.com/40718390/r/il/43ecdc/6665662008/il_fullxfull.6665662008_7n1n.jpg',
      },

      {
        id: 2,
        name: "Sam",
        age: 26,
        gender: "Male",
        specialization: "Bones",
        salary: 4000000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTipqQmroXZO1ggirEaIvKg_AjswWhd5e7lkDtYfhieHg&s=10',
      },

      {
        id: 3,
        name: "Anu",
        age: 25,
        gender: "Female",
        specialization: "Heart",
        salary: 5000000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrWe-fPXmHTPn0PNibb9RG0heM0Mk2dkJD34Q7B6WcRQ&s=10',
      },
    ];
    setDoctors(data)
    }
    useEffect(()=>{
        getapidata()
    },[])
    useEffect(()=>{
      if(newdoctor){
        setDoctors(prev=>[...prev,newdoctor])
      }
    },[newdoctor])

    let filterdoctors = doctors.filter((val)=>{
      return(val.name.toLowerCase().includes(search.toLowerCase())&&(specialization=="" || val.specialization==specialization))
      
    })


  return (
    <div>
      <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='search doctor' />
      <select value={specialization} onChange={(e)=>setSpecialization(e.target.value)} name="" id="">
        <option value="Bones">Bones</option>
        <option value="Heart">Heart</option>
        <option value="Muscles">Muscles</option>
      </select>
        {doctors.length>0?(
          <div className='doctorcontainer'>
            {filterdoctors.map((doctor)=>{
                return <Doctorcard
                img={doctor.img}
                name={doctor.name}
                specialization={doctor.specialization}
                gender={doctor.gender}
                key = {doctor.id}/>
            })}
        </div>):(<h1>Loading</h1>)}
    </div>
  )
}

export default Home