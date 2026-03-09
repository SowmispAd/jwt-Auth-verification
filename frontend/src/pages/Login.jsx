import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async () => {
    try{
      const res = await axios.post("http://localhost:5000/api/auth/login",{
        email,
        password
      });

      localStorage.setItem("token",res.data.token);
      localStorage.setItem("user",JSON.stringify(res.data.user));

      window.location.href="/dashboard";
    }catch(err){
      alert("Login failed");
    }
  };

  return(
    <div>
      <h2>Login</h2>
      <input placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}