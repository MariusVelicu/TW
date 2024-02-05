import {useState} from 'react'
import store from '../stores/RobotStore'

const RobotForm = (props) => {
    const [robotName, setRobotName] = useState('')
    const [robotType, setRobotType] = useState('')
    const [robotMass, setRobotMass] = useState('')

    const handleRobotAdd = (event) => {
        store.addRobot({
            name:robotName,
            type:robotType,
            mass:robotMass,
        })
    
    }
    return(
    <div>
        <h1>Robot form</h1>
        <form onSubmit={(e)=>{
            e.preventDefault()
            setRobotMass('')
            setRobotName('')
            setRobotType('')
        }}>
            <input id='name' type='text' aria-label='name' value={robotName}
            onChange={(event)=> {setRobotName(event.target.value)}}/> 
            <input id='type' type='text' aria-label='type' value={robotType}
            onChange={(event)=> {setRobotType(event.target.value)}}/> 
            <input id='mass' type='text' aria-label='mass' value={robotMass}
            onChange={(event)=> {setRobotMass(event.target.value)}}/> 
            <button onClick={handleRobotAdd}> Add</button>
        </form>
    </div>)

};

export default RobotForm;
