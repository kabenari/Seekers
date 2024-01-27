import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Modal = () => {

  const navigate = useNavigate();


    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const jobTitle = form.jobTitle.value;
        const email = form.email.value;
        const company = form.company.value;

        const newUser = {
          name,email,jobTitle,company
        }

        axios.post('http://localhost:3000/users', newUser)
        .then((response)=> {
          console.log(response);
          alert("Added a new majdur")
          navigate("/")
        })
        .catch((error)=> {
          console.log(error);
        });

    }

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit}>


    <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        </div>

    <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Job</span>
          </label>
          <input type="text" placeholder="Job" name='jobTitle' className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Company</span>
          </label>
          <input type="text" placeholder="company" name='company' className="input input-bordered" required />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary" type='submit'>Create</button>
        </div>
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>document.getElementById('my_modal_3').close()}>✕</button>
    </form>
  </div>
</dialog>
    </div>
  )
}

export default Modal
