

import Addnewdoctor from './components/Addnewdoctor'
import Doctorcard from './components/Doctorcard'
import Navbar from './components/Navbar'
import Section from './components/Section'
import './components/style.css'
// import { useState } from 'react'
// import { useEffect } from 'react'
function App() {
  //  let [count,setCount] = useState(0)
  //  let [data,newData] = useState('')
  //   useEffect(()=>{
  //     console.log('api calling')
  //   },[data])
   return (
    <div>
      {/* {data}
      <button onClick={()=>{
        let a = prompt('enter a name')
        newData(a)
      }}>
       newData
      </button>
      count is {count}
      <button onClick={
        ()=>{
          setCount(count+1)
        }}>add</button>  */}
      <Navbar/>
      <Section/>
      <div className='doctorcontainer'>
      <Doctorcard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4nJ7CWyaXhg0sW1TcQ3SnrIexya7p50t878UKwlFRxA&s=10' name='Meera' gender='Female' specialization='Cardiologist'/>
      <Doctorcard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-8SSk9-i6mfEV0k5yliUB1acB4caAKjKlP0S-ue8AA&s=10' name='Ram' gender='Male' specialization='Radiologist'/>
      <Doctorcard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1-TA7QMYQtMyC-Eot_zW6bAQqtM_I5jdGss10BI-PEQ&s=10' name='Ajay' gender='Male' specialization='Dermatologist'/>
      <Doctorcard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8W5tXWjKkfpSXfNDOH1RjwFDEy9cNwAoGJs7OFkKeoA&s=10' name='Seetha' gender='Female' specialization='Dentist'/>
    </div>
    <Addnewdoctor/>
    </div>
  )
}

export default App