import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class ManageSO extends Component {


  
    
  render() {

  return(
      <div class="container">
      <div className="App1">
      {/* First row first part*/}
          <div class="row">

<div class="col-md-6 col-sm-12 "  >
<div class="row">
<div class="col-md-6  col-sm-6 blue ">SO TYPE:</div>
<div class="col-md-6  col-sm-6">
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
<div class="col-md-6 col-sm-12">
 <div class="row">
 <div class="col-md-6  col-sm-6 blue">SO Status:</div>
 <div class="col-md-6  col-sm-6"  >
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
<div class = "submit">
<button type="submit">Submit</button>
</div>
</div>
</div>
);
}
}
export default ManageSO ;
