import React, { useState } from "react";

const Contact = () => {
  const initialState = {
    name:"",
    email:"",
    phone:"",
    description:""
  }
  const [formData, setFormData]= useState(initialState);
  
  const {name,email,phone,description} = formData;
  const changeHandler= (event) =>{
    setFormData(()=>({
      ...formData,
      [event.target.id]:event.target.value
    }))
  }
  const handlerSubmit = (e) =>{
    e.preventDefault()
    fetch('http://localhost:3001/api/postcontact',{
      method: "POST",
      headers:{
        "Content-Type":'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.text())
    .then(formData => {
      console.log('Success:', formData);
    alert("Thanks For Contacting US")

    })
    .catch((error)=>{
      console.error("Error", error)
    })
    
    setFormData(initialState)
  }
  return (
    <>
      <div className="container m-auto">
        <h1 className="text-center text-xl lg:text-3xl font-medium tracking-wide py-5">Contact US</h1>
        <hr />
        <div className="max-w-lg mt-10 m-auto border border-gray-900 shadow-sm shadow-gray-900  p-4 rounded-md">
          <form onSubmit={handlerSubmit} className="flex flex-col gap-1">
            <span className="text-lg font-light ">
              Name :
              <input type="text" id="name" required onChange={changeHandler} value={name} className="block py-1.5 px-2.5 text-black text-xl outline-none rounded-sm w-full"/>
            </span>
            <span className="text-lg font-light mt-2">
              Email :
              <input type="email" id="email" required onChange={changeHandler} value={email}  className="block py-1.5 px-2.5 text-black text-xl outline-none rounded-sm w-full"/>
            </span>
            <span className="text-lg font-light mt-2">
              Phone :
              <input type="number" id="phone" required onChange={changeHandler} value={phone}  className="block py-1.5 px-2.5 text-black text-xl outline-none rounded-sm w-full"/>
            </span>
            <span className="text-lg font-light mt-2">
              Description :
              <textarea type="text" id="description" required onChange={changeHandler} value={description}  className="block py-1.5 px-2.5 text-black text-xl outline-none rounded-sm w-full"/>
            </span>
            <button type="submit" className="py-1.5 px-2.5 border text-xl outline-none rounded-sm mt-3 w-full bg-zinc-950 hover:bg-black duration-700">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
