import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "./DataSlice";


export default configureStore({

reducer:{
     student:StudentSlice
}


})