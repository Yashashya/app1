import React, { useEffect, useState } from 'react'

import axios from 'axios';
export const CreateUser = () => {

  const [form, setForm] = useState({

    name:"",
    address:"",
    mobile:"",
    email:"",
    id:""

  })

    

  const changeHandler = (event) =>{


      setForm({...form,[event.target.name]:event.target.value});


  }


  const submithandler = async (event) =>{

   let  checkerror = false;

   try{

        let response = await axios.post("http://localhost/user-create",form);


        console.log("for response");
        console.log("for response",response);
      
   }catch(e){

      alert("network lost "+e);
   }
 

  }

    

   
 
  

  return (
    <>

       <div className="content-wrapper" style={{ minHeight: "1302.12px" }}>
  {/* Content Header (Page header) */}
  <div className="content-header">
    <div className="container-fluid">
    <div className="row">
  {/* left column */}
  <div className="col-md-12">
    {/* general form elements */}
    <div className="card card-primary">
      <div className="card-header">
        <h3 className="card-title">Quick Example</h3>
      </div>
      {/* /.card-header */}
      {/* form start */}
      <div>
        <div className="card-body">
          <div className="form-group">
            <label>Name</label> 
            <input type="text" className="form-control" name='name' defaultValue={form.name} onChange={changeHandler} />
          </div>
          <div className="form-group">
            <label>address</label>
            <input type="text" className="form-control" name='address' defaultValue={form.address} onChange={changeHandler} />
          </div>
          <div className="form-group">
            <label>mobile no</label>
            <input type="text" className="form-control" name='mobile' defaultValue={form.mobile} onChange={changeHandler} />
          </div>
          <div className="form-group">
            <label>id card</label>
            <input type="text" className="form-control" name='id' defaultValue={form.id} onChange={changeHandler} />
          </div>
          <div className="form-group">
            <label>email</label>
            <input type="text" className="form-control" name='email' defaultValue={form.email} onChange={changeHandler} />
          </div>
          

          
       
        </div>
        {/* /.card-body */}
        <div className="card-footer">
          <button type="button" className="btn btn-primary" onClick={submithandler}>
            Submit
          </button>
        </div>
      </div>
    </div>
   </div>
</div>
</div>
</div>
</div>

    </>
  )
}
