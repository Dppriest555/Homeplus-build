import { useState, useEffect, React } from "react";
import { collection, addDoc, getDocs, updateDoc, doc, arrayUnion } from "firebase/firestore"; 
import { db  } from '../firebase'
import { auth } from "../firebase";
import {
  onAuthStateChanged
} from "firebase/auth";


const Groups = () => {
    
    const [groupName, setGroupName] = useState("");
    const [groups, setGroups] = useState([]);
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser.uid);
    });
    



    useEffect(() => {
      const getGroups = async () => {
        const data = await getDocs(collection(db, "Groups"));
        setGroups(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
      }
      getGroups()
    }, []);



    const createGroup = async () => {

            const collectionRef = collection(db, "Groups");
            const payload = { groupName: groupName, users:[user]};
            const docRef = await addDoc(collectionRef, payload);
            console.log("Document id is:" + docRef.id)
    }

    const joinGroup = async (id) => {
      const docRef = doc(db, "Groups", id ) ;
      const payload = {users: arrayUnion(user)};
      updateDoc(docRef, payload,)
      console.log(id,groupName)
    }

//    const getGroups = () => {
//      const data = getDoc(collection(db, "Groups"));
//      addDoc(data.doc.map((doc) => ({...doc.data(), id: doc.id })))
//    }
//  getGroups()




      

    return (
        <div className="container">
            <input
                  className="text-input"
                  placeholder="Group Name "
                  onChange={(event) => {
                      setGroupName(event.target.value);
                  }}

                />
                <button onClick={createGroup} className="btn btn-green">Create Group</button>

                {groups.map((group) => {
             return <div key={group.id}
             className="task-card">
               <button onClick={() => joinGroup(group.id)}>{group.groupName}</button>
            
          

           </div>
           })}              
        </div>
    )
}



export default Groups
