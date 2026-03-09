export default function Dashboard(){

 const user = JSON.parse(localStorage.getItem("user"));

 const logout = ()=>{
   localStorage.removeItem("token");
   localStorage.removeItem("user");
   window.location.href="/";
 }

 return(
  <div>
    <h1>Dashboard</h1>
    <p>Welcome {user?.name}</p>
    <button onClick={logout}>Logout</button>
  </div>
 )
}