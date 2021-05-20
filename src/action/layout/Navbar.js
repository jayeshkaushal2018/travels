import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import './header.css';
import Logout from '..//forms/logout';
import {useHistory} from 'react-router-dom';
const Navbar =()=>{

  let username =localStorage.getItem('name');
  const history = useHistory();
  const onSubmit =(e)=>{
    e.preventDefault();
    console.log("button is working");
    localStorage.setItem("name","");
    history.push("/login");
  }

  
  


  

    return(
        <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                    <NavLink className="navbar-brand" exact to="#">
                        ReactUser
                    </NavLink>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                    
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                          <li className="nav-item ">
                            <NavLink className="nav-link" exact to="/booking">Home </NavLink>
                          </li>
                          <li className="nav-item ">
                            <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                          </li>
                          <li className="nav-item ">
                            <NavLink className="nav-link" exact to="/about">About</NavLink>
                          </li>
                         
                        </ul>
                       
                      </div>
                      
                     </div>
                     <div>
                    
                       <h2 className="username">welcome  {username}</h2>
                     </div>
                     
                     <div>
                       <form onSubmit={e => onSubmit(e)} >
                       <button type="submit"className="btn btn-outline-light" >Logout</button>
                       </form>
                     </div>

                 </nav>
        </>
    )

}
export default Navbar;