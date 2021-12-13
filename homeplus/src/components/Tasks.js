import { collection, addDoc, } from "firebase/firestore"; 
import { useState } from "react";
import { db } from '../firebase'

const Tasks = () => {

  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskPerson, setTaskPerson] = useState("");


    const addTask  = () => {
    try {
      const docRef =  addDoc(collection(db, "tasksDB"), {
        task: taskName,
        date: taskDate,
        who: taskPerson
      });


      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}




    return (
        <div>
           <div className="container">
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
            
          <button className="btn" onClick={addTask}>Add task</button>  
           </div>
        </div>
    )
}

export default Tasks
