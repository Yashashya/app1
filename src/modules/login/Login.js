import React, { useState } from 'react'
import axiosInstance from '../../libs/Axios';
import axios from 'axios';
import Cookies from 'universal-cookie';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
export const Login = () => {

  var form_data = new FormData();

  const cookies = new Cookies();
  const navigation = useNavigate();

  const [form, setForm] = useState({

    email:"",
    password:""

  });

  const changeHandler = (event) =>{


    setForm({...form,[event.target.name]:event.target.value});


  }

const submithandler = async(event) =>{
  event.preventDefault();

  for ( var key in form ) {
    console.log(key,form[key]);
    form_data.append(key, form[key]);
}


let response = await axios({

  method: "post",
  url: 'http://192.168.29.241:8000/api/login',
  data: form_data,
  headers: { "Content-Type": "form-data" },

}).catch((err)=>{

 let msg = err?.response?.data;

 console.log(msg);
 alert(msg.error);

});
let result = response?.data;
cookies.set("check",result.access_token,{path:"/",expires:moment().add(result.expires_in, 'seconds').toDate()});

navigation("/dashboard/admin");


}
  
  return (
    <>
 <div className="login-box">
  <div className="login-logo">
    <a href="../../index2.html">
      <b>Admin</b>LTE
    </a>
  </div>
  {/* /.login-logo */}
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Sign in to start your session</p>
      <form action="../../index3.html" method="post">
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" name='email' defaultValue={form.email} onChange={changeHandler}  />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input
            type="password"
            name='password'
            className="form-control"
            placeholder="Password"
            defaultValue={form.password}
            onChange={changeHandler}
          />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block" onClick={submithandler}>
              Sign In
            </button>
          </div>
          {/* /.col */}
        </div>
      </form>
      {/* /.social-auth-links */}
    </div>
    {/* /.login-card-body */}
  </div>
</div>


    </>
  )
}
