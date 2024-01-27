import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import axios from 'axios'
import Modal from '../../Components/modal/Modal';
import { Link } from 'react-router-dom';

const HomePage = () => {



  const handleDelete = (id)=>{
    axios.delete(`http://localhost:3000/users/${id}`,{
      headers:{
        authorization: `Bearer ${localStorage.getItem("acess_token")}`
      }
    }).then((response)=>{
      alert(response.data.message)
    }).catch((error)=>{
      const errorMessage = error.response.data.message;
      alert("lmao");
    })
  }

  const SignOut = async()=>{
    localStorage.removeItem("acess_token")
  }


  const [jobers , setJobers]  = useState([]);


  useEffect(()=>{
    axios.get('http://localhost:3000/users')
  .then((response)=> {
    setJobers(response.data)
  })
  .catch((error)=>{
    console.log(error);
  })
  },[jobers])

  return (
    <div className='max-w-7xl container mx-auto px-4 my-12'>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <button className="btn btn-active btn-accent" onClick={()=>document.getElementById('my_modal_3').showModal()}>Add An Employe</button>
        <div className='space-x-5 flex'>
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <Link to='/login'>          <button className="btn btn-active btn-accent">Login</button>
</Link>
          <button className="btn btn-active btn-accent" onClick={SignOut}>SignOut</button>
        </div>
      </div>
                <div className='mt-8'>
                <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead className='bg-accent text-white rounded-md'>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>email</th>
                  <th>JobTitle</th>
                  <th>Company</th>
                  <th>Manage Users</th>
                </tr>
              </thead>
              <tbody>
                {
                  jobers.map((jober,index)=>(
                    <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{jober.name}</td>
                    <td>{jober.email}</td>
                    <td>{jober.jobTitle}</td>
                    <td>{jober.company}</td>
                    <td className='space-x-4 flex'>
                      <Link to={`update-user/${jober._id}`}><button className='btn btn-xs btn-warning'>Edit Jober</button></Link>
                      <button className='btn btn-xs btn-accent' onClick={()=> handleDelete(jober._id)}>Remove</button>
                    </td>
                  </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
      </div>

      <Modal/>

    </div>
  )
}

export default HomePage