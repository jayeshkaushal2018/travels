import React,{useState} from 'react';


const Bookingshow =(props)=>{
    const {recipes} =props;
    const [searchTerm,setSearchTerm] = useState('');

    const onInputChange = e =>{
        console.log(e.target.value);
        setSearchTerm(e.target.value);
    }

    return(
        <>
        <div className="container">
          
        
          
          

             <input type="text" placeholder="Search.." name="search" onChange={onInputChange} className="search"/><br/>
           
            
              
              
              <div className="row">
            {
                recipes.filter((recipe)=>{
                    if(searchTerm == ""){

                        return recipe;

                    }else if(recipe.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                        return recipe
                    }
                }).map((recipe , key) =>(
                    <div className="container">
                    <div className="card">
                        
                        
                        <img src={recipe.img_url} alt="Vehicle" width="200" height="120"></img>
                            <div className="card-body">
                                <h5><b>Id :</b>{recipe.id}</h5>
                                <h5><b>Title : </b>:{recipe.title}</h5>
                                <h5><b>From City:</b>{recipe.from_city}</h5>
                                <h5><b>TO city:</b>{recipe.to_city}</h5>
                                <h5><b>Date :</b>{recipe.date_time}</h5>  
                                    
                                <button type="button" className="btn btn-primary btn-lg button">View more</button>           
                            </div>
                        
        
                           
                        </div>
                     </div>
                ))
            }
        </div>
        </div>

        </>
    )

}




export default Bookingshow;