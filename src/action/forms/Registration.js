
import { Link } from 'react-router-dom';
import axios from 'axios';
import React ,{useState}from 'react';
import {useHistory} from 'react-router-dom';
import Header from '../layout/header';
import './form.css';


const Registration =()=>{
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        state:"",
        city:"",
        address:"",
        email:"",
        contact:"",
        password:""

    })

    const {name,state,city, address,email,contact,password} =user;

    const onInputChange =(e)=>{

        setUser({...user,[e.target.name]:e.target.value});
        console.log(e.target.value);
    };

    const onSubmit=async (e) =>{
        e.preventDefault();
        await axios.post("https://609a69750f5a13001721acc8.mockapi.io/user",user);
        alert("user register successfully");
        history.push("/login");
    };

    return(
        <>
           <Header />
            <div>
            
                <div className="container">
                    <div  className="row justify-content-center ">
                      
                            <div  className="col-8">
                                <form className="card p-4 bg-light" onSubmit={e => onSubmit(e)}>
                                    <h3 className="text-center text-info">Registration</h3>
                                    <div className="form-group">
                                        <label htmlfro="username" className="text-info">Username:</label><br />
                                        <input type="text" name="name" id="name" className="form-control" 
                                        value={name}
                                        onChange={e => onInputChange(e)}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlfro="state" className="text-info">State:</label><br />
                                        <input type="text" name="state" id="state" className="form-control"
                                        value={state}
                                        onChange={e => onInputChange(e)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlfro="city" className="text-info">city:</label><br />
                                        <input type="text" name="city" id="city" className="form-control" 
                                        value={city}
                                        onChange={e => onInputChange(e)}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlfro="address" className="text-info">address:</label><br />
                                        <input type="text" name="address" id="address" className="form-control" 
                                        value={address}
                                        onChange={e => onInputChange(e)}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlfro="contact" className="text-info">contact:</label><br />
                                        <input type="text" name="contact" id="contact" className="form-control"
                                        value={contact}
                                        onChange={e => onInputChange(e)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlfro="contact" className="text-info">email:</label><br />
                                        <input type="text" name="email" id="email" className="form-control"
                                        value={email}
                                        onChange={e => onInputChange(e)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlfro="password" className="text-info">Password:</label><br />
                                        <input type="text" name="password" id="password" className="form-control" 
                                        value={password}
                                        onChange={e => onInputChange(e)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlfro="repassword" className="text-info">Re-enter Password:</label><br />
                                        <input type="text" name="repassword" id="repassword" className="form-control" />
                                    </div>
                                   
                                    <div className="form-group text-center my-4">
                                        <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" />
                                        <Link to="/login" className="ml-4">Login</Link>
                                    </div>
                                    <div id="register-link" className="text-right">

                                        
                                    </div>
                                </form>
                            </div>
                       
                    </div>
                </div>
            </div>
         

        </>
    )

}

export default Registration;