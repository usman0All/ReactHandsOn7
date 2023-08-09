import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AddStudent} from '../DataSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export function AddStudentData() {
  const Navi= useNavigate()
  const data = useSelector((state)=>state.student)
  const dispatch=useDispatch()

  const [Name, setName]=useState("")
  const [Age, setAge]=useState("")
  const [Course, setCourse]=useState("")
  const [Batch, setBatch]=useState("")

  const handleSubmit=()=>{
    // console.log(data);
    if(Name && Age && Course && Batch){
      dispatch(AddStudent({
        "id":data.length,
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
<input type='text' placeholder='Name'   name='Name'   value={Name}  onChange={(e)=>setName(e.target.value)} className='Form-Data'/>
<input type='text' placeholder='Age'    name='Age'    value={Age}  onChange={(e)=>setAge(e.target.value)} className='Form-Data'/>
<input type='text' placeholder='Course' name='Course' value={Course}  onChange={(e)=>setCourse(e.target.value)} className='Form-Data'/>
<input type='text' placeholder='Batch'  name='Batch'  value={Batch}  onChange={(e)=>setBatch(e.target.value)} className='Form-Data'/>

<div className='Submit-Data-Buttons'>
    <Link to={'/Student'}><button className='Cancel-Button'>Cancel</button></Link>
    <button className='Submit-Button'onClick={handleSubmit}>Submit</button>
</div>
</form>



    </div>
    </>
  )
}
