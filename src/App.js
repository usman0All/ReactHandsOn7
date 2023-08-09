import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Nav } from './Nav';
import { Home } from './Home';
import { ContactUs } from './ContactUs';
import Student from './Student';
import { AddStudentData } from './Components/AddStudentData';
import { UpdateStudentData } from './Components/UpdateStudentData';


function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/AddStudentData' element={<AddStudentData/>}/>
        <Route path='/UpdateStudentData' element={<UpdateStudentData/>}/>
        <Route path='/' element ={<Home/>}/>
        <Route path='/Student' element ={<Student/>}/>
        <Route path='/ContactUS' element ={<ContactUs/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
