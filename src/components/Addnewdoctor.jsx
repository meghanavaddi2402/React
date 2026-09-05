import { useState } from "react"
import Home from "./Home"

function Addnewdoctor() {
    let [name,setaName]= useState('')
    let [age,setAge]= useState('')
    let [gender,setGender]= useState('')
    let [specialization,setSpecialization]= useState('')
    let [salary,setSalary]= useState('')
    let[newdoctor,setNewdoctor]=useState(null)
    function handelsubmit(event){
        event.preventDefault()
        let fromdetails={id:Date.now(),name,age,gender,specialization,salary}
       setNewdoctor(fromdetails)

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
            </form>
        </center>
        <Home newdoctor={newdoctor}/>
    </div>
  )
}

export default Addnewdoctor