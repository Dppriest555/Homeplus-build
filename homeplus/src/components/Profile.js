import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useState } from 'react'





function Profile() {





const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {

    





    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User

    // ...
  } else {
    // User is signed out
    // ...
  }
});
const [displayName, setName] = useState("");



const update = async () => {
    try {
      const user = await updateProfile(
        auth,
        displayName,
      );
      console.log(user.displayName);
    }
    catch (error) {
      console.log(error.message);
    }
  };
      








    return (
        <div>            
            <h2>
            <input
                placeholder="Name..."
                type="text"
                onChange={(event) => {
                setName(event.target.value);
                  }}
                />

    <button className="btn" onClick={update}>Log in</button>


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
