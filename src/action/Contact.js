import React from 'react';
import {useHistory} from 'react-router-dom';
import Navbar from './layout/Navbar';
import Header from './layout/header';

const Contact =()=>{
    const history = useHistory();
  
  const check =()=>{

    if(localStorage.getItem("name") == "")
    {
      history.push("/login");

    }
    console.log("this header");

  }
  check();
 

    return(
        <>
        <Header />
        <Navbar />

        <div className="container">
            <div className="py-4">
            <h1>Contact</h1>
            </div>
        </div>
        </>
    )
}

export default Contact;