import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useState } from 'react'






function Profile() {


    const auth = getAuth();
    const [user, setUser] = useState({});


    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });




    return (
        <div>            
            <h2>
                {user.uid}
                <br/>
                {user.email}
                <br/>
                {user.displayName}
                <br/>
                {user.photoURL}
            </h2>
        </div>
    )
}

export default Profile
