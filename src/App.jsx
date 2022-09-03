import './App.css'
import { useState, useEffect } from 'react'
import { heros } from "./data.jsx"
export default function App() {
  const male = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  const female = "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  const [employee, setEmployess] = useState(heros)
  const [selectedTeam, setSelectedTeam] = useState('Captain')

  const handleClick = (event) => {
      let id =event.currentTarget.id
    const transformList = employee.map(ele=>ele.id === parseInt(id) ? (ele.team ===selectedTeam ? {...ele,team:""} : {...ele,team:selectedTeam} ):employee)

    setEmployess(transformList)
   

  }

  const handleChange = (event) => {

    setSelectedTeam(event.target.value)

  }
  return (
    <>
      <div className='container text-center'>
        <div className="mt-5 mb-5">
          <select class="form-select w-25 p-2" aria-label="Default select example" onChange={handleChange} value={selectedTeam}>
            <option value="Captain">Captain</option>
            <option value="Stark">Stark</option>
            <option value="Thanos">Thanos</option>
            <option value="Arshim">Arshim</option>
          </select></div>
        <div class="row">
          {employee.map(ele => (
            <div class="col" id={ele.id} key={ele.id} onClick={handleClick}>
              <div className={`card mb-3 ${selectedTeam === ele.team ? "highlight" : ""}`} style={{ width: "18rem" }} >
                {ele.gender === "male" ? <img style={{ height: "300px", objectFit: "cover" }} src={male} className="card-img-top" alt="..." /> :
                  <img style={{ height: "300px", objectFit: "cover" }} src={female} className="card-img-top" alt="..." />}
                <div className="card-body">
                  <h5 className="card-title">{ele.name}</h5>
                  <p className="card-text">Hero Name: {ele.heroname}</p>
                  <p className="card-text">Team Name: {ele.team}</p>

                </div>
              </div>
            </div>
          ))}


        </div>
      </div>
    </>
  )
}
