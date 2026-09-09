import { useNavigate } from "react-router-dom"


function Navbar() {
  let Navigate = useNavigate()
  return (
    <header>
        <h1>Doctor App</h1>
        <div>
            <button onClick={()=>Navigate('/')}>Home</button>
            <button onClick={()=>Navigate('/addnewdoctor')}>Add Doctor</button>
        </div>
    </header>
  )
}

export default Navbar