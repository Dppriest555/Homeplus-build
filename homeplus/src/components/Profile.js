import {
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";


const Profile = () => {
const [userName, setUserName] = useState("")


const [user, setUser] = useState({}); 
onAuthStateChanged(auth, (currentUser) => {
  setUser(currentUser);
});


const update = async () => {
  try {
     const user = await updateProfile(
      auth,
      userName,
      
    );
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};

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
    {user.email}
    <br />
    {user.userName}
            </h2>
        </div>
    </div>
  )
}

export default Profile
