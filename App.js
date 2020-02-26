import React from 'react';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Tab from './Tab';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import {BrowserRouter as Router, Switch,Route} from  'react-router-dom';



function App() {
    return(
        <Router>
        <div className="App">
            <Nav/>
                       
            <Route path="/" exact component={About} />
            <Route path="/about" component={About} />
            <Route path="/shop" component={Shop} />
            <Route path="/tab3" component={Tab} />
            
            
            
        
        </div>
        </Router>

    );
}
const Home = () => (
    <div>
        <h1>Home Page</h1>
    </div>
);


export default App;

