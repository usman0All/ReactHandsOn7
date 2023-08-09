import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

function Student() {

    const data= useSelector((state)=>state.student.studentdata)
    const Navi = useNavigate()
    // const dispatch = useDispatch()
    console.log(data);
      return (
        <>
    <div className='Student-Heading'>Students Details</div>
   <button className='New-Student-Button Button-Text' onClick={() => {Navi('/AddStudentData')}}>Add New Student</button>

    <div className='Data-Container'>
    <table>
    <thead>
    <tr className='Table-Head'>
        <td>Name</td>
        <td>Age</td>
        <td>Course</td>
        <td>Batch</td>
        <td>Change</td>
    </tr>
    </thead>
    <tbody>
    {data.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.Name}</td>
              <td>{item.Age}</td>
              <td>{item.Course}</td>
              <td>{item.Batch}</td>
              <td><Link to="/UpdateStudentData" state={{data: index}} >Edit</Link> </td>

    </tr>
    )
    })}
    </tbody>
    </table>
    </div>
        </>
      )
    }
    
    export default Student