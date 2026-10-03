from fastapi import FastAPI
app = FastAPI()
#localhost:8000/getStudents
@app.get("/getStudents")
def getStudents():
    return "get Student method called"
#localhost:8000/addStudent
@app.post("/addStudent")
def addStudent():
    return "add student method called"
#localhost:8000/updateStudent
@app.put("/updateStudent")
def updateStudent():
    return "update student method called"
#localhost:8000/deleteStudent
@app.delete("/deleteStudent")
def updateStudent():
    return "delete student method called"
#localhost:8000/getPaticularStudent/1
@app.get("/getParticularStudent/{userid}")
def getParticularStudent(userid:int):
    return {"userid" : userid}

#localhost:8000/getdeptdetails?dept=cse&mark=50
@app.get("/getdeptdetails")
def getdeptdetails(dept:str,marks:int):
    return {"dept":dept,"marks":marks}