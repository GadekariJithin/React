import React, {Component} from 'react';
import './App.css';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';  


class App extends React.Component
{
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("Submitted Sccessfully " + this.state.username);
  }
  render() {
    const data = [{  
      
       }]  
   const columns = [{  
     Header: 'SOType',  
     //accessor: 'sotype'  
     },{  
     Header: 'SOPriority',  
     //accessor: 'sopriority'  
     },{
       Header:'SOStatus',
       //accessor:'sostatus'
     },{
        Header:'Practice',
        //accessor:'practice'
     },{
        Header:'Location',
       // accessor:'location'
     
     }]  
   var myStyle = {
         fontSize: 75,
        
         color: 'violet'
      }
  return (
    <div className="App">
 
    
    
      <form onSubmit={this.mySubmitHandler}>

      <p>Enter SOType:</p>
        <input
          type="text"
        />
        <br/>
        <br/>
        <input
        type='submit'
        value="submit"
      />
      </form>
      <div>  
              <ReactTable  
                  data={data}  
                  columns={columns}  
                  //defaultPageSize = {1}  
                  pageSizeOptions = {[2,4,6]}  
              />  
          </div>        
    </div>
  );
}

}

export default App;
