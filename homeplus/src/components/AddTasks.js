import Calendar from 'react-calendar'
import { collection , addDoc } from "firebase/firestore"; 
import { useState } from "react";
import { db  } from '../firebase'
import {Link} from 'react-router-dom'



const AddTasks = () => {


  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskPerson, setTaskPerson] = useState("");
 
  
    const addTask = () => {
    try {
      const send = addDoc(collection(db, "tasksDB",), {
        task: taskName,
        date: taskDate,
        who: taskPerson
      });
      
      console.log("Added", send.task, "to database");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}


return (
        <div>
           <div className="container">
        < Calendar/>

           <input
              className="text-input"
              placeholder="Name of task"
              onChange={(event) => {
                setTaskName(event.target.value);
              }}
            />
            <input
              className="text-input"
              placeholder="When?"
              type="date"
              onChange={(event) => {
                setTaskDate(event.target.value);
              }}
            />
            <input
              className="text-input"
              placeholder="Who?"
              onChange={(event) => {
                setTaskPerson(event.target.value);
              }}
            />

          <Link to='/task'><button className="btn" type="submit" onClick={addTask}>Add task</button></Link>
             
             
          </div>
        </div>
    )
    
}

export default AddTasks
