import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Doctordetails() {

    let { id } = useParams()

    let [doctor, setDoctor] = useState()

    async function getapidata() {

        let response = await axios.get(
            "https://doctorapibackend.onrender.com/doctors"
        )

        console.log(response)
        console.log(response.data)

        let finaldata = response.data.find(
            (val) => val.id === Number(id)
        )

        setDoctor(finaldata)
    }

    useEffect(() => {
        getapidata()
    }, [id])

    return (
        <div>
            {doctor && (
                <div>
                    <h1>{doctor.id}</h1>
                    <h1>{doctor.name}</h1>
                    <h1>{doctor.gender}</h1>
                    <h1>{doctor.salary}</h1>
                </div>
            )}
        </div>
    )
}

export default Doctordetails