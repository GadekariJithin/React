import React from 'react';
import Nav from './Nav';
import Header from './Header';
import CreateSO from './Create SO';
import ManageSO from './ManageSO';
import Tab from './Tab';


import './App.css';
import {BrowserRouter as Router, Switch,Route} from  'react-router-dom';



function App() {
    return(
        
        <div className="App">

          <Header/>
            <Nav/>
                       
          {/*}  <Route path="/" exact component={CreateSO} />
            <Route path="/CreateSO" component={CreateSO} />
            <Route path="/ManageSO" component={ManageSO} />
    <Route path="/tab3" component={Tab} />  */}
            
            
            
        
        </div>
        

    );
}
const Home = () => (
    <div>
        <h1>Home Page</h1>
    </div>
);


export default App;
