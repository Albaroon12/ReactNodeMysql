import React, { useEffect, useState } from "react";
import { format } from 'date-fns';
import { useParams } from "react-router-dom";

export const Student = ()=>{

  const { id } = useParams()
  console.log(id)
  const [data , setData] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:8081/students/${id}`)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  } , [])
  return(
    <div>
      {data.map((d ,i )=>(
        <table border="1" align="center" width="50%">
          <caption> <h1> Inforamtion Student</h1> </caption>
          <tr>
            <td>id</td>
            <td>{d.id}</td>
           </tr>
           <tr>
            <td>Name</td>
            <td>{d.name}</td>
           </tr>
           <tr>
            <td>Age</td>
            <td>{d.age}</td>
           </tr>
           <tr>
            <td>Address</td>
            <td>{d.addresss}</td>
           </tr>
           <tr>
            <td>BirthDay</td>
            <td>{format(d.birthday ,'yyyy/MM/dd')}</td>
           </tr>
           <tr>
            <td>Gender</td>
            <td>{d.gender}</td>
           </tr>
           <tr>
            <td>Phone Number</td>
            <td>{d.phone_number}</td>
           </tr>
           <tr>
            <td>University</td>
            <td>{d.university_name}</td>
           </tr>
           <tr>
            <td>Email</td>
            <td>{d.email}</td>
           </tr>
           <tr>
            <td>Average</td>
            <td>{d.average}</td>
           </tr>
           <tr>
            <td>Eligible</td>
            <td>{d.eligible}</td>
           </tr>
        </table>

      ))}
    </div>
  )
}