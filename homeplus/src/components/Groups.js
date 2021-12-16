import { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; 
import { db , auth } from '../firebase'



const Groups = () => {
    
    const [groupName, setGroupName] = useState("");

    const createGroup = () => {
        try {
          // eslint-disable-next-line
            const send = addDoc(collection(db, "Groups",`${groupName}`,`${groupName}`), {
              groupName: groupName,
              members: auth.currentUser.displayName,
            }).then( 
              console.log("done")
              )
            
            console.log("Added group to the database");
          } catch (e) {
            console.error("Error adding document: ", e);
          }
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
        </div>
    )
}



export default Groups
