import React,{ useState ,useEffect,createContext} from 'react';
import Vehicleshow from './vehicleshow';
import Axios from 'axios';
import './booking.css';
import Header from './layout/header';
import Login from './forms/login';
import Navlog from './layout/Navbarlogin';

const FirstName = createContext();
const Vehicle =()=>{
    
    const [recipes,setRecipes] =useState([]);
    const [search,setSearch] =useState("chiken");
    const APP_ID ="5e384cd9";
  const APP_KEY="4e21616ba26b2bf98eab84f130ff3d8f";
  <Login name={"anil"} />
 
  const onInputChange = e =>{
    console.log(e.target.value);
    setSearch(e.target.value);
}

    useEffect(async ()=>{
        //const res =await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const res =await Axios.get(`https://609a69750f5a13001721acc8.mockapi.io/vehicle`);
        
        console.log(res);
    
        setRecipes(res.data);
      },[]);

    return(
        <>
        <Header />
        <Navlog  name={"Vehicle"}  namelink={"login"} link={'/login'} prelink={'/'}/>
        <FirstName.Provider value={"vinod"}>
          
        </FirstName.Provider>
        <h1 className="heading"><b>Vehicle</b></h1>
       <Vehicleshow recipes={recipes} onInputChange={onInputChange} />
        </>

    );

}

export default Vehicle ;
export { FirstName };