import { useState } from "react"
import Home from "./Home"
import axios from "axios"

function Addnewdoctor() {
    let [name,setaName]= useState('')
    let [age,setAge]= useState('')
    let [gender,setGender]= useState('')
    let [specialization,setSpecialization]= useState('')
    let [salary,setSalary]= useState('')
    let[newdoctor,setNewdoctor]=useState(null)

    async function handelsubmit(event){
        event.preventDefault()
        let fromdetails={id:Date.now(),name,age,gender,specialization,salary}
        await axios.post('https://doctorapibackend.onrender.com/doctors',fromdetails)
        alert('data posted')
        setNewdoctor(fromdetails)

    }
    async function deletedata(id){
        await axios.delete(`https://doctorapibackend.onrender.com/doctors/${id}`)
        alert('data deleted')
        setNewdoctor(id)
    }
    async function updatedata(id) {
        let update={
            name: 'john',
            specialization: 'heart',
            age: 25,
            gender: 'male',
            salary: 600000
        }
        await axios.put(`https://doctorapibackend.onrender.com/doctors/${id}`,update)
        alert('data updated')
    }
  return (
    <div className='addnewdoctor'>
        <center>
            <h1>Add New Doctor</h1><br />
            <form action="" onSubmit={handelsubmit}>
                <div>
                <input type="text" value={name} onChange={(e)=>setaName(e.target.value)} placeholder='Enter Doctor Name' /><br />
                <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Enter Age' /><br />
                <select name="gender" value={gender} onChange={(e)=>setGender(e.target.value)} id="">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select><br />
                <input type="text" value={specialization} onChange={(e)=>setSpecialization(e.target.value)} placeholder='Enter Specialization' /><br />
                <input type="text" value={salary} onChange={(e)=>setSalary(e.target.value)} placeholder='Enter Salary' /> <br />
                <button >AddDoctor</button>
                </div>
            </form> <br /> <br />
        </center>
        <Home deletedata={deletedata} updatedata={updatedata} newdoctor={newdoctor}/>
    </div>
  )
}

export default Addnewdoctor