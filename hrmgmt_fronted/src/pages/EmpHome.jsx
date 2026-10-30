function EmpHome(){

    let currentuser = JSON.parse(localStorage.getItem("currentuser"))

    return(
        <div>
            <h1>Employee Home Page</h1>
            <h2> welcome {currentuser.name}</h2>
        </div>
    )
}
export default EmpHome