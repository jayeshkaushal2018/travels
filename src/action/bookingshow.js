import React ,{useState}from 'react';

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
        
          <div className="row">
              
          <input type="text" placeholder="Search.." name="search"  className="search" onChange ={onInputChange}/><br/>
           
              
              </div>
              <div className="row">
            {
                
                recipes.map((recipe,key) =>(
                    
                    <div className="card">
                        
                       
                         
                            <div className="card-body" key={recipe.id}>
                                <h5><b>Id :</b>{recipe.id}</h5>
                                <h5><b>CustomerID : </b>:{recipe.uid}</h5>
                                <h5><b>Customer Name :</b>{recipe.vpost_id}</h5>
                                <h5><b>Date of registration :</b>{recipe.DOB}</h5>
                                <h5><b>remarks :</b>{recipe.remark}</h5>  
                                <button type="button" className="btn btn-primary btn-lg button">View more</button>           
                                            
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