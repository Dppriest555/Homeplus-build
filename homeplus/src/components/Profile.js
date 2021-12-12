import {
  updateProfile,
  onAuthStateChanged
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";


const Profile = () => {
const [userName, setUserName] = useState("")
const [user, setUser] = useState({});
  
onAuthStateChanged(auth, (currentUser) => {
  setUser(currentUser);
});

const update = () => {
  updateProfile(auth.currentUser, {
    displayName:userName, photoURL: "https://example.com/jane-q-user/profile.jpg"
  }).then(() => {
    console.log(user.displayName)
    console.log("Profile updated !")
  }).catch((error) => {
    alert('an error occured')
  });
}

  return (
    <div>
      <div>            
            <h2>
            <input
              placeholder="Name..."
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
    <br />
    <button className="btn" onClick={update}>Update</button>
    <br />
    {user.displayName}
    <br />
    {user.email}
    
            </h2>
        </div>
    </div>
  )
}

export default Profile
