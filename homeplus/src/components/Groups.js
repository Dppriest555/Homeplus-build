import { useState, useEffect } from "react";
import { collection, addDoc,getDoc } from "firebase/firestore"; 
import { db } from '../firebase'
import { async } from "@firebase/util";

const Groups = () => {
    
    const [groupName, setGroupName] = useState(""); 

    const createGroup = async () => {
        try {
            const send = addDoc(collection(db, "Groups",), {})
            
            console.log("Added", send.id, "to database");
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          const ref = getDoc
    }

    useEffect(() => {
        const getGroups = async () => {
          const data = await getDoc(collection(db, "Groups"));
          setTask(data.doc.map((doc) => ({...doc.data(), id: doc.id })))
        }
        getGroups()
      }, []);

      

    return (
        <div className="co">
            <input
                  className="text-input"
                  placeholder="Group Name "
                  onChange={(event) => {
                      setGroupName(event.target.value);
                  }}
                />
                <button onClick={createGroup} className="btn btn-green">Create Group</button>
        </div>
    )
}



export default Groups
