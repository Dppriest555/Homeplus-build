import { useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import {Link} from 'react-router-dom'





function Login() {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});


    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
  
      
      const login = async () => {
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
          );
          console.log(user);
        }
        catch (error) {
          console.log(error.message);
        }
      };

      const logout = async () => {
        await signOut(auth);
      };



    return (
        <div>
            <div className="login-container container">
              <h2>Welcome back. <br/> You have been missed!</h2>
                <br/> 
              <p>Let's sign you in.</p>
                <br/> 
              <input
                  className="text-input"
                  placeholder="Email..."
                  onChange={(event) => {
                      setLoginEmail(event.target.value);
                  }}
                />

              <input
                className="text-input"
                placeholder="Password..."
                type="password"
                onChange={(event) => {
                setLoginPassword(event.target.value);
                  }}
                />

              <button className="btn" onClick={login}>Log in</button>
                <br/>
                
              <span>Don't have an account?
                <br/>
                  <Link className="paragraph-link" to='/signup'>
                  Register here</Link>
                </span>
             </div>

          <div className="log-out">
            <h4> User Logged In: </h4>
            {user?.email}    
            <button className="btn" onClick={logout}>Sign Out</button>
          </div>
        </div>
    )
}

export default Login
