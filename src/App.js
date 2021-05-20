
import './App.css';
import Vechicle from './action/vehicle';

import Booking from './action/booking';
import Login from './action/forms/login';
import Registration from './action/forms/Registration';
import Home from './action/Home';
import Contact from './action/Contact';
import About from './action/About';


import { Route,Switch } from 'react-router-dom';

function App() {
  return (
    <>
    
      <Switch>
      <Route path='/booking'  component={Booking}/>
        <Route path='/login' exact component={Login} />
        <Route path='/' exact component={Vechicle} />
        <Route path='/registration' exact component={Registration} />
        <Route path='/home' exact component={Home} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/about' exact component={About} />
        
      </Switch>

    </>
  );
}

export default App;
