import React,{useState,useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const Home =()=>{

    const [users,setUser] =useState([]);

    useEffect(()=>{
        console.log("kaisa haoi bro??");
        loadUsers();

    },[]);

    const loadUsers = async () =>{
        const result = await axios.get("http://localhost:3003/user");
        setUser(result.data);
    }
    return(
        <>
        <div className="container">
            <div className="py-4">
                 <h1>Home</h1>
                 <table className="table border shadow">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                          users.map((user,index) =>(
                              <tr>
                              <th scope="row">{index + 1}</th>
                              <td>{user.title}</td>
                              <td>{user.body}</td>
                              <td>{user.email}</td>
                              <td className=" mr-2">
                                  <Link className="btn btn-primary mr-2">view</Link>
                                  <Link className="btn btn-outline-primary mr-2" to="/edit">Edit</Link>
                                  <Link className="btn btn-outline-danger mr-2">delete</Link>
                              
                              </td>
                              </tr>
                          ))
                      }
                    </tbody>
                  </table>
             
             
              </div>
            </div>
        </>
    );

};

export default Home;