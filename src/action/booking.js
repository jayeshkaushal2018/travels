import React,{ useState ,useEffect,createContext} from 'react';
import Bookingshow from './bookingshow';
import Axios from 'axios';
import './booking.css';
import Navbar from './layout/Navbar';
import Header from './layout/header';
import { FirstName } from "./vehicle"
import {useHistory} from 'react-router-dom';

const Booking =(props)=>{
    const [recipes,setRecipes] =useState([]);
    const [search,setSearch] =useState("chiken");
    const APP_ID ="5e384cd9";
  const APP_KEY="4e21616ba26b2bf98eab84f130ff3d8f";
  const history = useHistory();
  
  const check =()=>{

    if(localStorage.getItem("name") == "")
    {
      history.push("/login");

    }
    console.log("this header");

  }
  check();
 
  
  const onInputChange = e =>{
    console.log(e.target.value);
    setSearch(e.target.value);
}

    useEffect(async ()=>{
        //const res =await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const res =await Axios.get(`https://609a69750f5a13001721acc8.mockapi.io/booking`);
        
        console.log(res);
    
        setRecipes(res.data);
      },[]);

    return(
        <>
        <Header />
        <Navbar />
        <FirstName.Consumer>
            {(fname) =>{
                
                return (<h1>My name is {fname}</h1>)
            } 
            }
        </FirstName.Consumer>
        <h1>{props.name}</h1>
        <h1 className="heading"><b>booking</b></h1>
       <Bookingshow recipes={recipes} onInputChange={onInputChange} />
        </>

    );

}

export default Booking ;
