import axios from 'axios';
import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

const UpdateUSer = () => {

  const navigate = useNavigate();

  const user = useLoaderData();

  const handleSubmit = async(e)=>{
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const jobTitle = form.jobTitle.value;
    const email = form.email.value;
    const company = form.company.value;

    const UpdatedUser = {
      name,email,jobTitle,company
    }

    axios.put(`http://localhost:3000/users/${user._id}`,UpdatedUser,{
      headers:{
        authorization: `Bearer ${localStorage.getItem("acess_token")}`
      }
    })
    .then((response)=>{
      alert("success in Updating")
      navigate("/")
    })
    .catch((error)=>{
      const errorMessage = error.response.data.message;
      alert(errorMessage)
    })

  }

  return (
    <div>
      <div className="card px-4">
      <form method="dialog" onSubmit={handleSubmit}>
        <h3 className="font-bold text-lg">Update The User!</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="name"
            name="name"
            placeholder="name"
            className="input input-bordered"
            defaultValue={user.name}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            defaultValue={user.email}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            name="jobTitle"
            placeholder="Web Developer"
            className="input input-bordered"
            defaultValue={user.jobTitle}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company</span>
          </label>
          <input
            type="text"
            placeholder="Ex: Mircrosoft"
            name="company"
            defaultValue={user.company}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary" value="Update" />
        </div>
      </form>
    </div>
    </div>
  )
}

export default UpdateUSer
