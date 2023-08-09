import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useLocation,useNavigate } from 'react-router-dom'
import { UpdateStudent } from '../DataSlice'
import { Link } from 'react-router-dom'


export function UpdateStudentData() {
  const Navi= useNavigate()
    const data =useLocation();
    const dispatch=useDispatch();
    const dataId = data.state.data
    // const dataRef = data.state
    
    const StdDetail = useSelector((state)=>state.student.studentdata.filter((item)=>item.id===dataId))
  //console.log(dataId)

  const stdName = StdDetail[0].Name
   const stdAge = StdDetail[0].Age
   const stdCourse= StdDetail[0].Course
   const stdBatch = StdDetail[0].Batch

   const [Name, setName]=useState(stdName)
    const [Age, setAge]=useState(stdAge)
    const [Course, setCourse]=useState(stdCourse)
    const [Batch, setBatch]=useState(stdBatch)

    const handleSubmit=()=>{
    
      // console.log(dataId);
    
      if(Name && Age && Course && Batch){
        dispatch(UpdateStudent({
          "id":dataId,
          "Name": Name,
          "Age": Age,
          "Course":Course,
          "Batch":Batch

        }))
      }
      Navi('/student')
    }
    return (
    <>
    <div>

<form className='Form-Container'>
<input type='text'  placeholder='Name'   name='Name'  value={Name}     onChange={(e)=>setName(e.target.value)}  className='Form-Data'/>
<input type='text'  placeholder='Age'    name='Age'   value={Age}      onChange={(e)=>setAge(e.target.value)}  className='Form-Data'/>
<input type='text'  placeholder='Course' name='Course'value={Course}   onChange={(e)=>setCourse(e.target.value)}  className='Form-Data'/>
<input type='text'  placeholder='Batch'  name='Batch' value={Batch}    onChange={(e)=>setBatch(e.target.value)}  className='Form-Data'/>

<div className='Submit-Data-Buttons'>
    <Link to={'/Student'}><button className='Cancel-Button'>Cancel</button></Link>
    <button className='Submit-Button' onClick={handleSubmit}>Update</button>
</div>
</form>



    </div>
    </>
  )
}