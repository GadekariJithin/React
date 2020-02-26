import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return(
        <div className="App">
            <div class="row">
 
 <div class="col-lg-6">
 <div class="row">
 <div class="col-lg-4">SOTYPE:</div>
 <div class="col-lg-8">
 <select class="form-control" id="sotype" >
    
    <option value="none" selected disabled hidden> 
          Select an Option 
      </option> 
      <option >Cancelled</option>
      <option>Fulfilled</option>
    
    </select>

 </div>
 </div>
 </div>

 <div class="col-lg-6">
   <div class="row">
   <div class="col-lg-4">name</div>
   <div class="col-lg-8">field</div>
   </div>
   </div>
</div>

        </div>
    );
}


export default About;
