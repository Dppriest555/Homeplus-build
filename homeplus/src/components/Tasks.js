
import { collection, addDoc, } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore"

const db = getFirestore();
const Tasks = () => {



    const addTask  = () => {
    try {
      const docRef =  addDoc(collection(db, "tasksDB"), {
        task: "Offline ",
        date: "12 211 2",
        who: "Isddan"
      });


      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}




    return (
        <div>
          <button className="btn" onClick={addTask}>Add task</button>   
          

          <h1></h1>


        </div>
    )
}

export default Tasks
