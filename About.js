import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
function About() {

    return(
        <div class="container">
        <div className="App">
        {/* First row first part*/}
            <div class="row">
 
 <div class="col-lg-6 col-sm-6 "  >
 <div class="row">
 <div class="col-lg-6  col-sm-4 blue left">SO TYPE:</div>
 <div class="col-lg-6  col-sm-6">
 <select class="form-control" id="sotype" >
    
    <option value="none" selected disabled hidden> 
          Select an Option 
      </option> 
      <option >CANCEL-TSC PEND</option>
      <option>Cancelled-Client</option>
      <option >Cancelled-Internal</option>
      <option>Fulfilled</option>
      <option >Internal - TXN SO</option>
      <option>Need to Cancel SO</option>
      <option >New</option>
      <option>Replacement</option>
      <option >Rotation</option>
      <option>Synovus- Cancelled</option>
    
    </select>
    

 </div>
 </div>


 

 
 
 </div>
  {/* First row second part*/}
 <div class="col-lg-6 col-sm-6">
   <div class="row">
   <div class="col-lg-4  col-sm-4 blue">SO Status:</div>
   <div class="col-lg-6  col-sm-6"  >
   <select class="form-control" id="sostatus" >
    
    <option value="none" selected disabled hidden> 
          Select an Option 
      </option> 
      <option >Ally-Evaluation</option>
      <option>Contractor Rebadging</option>
      <option >Fulfilled</option>
      <option>Onboarded</option>
      <option >Onboarding</option>
      <option>Open-Internal</option>
      <option >Profile - In Progress</option>
      <option>Profile Identified</option>
      <option >Profile Not Identified</option>
    
    </select>

   </div>
   </div>
   </div>
</div>


{/* Second row first part */}




           <div class="row">
 
 <div class="col-lg-6 col-sm-6 "  >
 <div class="row">
 <div class="col-lg-6  col-sm-4 blue left">Practise:</div>
 <div class="col-lg-6  col-sm-6">
 <select class="form-control" id="Practise:" >
    
    <option value="none" selected disabled hidden> 
          Select an Option 
      </option> 
      <option >ADM</option>
      <option>ADM-ISmo Pool</option>
      <option >AIM-TSG</option>
      <option>AVM Core</option>
      <option >AVM-AIA</option>
      <option>AVM-EAS-OSP</option>
      <option >BFS</option>
      <option>BPS Core Pool</option>
      <option >CDB Interactive</option>
      <option>CDB-AIA</option>
      <option >CDE</option>
      <option>CDE-BFS</option>
      <option >CIS</option>
      <option>Cognizant Security</option>
      <option >Delivery Excellence Pool</option>
      <option>EAS Analytics Pool</option>
      <option >EAS DCX</option>
      <option>EAS IPM</option>
      <option >EAS Oracle</option>
      <option>EAS Sales Force</option>
      <option >EAS SAP Pool</option>
      <option>EAS Testing CRM Pool</option>
      <option>Intelligent AutoTech Dep Pool</option>  
      <option>Performance Testing CoE Pool</option>
      <option>QE&A</option>
    
    </select>
    

 </div>
 </div>


 

 
 
 </div>
   {/* Second row second part*/}

 <div class="col-lg-6 col-sm-6">
   <div class="row">
   <div class="col-lg-4  col-sm-4 blue">vjgdulyfkdyghhg</div>
   <div class="col-lg-6  col-sm-6"  >
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
</div>

<div>
      <Link to='/Shop'>
      <button type="button" className="btn btn-info">Next</button>
      </Link>
      </div>

        </div>
        </div>
        
       
    );
}


export default About;
