import {useNavigate} from "react-router-dom"
function HrHome(){
    let navigate = useNavigate()
    let currentuser = JSON.parse(localStorage.getItem("currentuser"))
    //JSON.parse() convert json to string 
    let handleLogout = (e)=>{
        localStorage.removeItem("currentuser")//it will erase your data of currentuser
        navigate("/login")
    }

    return (
        <div>
            <h1>HR Home Page</h1>
            <h2> welcome {currentuser.name}</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
export default HrHome