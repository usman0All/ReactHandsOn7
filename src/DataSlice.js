import { createSlice } from "@reduxjs/toolkit";
import Student from "./Data";

export const DataSlice=createSlice({
name:"Student Detail App",


initialState:{
studentdata:Student 
},

reducers:{

AddStudent:(state,action)=>{
    state.studentdata.push(action.payload)
},

UpdateStudent:(state,action)=>{
    const{id,Name,Age,Course,Batch}=action.payload

    //For existing student=state

    const existingStudent = state.studentdata.find(student =>student.id ===id)

    existingStudent.Name=Name
    existingStudent.Age=Age
    existingStudent.Course=Course
    existingStudent.Batch=Batch

}

}

})
export const {AddStudent, UpdateStudent}= DataSlice.actions
export default DataSlice.reducer