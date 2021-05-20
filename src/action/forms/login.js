import React ,{ useState ,useEffect,createContext}from 'react';
import { Link } from 'react-router-dom';
import './form.css';
import Header from '../layout/header';
import {useHistory} from 'react-router-dom';
import Axios from 'axios';
import Navlog from '..//layout/Navbarlogin';


const Login =(props)=>{

    const [recipes,setRecipes] =useState([]);
    const [user, setUser] = useState({
        username: "",
        password:""

    })

    const {username,password} =user;

    const onInputChange =(e)=>{

        setUser({...user,[e.target.name]:e.target.value});
        console.log(e.target.value);
    };

    

    useEffect(async ()=>{
        //const res =await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const res =await Axios.get(`https://609a69750f5a13001721acc8.mockapi.io/user`);
        
        console.log(res);
    
        setRecipes(res.data);
      },[]);
    

    const history = useHistory();
    let value ="";
    let count ="";

    console.log(props.name);
    const onSubmit =(e)=>{
        e.preventDefault();
       // history.push("/booking");
       // window.localStorage.setItem('name', 'jayesh');
       console.log(username);
       console.log(password);

       recipes.filter((recipes)=>{
        if(username === "" && password === ""){

        console.log("no match");
       

        }else if(username === recipes.name && password === recipes.password){
           console.log("match");
           history.push("/booking");
           window.localStorage.setItem("name",recipes.name);
        }else if(count<2){
            console.log("not match");
            alert("username or password is wrong");
            count = count + 1;
            
        }
    })
    };

    return(

        <>
        <Header />
        <Navlog  name={"Login"}  namelink={"Vehicle"} link={'/'} prelink={'/login'}/>
     
        
        <Link to="/vechicle">Home</Link>
            <div>
             
                <div className="container">
                    <div  className="row justify-content-center ">
                      
                            <div  className="col-8">
                                <form className="card p-4 bg-light" onSubmit={e => onSubmit(e)}>
                                    <h3 className="text-center text-info">Login</h3>
                                    <div className="form-group">
                                        <label htmlFor="username" className="text-info">Username:</label><br />
                                        <input type="text" name="username" id="username" className="form-control" 
                                         value={username}
                                         onChange={e => onInputChange(e)}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="text-info">Password:</label><br />
                                        <input type="text" name="password" id="password" className="form-control"
                                        value={password}
                                        onChange={e => onInputChange(e)} />
                                    </div>
                                    <div className="form-group text-center my-3">
                                        <input type="submit" name="submit" className="btn btn-info btn-md" value="Login" />
                                        <Link to="/registration" className="ml-3">Registeration</Link>
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

export default Login;