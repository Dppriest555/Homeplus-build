import Calendar from 'react-calendar'
import { collection , addDoc, where, getDocs, query, doc, } from "firebase/firestore"; 
import { useState,} from "react";
import { db  } from '../firebase'
import {Link} from 'react-router-dom'
import { auth } from "../firebase";
import {
  onAuthStateChanged
} from "firebase/auth";




const AddTasks = () => {


  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskPerson, setTaskPerson] = useState("");
  const [user, setUser] = useState({});


  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser.uid);
  });
  
 
  
    const addTask = async () => {
      const collectionRef = collection(db, "Groups");
      const q = query(collectionRef, where("users", "==", user))
      const snapshot = await getDocs(q);

      const results = snapshot.docs.map((doc) => ({ ...doc.data(), id:doc.id}));
      console.log(results);
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
