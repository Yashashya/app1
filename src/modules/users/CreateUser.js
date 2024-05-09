import React, { useEffect, useState } from 'react'

export const CreateUser = () => {

    //var email = "abc@123";

    const [email,setEmail] = useState("abc@123.com");
    const [numb,setNumb] = useState([]);

    const changeEmail = (event)=>{

       
       setEmail(event.target.value);
    // email = event.target.value;

    }

    const counting = ()=>{

        for(let i=0;i<9;i++)
        {
            setNumb([...numb,{test:"TESTING "+i}])

            console.log(i);
        }
      
    }
   

    useEffect(() => {
      
        counting();
      var countInterval =   setInterval(()=>{counting()},5000);
         
      return () => {

        clearInterval(countInterval);

       alert("hello");
      }
    }, [])
    
 
  

  return (
    <>

   {

        numb.map((row,i)=>{
            return <li key={i}>{row.test}</li>
        })


   }
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
      <form>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              defaultValue={email}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter email"
              onChange={changeEmail}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Confirm Email</label>
            <input
              type="text"
              className="form-control"
                value={email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputFile">File input</label>
            <div className="input-group">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="exampleInputFile"
                />
                <label className="custom-file-label" htmlFor="exampleInputFile">
                  Choose file
                </label>
              </div>
              <div className="input-group-append">
                <span className="input-group-text">Upload</span>
              </div>
            </div>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
        </div>
        {/* /.card-body */}
        <div className="card-footer">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
   </div>
</div>
</div>
</div>
</div>

    </>
  )
}
