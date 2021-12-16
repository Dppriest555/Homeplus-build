import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore"; 
import { useEffect, useState,  } from "react";
import { db  } from '../firebase'

const Tasks = () => {

  const [tasks, setTask] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskPerson, setTaskPerson] = useState("");


  useEffect(() => {
    const getTasks = async () => {
      const data = await getDocs(collection(db, "tasksDB"));
      setTask(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    }
    getTasks()
  }, []);


  const deleteTask = async(id) =>{
    const taskDoc = doc(db, "tasksDB", id)
    await deleteDoc(taskDoc)
    console.log("Task deleted"+{taskDoc, id})
  }


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

            {tasks.map((task) => {
             return <div key={task.id}
             onClick={() => {
               deleteTask(task.id)
             }} className="task-card">
             <div className="task-card-img">{task.who}</div>
             <div className="task-card-name container"><h3>{task.task}</h3><p>{task.date}</p></div>
             <div className="task-card-done">
               </div>
           </div>
           })}


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

          <button className="btn" type="submit" onClick={addTask}>Add task</button>
           </div>


        </div>
    )
}

export default Tasks
