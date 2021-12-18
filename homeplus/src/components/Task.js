import {useEffect , useState} from 'react'
import {doc , collection , deleteDoc , getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import Calendar from 'react-calendar'
import {Link} from 'react-router-dom'




function Task() {
    const [tasks, setTask] = useState([]);


    useEffect(() => {
        const getTasks = async () => {
          const data = await getDocs(collection(db, "Groups"));
          setTask(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
        }
        getTasks()
      }, []);


  const deleteTask = async(id) =>{
    const taskDoc = doc(db, "tasksDB", id)
    await deleteDoc(taskDoc)
    setTask(tasks.filter((task) => task.id !== id))
    console.log("Task deleted"+{taskDoc, id})
  }
      
    return (
        <div className='container'>

            < Calendar />

            {tasks.map((task) => {
             return <div key={task.id}
             onClick={() => {
               deleteTask(task.id)
             }} className="task-card">
             <div className="task-card-img">{task.who}</div>
             <div className="task-card-name container"><h3>{task.task}</h3><p>{task.date}</p></div>
             <div className="task-card-done"></div>
           </div>
           })}

           <div className="add-container">
                <Link to="/addtasks"><button className='btn-add'>+</button></Link>
           </div>

        </div>
    )
}

export default Task
