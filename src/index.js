import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from  'react-router-dom';
import Vechicle from './action/vehicle';

import Booking from './action/booking';
import Login from './action/forms/login';
import Registration from './action/forms/Registration';
import Reg from './action/forms/Reg';
import { Route,Switch } from 'react-router-dom';
import Contact from './action/Contact';
import About from './action/About';
import Logout from './action/forms/logout';

ReactDOM.render(
  <BrowserRouter>
  <>
  <React.StrictMode>
    
    <Switch>
        <Route path='/login'  exact component={Login} />
        <Route path='/' exact component={Vechicle} />
        <Route path='/reg'  exact component={Reg} />
        <Route path='/registration'exact  component={Registration} />
        <Route path='/booking' exact component={Booking}/>
        <Route path='/contact' exact component={Contact} />
        <Route path='/about' exact component={About} />
        <Route path='/logout' exact component={Logout} />
      </Switch>
    
  </React.StrictMode>
  </>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
