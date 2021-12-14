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
    displayName: userName, 
    photoURL: "../img/avatars/avatar1"
  }).then(() => {
    console.log(user.displayName)
    console.log(user.photoURL)
    console.log("Profile updated !")
  }).catch((error) => {
    alert('an error occured')
  });
}

  return (
    <div>
      <div className="container">    

          <img src={user.photoURL} alt="Current Profile"/>      
          <h2>{user.email}</h2>  


                <input
                  className="profile-text-input"
                  placeholder={user.displayName}
                  onChange={(event) => {
                    setUserName(event.target.value);
                  }}
                />



        <br/>
       
            <div className="avatar-grid">
              
              <label>
              <input type="radio" name="test" value="small" checked/>
              <div className="avatar1"></div>
              </label>
                            
              <label>
              <input type="radio" name="test" value="small" checked/>
              <div className="avatar2"></div>
              </label>
                            
              <label>
              <input type="radio" name="test" value="small" checked/>
              <div className="avatar3"></div>
              </label>
                            
              <label>
              <input type="radio" name="test" value="small" checked/>
              <div className="avatar4"></div>
              </label>
                            
              <label>
              <input type="radio" name="test" value="small" checked/>
              <div className="avatar5"></div>
              </label>
                            
              <label>
              <input type="radio" name="test" value="small" checked/>
              <div className="avatar6"></div>
              </label>
                            
              <label>
              <input type="radio" name="test" value="small" checked/>
              <div className="avatar7"></div>
              </label>
                            
              <label>
              <input type="radio" name="test" value="small" checked/>
              <div className="avatar8"></div>
              </label>
                            
              <label>
              <input type="radio" name="test" value="small" checked/>
              <div className="avatar9"></div>
              </label>
                            
              <label>
              <input type="radio" name="test" value="small" checked/>
              <div className="avatar10"></div>
              </label>              
              <label>
              <input type="radio" name="test" value="small" checked/>
              <div className="avatar11"></div>
              </label>
                            
              <label>
              <input type="radio" name="test" value="small" checked/>
              <div className="avatar12"></div>
              </label>
                            
              <label>
              <input type="radio" name="test" value="small" checked/>
              <div className="avatar13"></div>
              </label>
                            
              <label>
              <input type="radio" name="test" value="small" checked/>
              <div className="avatar14"></div>
              </label>
                            
              <label>
              <input type="radio" name="test" value="small" checked/>
              <div className="avatar15"></div>
              </label>
              
              
              

      </div>
            <button className="btn" onClick={update}>Update</button>
        </div>
    </div>
  )
}

export default Profile
