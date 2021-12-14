import { collection, getDocs, addDoc } from "firebase/firestore"; 
import { useEffect, useState } from "react";
import { db } from '../firebase'

const Tasks = () => {

  const [tasks, setTask] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskPerson, setTaskPerson] = useState("");
  const tasksCollectionRef = collection(db, "tasksDB")

  useEffect(() => {
    const getTasks = async () => {
      const data = await getDocs(tasksCollectionRef);
      setTask(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    }

    getTasks()
  }, []);



    const addTask = () => {
    try {
      const send =  addDoc(collection(db, "tasksDB"), {
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

           {tasks.map((task) => {
             return <div> 
               <h1>Task: {task.task}</h1> 
               <h1>Who: {task.who}</h1> 
               <h1>Date: {task.date}</h1> 
               </div>;
           })}
        </div>
    )
}

export default Tasks
