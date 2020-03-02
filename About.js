import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';

//import {Link} from 'react-router-dom';

class CreateSO extends Component {
  constructor() {

    super();

    this.state = {

      fields: {},

      errors: {}

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
};

handleChange(e) {

  let fields = this.state.fields;

  fields[e.target.name] = e.target.value;

  this.setState({
    fields
 });
}

handleSubmit(e) {

  e.preventDefault();

  if (this.validateForm()) {

      let fields = {};

      fields["soType"] = "";
      fields["soStatus"] = "";
      fields["Practise"] = "";
      fields["priority"] = "";
      fields["Unique_id"] = "";
      fields["SO_Ageing"] = "";
      fields["Location"] = "";
      fields["City"] = "";
      fields["RIMS"] = "";
      fields["Tracking"] = "";
      fields["Project_type"] = "";
      fields["Project_ID"] = "";
      fields["ProjectName_Ally"] = "";
      fields["Job_Level"] = "";
      fields["Practise_Area"] = "";
      fields["Client_LOB"] = "";
      fields["Fulfillment_POC"] = "";
      fields["Skills"] = "";
      fields["BLMLSBLUpside"] = "";
      fields["Lead_Time"] = "";
      fields["CP"] = "";
      fields["Revenue_Loss"] = "";
      fields["Risk_Amount"] = "";
      fields["DL_Mapping"] = "";
      fields["EL_Mapping"] = "";
     
      fields["SO_Comments"] = "";

      this.setState({fields:fields});
      console.log(this.state.fields.soType)
      console.log(this.state.fields.soStatus)
      console.log(this.state.fields.Practise)
      console.log(this.state.fields.priority)
      console.log(this.state.fields.Unique_id)
      console.log(this.state.fields.SO_Ageing)
      console.log(this.state.fields.City)
      console.log(this.state.fields.RIMS)
      console.log(this.state.fields.Tracking)
      console.log(this.state.fields.Project_type)
      console.log(this.state.fields.Project_ID)
      console.log(this.state.fields.ProjectName_Ally)
      console.log(this.state.fields.Job_Level)
      console.log(this.state.fields.Practise_Area)
      console.log(this.state.fields.Client_LOB)
      console.log(this.state.fields.Fulfillment_POC)
      console.log(this.state.fields.Skills)
      console.log(this.state.fields.bl_value)
      console.log(this.state.fields.Lead_Time)
      console.log(this.state.fields.CP)
      console.log(this.state.fields.Revenue_Loss)
      console.log(this.state.fields.Risk_Amount)
      console.log(this.state.fields.DL_Mapping)
      console.log(this.state.fields.EL_Mapping)
      console.log(this.state.fields.SO_Comments)

     
      alert("Form submitted");
}
}

validateForm() {

 

  let fields = this.state.fields;

  let errors = {};

  let formIsValid = true;

  if (!fields["soType"]) {

    formIsValid = false;

    errors["soType"] = "*Please enter the SO Type";

  }
  if (!fields["soStatus"]) {

    formIsValid = false;

    errors["soStatus"] = "*Please enter the SO Status";

  }
  if (!fields["Practise"]) {

    formIsValid = false;

    errors["Practise"] = "*Please enter the Practise";

  }
  if (!fields["priority"]) {

    formIsValid = false;

    errors["priority"] = "*Please enter the priority";

  }
  if (!fields["Unique_id"]) {

    formIsValid = false;

    errors["Unique_id"] = "*Please enter the Unique_id";

  }
  if (!fields["SO_Ageing"]) {

    formIsValid = false;

    errors["SO_Ageing"] = "*Please enter the SO_Ageing";

  }
  if (!fields["Location"]) {

    formIsValid = false;

    errors["Location"] = "*Please enter the Location";

  }
  if (!fields["City"]) {

    formIsValid = false;

    errors["City"] = "*Please enter the City";

  }
  if (!fields["RIMS"]) {

    formIsValid = false;

    errors["RIMS"] = "*Please enter the RIMS";

  }
  if (!fields["Tracking"]) {

    formIsValid = false;

    errors["Tracking"] = "*Please enter the Tracking";

  }
  if (!fields["Project_type"]) {

    formIsValid = false;

    errors["Project_type"] = "*Please enter the Project_type";

  }
  if (!fields["Project_ID"]) {

    formIsValid = false;

    errors["Project_ID"] = "*Please enter the Project_ID";

  }
  if (!fields["ProjectName_Ally"]) {

    formIsValid = false;

    errors["ProjectName_Ally"] = "*Please enter the ProjectName";

  }
  if (!fields["Job_Level"]) {

    formIsValid = false;

    errors["Job_Level"] = "*Please enter the Job_Level";

  }
  if (!fields["Practise_Area"]) {

    formIsValid = false;

    errors["Practise_Area"] = "*Please enter the PractiseArea";

  }
  if (!fields["Client_LOB"]) {

    formIsValid = false;

    errors["Client_LOB"] = "*Please enter the Client LOB";

  }
  if (!fields["Fulfillment_POC"]) {

    formIsValid = false;

    errors["Fulfillment_POC"] = "*Please enter the Fulfillment POC";

  }
  if (!fields["Skills"]) {

    formIsValid = false;

    errors["Skills"] = "*Please enter the Skills";

  }
  if (!fields["bl_value"]) {

    formIsValid = false;

    errors["bl_value"] = "*Please enter the BL/ML/SBL/Upside";

  }
  if (!fields["Lead_Time"]) {

    formIsValid = false;

    errors["Lead_Time"] = "*Please enter the Lead_Time";

  }
  if (!fields["CP"]) {

    formIsValid = false;

    errors["CP"] = "*Please enter the CP";

  }
  if (!fields["Revenue_Loss"]) {

    formIsValid = false;

    errors["Revenue_Loss"] = "*Please enter the Revenue Loss";

  }
  if (!fields["Risk_Amount"]) {

    formIsValid = false;

    errors["Risk_Amount"] = "*Please enter the Risk Amount";

  }
  if (!fields["DL_Mapping"]) {

    formIsValid = false;

    errors["DL_Mapping"] = "*Please enter the DL Mapping";

  }
  if (!fields["EL_Mapping"]) {

    formIsValid = false;

    errors["EL_Mapping"] = "*Please enter the EL Mapping";

  }
  if (!fields["SO_Comments"]) {

    formIsValid = false;

    errors["SO_Comments"] = "*Please enter the SO Comments";

  }
 
  this.setState({

    errors: errors

  });

  return formIsValid;
}
  
    
    render() {
 
    return(
        <div class="container">
        <div className="App">
        {/* First row first part*/}

        <form  method="post" id="form1" onSubmit= {this.handleSubmit}>
            <div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">SO TYPE:</div>
 <div class="col-md-6  col-sm-6">
 <select class="form-control" name="soType" value={this.state.fields.soType} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
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
    
   <div className="errorMsg">{this.state.errors.soType}</div>
    

 </div>
 </div>
 

 

 
 
 </div>
  {/* First row second part*/}
  
 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">SO Status:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" name="soStatus" value={this.state.fields.soStatus} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
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
    <div className="errorMsg">{this.state.errors.soStatus}</div>
   </div>
   </div>
   </div>
</div>

{/* Second row first part */}

           <div class="row">
 
 <div class="col-md-6 col-sm-12"  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">Practise:</div>
 <div class="col-md-6  col-sm-6">
 <select class="form-control" name="Practise"  value={this.state.fields.Practise} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
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
    <div className="errorMsg">{this.state.errors.Practise}</div> 

 </div>
 </div>

 

 
 
 </div>
   {/* Second row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Priority:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" name="priority" value={this.state.fields.priority} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      <option >Critical</option>
      <option>High</option>
      <option >Medium</option>
      <option>Low</option>
    
    </select>
    <div className="errorMsg">{this.state.errors.priority}</div>
   </div>
   </div>
   </div>
</div>
          {/*Third row first PART */}
          <div class="row">
 
 <div class="col-md-6 col-sm-12">
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">Unique Id:</div>
 <div class="col-md-6  col-sm-6">
 <input type="text"   class="form-control" name="Unique_id" autocomplete="off" value={this.state.fields.Unique_id} onChange={this.handleChange}> 
  </input>
 <div className="errorMsg">{this.state.errors.Unique_id}</div>
 </div>
 </div>

 

 
 
 </div>
   {/* Third row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">SO Ageing:</div>
   <div class="col-md-6  col-sm-6"  >
   <input type="text"  class="form-control" name="SO_Ageing" autocomplete="off" value={this.state.fields.SO_Ageing} onChange={this.handleChange}>
   </input>
   <div className="errorMsg">{this.state.errors.SO_Ageing}</div>

   </div>
   </div>
   </div>
</div>
{/* Fourth row first part*/ }

           <div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">So Creation Date:</div>
 <div class="col-md-6  col-sm-6 ">
    
       
 < DayPickerInput onDayChange={day => console.log(day)} />
    

 </div>
 </div>

 

 
 
 </div>
   {/* Fourth row second part*/}

   <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Last Working Date:</div>
   <div class="col-md-6  col-sm-6"  >
  < DayPickerInput onDayChange={day => console.log(day)} />
   

   </div>
   </div>
   </div>
</div>
{/* Fifth row first part*/}

<div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">Location:</div>
 <div class="col-md-6  col-sm-6">
 <select class="form-control" name="Location" value={this.state.fields.Location} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      <option >OnSite</option>
      <option>OffShore</option>
      <option >NearShore</option>
</select>
<div className="errorMsg">{this.state.errors.Location}</div>
</div>
</div>
</div>
   {/* Fifth row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">City:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" name="City" value={this.state.fields.City} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      <option >Bangalore</option>
      <option>Buenos Aires</option>
      <option >Charlotte</option>
      <option>Chennai</option>
      <option >Coimbatore</option>
      <option>Columbus</option>
      <option >Fort Washington</option>
      <option>Troy</option>
    
    </select>
    <div className="errorMsg">{this.state.errors.City}</div>
   </div>
   </div>
   </div>
</div>

{/*Sixth row first part */}

<div class="row">
 
 <div class="col-md-6 col-sm-12"  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">RIMS:</div>
 <div class="col-md-6  col-sm-6">
 <input type="text" class="form-control" name="RIMS" autocomplete="off" value={this.state.fields.RIMS} onChange={this.handleChange}>

 </input>
 <div className="errorMsg">{this.state.errors.RIMS}</div>
 </div>
 </div>

 

 
 
 </div>
   {/* Sixth row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Tracking:</div>
   <div class="col-md-6  col-sm-6"  >
   <input type="text" class="form-control" name="Tracking" autocomplete="off" value={this.state.fields.Tracking} onChange={this.handleChange}>

   </input>
   
   <div className="errorMsg">{this.state.errors.Tracking}</div>
   </div>
   </div>
   </div>
   

</div>
{/*7th row first part */}

<div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">Project TYPE:</div>
 <div class="col-md-6  col-sm-6">
 <select class="form-control" name="Project_type" value={this.state.fields.Project_type} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      <option >BFD</option>
      <option>BTM</option>
      <option>NBL</option>
</select>
<div className="errorMsg">{this.state.errors.Project_type}</div>
</div>
</div>
</div>
  {/* 7th row second part*/}
 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Project ID:</div>
   <div class="col-mdm-6  col-sm-6"  >
   <select class="form-control" name="Project_ID" value={this.state.fields.Project_ID} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      <option >1000080433</option>
      <option>1000082914</option>
      <option >1000100287</option>
      <option>1000102994</option>
      <option >1000121902</option>
      <option>1000123341</option>
      <option >1000123764</option>
      <option>1000129569</option>
      <option >1000200202</option>
      <option>1000220927</option>
      <option >1000250428</option>
      <option>1000251122</option>
      <option >1000258000</option>
      <option>1000261979</option>
      <option >1000267556</option>
      <option>1000279013</option>
      <option >1000279696</option>
    
    
    </select>
    <div className="errorMsg">{this.state.errors.Project_ID}</div>
   </div>
   </div>
   </div>
</div>

{/* 8th row first part */}

           <div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">ProjectName - Ally</div>
 <div class="col-md-6  col-sm-6">
 <select class="form-control" name="ProjectName_Ally" value={this.state.fields.ProjectName_Ally} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      <option >Ally - CA L1 L2 & L3 Services</option>
      <option>Ally - Pipeline</option>
      <option >Ally ? Auto Advantage</option>
      <option>Ally DFS Sustain</option>
      <option >Ally Fi-Ally Bank Performance</option>
      <option>Ally GDC - Deposit Operations</option>
      <option >Ally GDC - DFS</option>
      <option>Ally GDC - Digital 3.0</option>
      <option >Ally GDC - EP Delivery</option>
      <option>Ally GDC - IAM Level1 Supprt</option>
      <option >Ally GDC - RPA CoE</option>
      <option>Ally GDC - TI Corp & EA</option>
      <option >Ally GDC Bank Testing</option>
      <option>Ally GDC-Bank & IPRM</option>
      <option >Ally GDC-Bank Sustain Services</option>
      <option>Ally NBL Management</option>
      <option >Ally SAP Migration</option>
    
    </select>
    <div className="errorMsg">{this.state.errors.ProjectName_Ally}</div>

 </div>
 </div>

 

 
 
 </div>
   {/* 8th row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Job Level:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" name="Job_Level" value={this.state.fields.Job_Level} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      <option >Architect-Technology</option>
      <option>Assoc. Director-Projects</option>
      <option >Associate-CS</option>
      <option>Associate - Projects</option>
      <option >Business Associate</option>
      <option>Infra Dev Specialist</option>
      <option >Infra Developer</option>
      <option>Lead Infra. Architect</option>
      <option >Manager - Projects</option>
      <option>Principal Architect (TCG Lead)</option>
      <option >Process Specialist - Data</option>
      <option>Program Manager</option>
      <option >Programmer Analyst</option>
      <option>Programmer Analyst Trainee</option>
      <option >Programmer Trainee</option>
      <option>Senior Associate</option>
      <option >Senior Engineer Full Stack</option>

      <option>Senior Systems Executive</option>
      <option >Sr. Architect (COE Lead)</option>
      <option>Sr. Associate</option>
      <option >Sr. Associate - Projects</option>
      <option>Sr. Infra Developer</option>
      <option >Sr. Manager - Projects</option>
      <option>Technology Lead</option>
      <option >Technology Specialist</option>
    
    </select>
    <div className="errorMsg">{this.state.errors.Job_Level}</div>
   </div>
   </div>
   </div>
</div>
          {/*9th row first PART */}
          <div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">Practise Area:</div>
 <div class="col-md-6  col-sm-6">
 <select class="form-control" name="Practise_Area" value={this.state.fields.Practise_Area} onChange={this.handleChange}>
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      <option >ADM</option>
      <option>CDB</option>
      <option >CDE</option>
      <option>CIS</option>
      <option >EAS</option>
      <option>AQ</option>
</select>
<div className="errorMsg">{this.state.errors.Practise_Area}</div>
</div>
</div>
</div>
   {/* 9th row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Client LOB:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" name="Client_LOB" value={this.state.fields.Client_LOB} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      <option >Auto Advantage</option>
      <option>Consumer and Commercial Banking Technology</option>
      <option >Dealer Financial Services - Technology</option>
      <option>Deposit Operations</option>
      <option >Digital Channel Technology</option>
      <option>Engineering and Operations</option>
      <option>Enterprise Technology</option>
      <option >Information Protection and Risk Managemen</option>
      <option>Not Applicable</option>
</select>
<div className="errorMsg">{this.state.errors.Client_LOB}</div>

   </div>
   </div>
   </div>
</div>
{/* 10th row first part*/ }

           <div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">Fulfillment POC:</div>
 <div class="col-md-6  col-sm-6">
 <select class="form-control" name="Fulfillment_POC" value={this.state.fields.Fulfillment_POC} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      <option >Ashok Panduranga</option>
      <option>Balaji / Tim</option>
      <option >Cheran / Vimal</option>
      <option>Debendra</option>
      <option >Dinakar</option>
      <option>Girish Muthukumar</option>
      <option>Irshad / Sri Ramm</option>
      <option >Judie / Karthik Ganesan</option>
      <option>Karthik / Harish</option>
    <option >Keerthi</option>
      <option>Murali</option>
      <option >Navaneeth</option>
      <option>Prakasham</option>
      <option >Pratheek Gupa / Hari</option>
      <option>Raghavan / Arun</option>
      <option>Sandip / Venkat</option>
      <option >Shyamalee / Manny</option>
      <option>Tim</option>
      <option >Vimal</option>
      <option>Voorapan Krishnan / Karthik Kumar</option>
</select>
<div className="errorMsg">{this.state.errors.Fulfillment_POC}</div>
</div>
</div>
</div>
   {/* 10th row second part*/}

   <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Skills:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" name="Skills" value={this.state.fields.Skills} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      <option >Caliber,Requirements Gathering and Elicitation</option>
      <option>Sustain Management</option>
      <option >Technical Manager</option>
      <option>Project</option>
      <option >Program </option>
      <option>Engagement</option>
      <option>Delivery </option>
      <option >CRM, IVR, AML, SharePoint etc.</option>
      <option>Java</option>
    <option >.NET</option>
      <option>Oracle PL SQL </option>
      <option >Tech Project Management</option>
      <option>Tech Writing</option>
      <option >Middleware technologies - Weblogic </option>
      <option>SOA</option>
      <option>MQ</option>
      <option >ICAN</option>
      <option>SRE</option>
      <option >SecureTransport</option>
      <option>Webservice SME </option>
      <option>Seebeyond</option>
      <option>Datastage</option>
      <option>Cognos</option>
      <option>SAS</option>
      <option >BO </option>
      <option>Oracele-OAE</option>
      <option>OSB</option>
      <option >ESB</option>
      <option>OBI</option>
      <option>.NET</option>
      <option>Jboss Fuse, WSO2,  UI-UX, Mobility - Kony</option>
      <option >Native(IOS/Andriod/Windows), DBA</option>
      <option>Security Services - CA</option>
      <option >Liberman</option>
      <option>Sailpoint</option>
      <option>EFT</option>
      <option >RSA</option>
      <option>Archer</option>
      <option >OpenPages</option>
      <option>Pega</option>
      <option>MDM</option>
      <option>Data Modeler, Filenet</option>
      <option >Enterprise Application Services - SharePoint,Telephony, IVR</option>
      <option>Adobe</option>
      <option >Open Span</option>
      <option>Exa Logic, SAP Basis</option>
      <option>ABAP</option>
      <option>BW, DevOps</option>
      <option>SAP Functional Lead</option>
      <option>CA Clarity</option>
      <option >ServiceNow, Security  Lead</option>
      <option>Cloud</option>
      <option>CRM, Oracle Fusion, Salesforce, Tealeaf, Integration Architect</option>
      <option >Architecture (J2EE / .NET / SOA/MDM/Networking/Firewall Administration)</option>
      <option>Enterprise</option>
      <option>Data</option>
      <option>UI-UX</option>
      <option >SharePoint</option>
      <option>MDM</option>
      <option >CRM - Architects</option>
      <option>L1 support</option>
      <option>Sustain Operations, ITIL certified</option>
      <option >SCOM</option>
      <option>Foglight</option>
      <option >FileNET</option>
      <option>NetBackup SME</option>
      <option>Unix</option>
      <option>Storage</option>
      <option>Network</option>
      <option>Middleware</option>
      <option>Identity Management, Network Analysts</option>
      <option>WLST scripting;JMS configuration;Deployment automation;ANT;Unix shell scripting;Python;Keystore</option>
      <option>Functional Testing,Manual Testing,Test Planning,Test Strategy,HP Quality Center,Test Execution</option>
      <option>Load Runner,QTP,Selenium,QC,Basel II,Data Warehouse,Cognos,Extensive SQL Experience,Agile</option>
      <option>Pega, Mobile,Test Tool Admin, Mysis Loan IQ</option>
      <option >Agile methodology</option>
      <option>Temenos</option>
      <option>MySis Loan IQ </option>
      <option >Actimize</option>
      <option>SAS</option>
      <option >FICO</option>
      <option>Program Management</option>
      <option >Strategic Business Consulting</option>
      <option>Skill Not Listed</option>
</select>
<div className="errorMsg">{this.state.errors.Skills}</div>
</div>
</div>
</div>
</div>
{/* 11th row first part*/}
<div class="row">
 
 <div class="col-md-6 col-sm-12"  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">Billing Start Date/Joining:</div>
 <div class="col-md-6  col-sm-6">
     < DayPickerInput onDayChange={day => console.log(day)} />
     <div className="errorMsg">{this.state.errors.bl_value}</div>
</div>

</div>
</div>
   {/* 11th row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">BL/ML/SBL /Upside:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" name="bl_value" value={this.state.fields.bl_value} onChange={this.handleChange}> 
    
    <option value="none" 
    selected="selected"> Select an Option 
      </option> 
      <option >BL</option>
      <option>Most Likely</option>
      <option >NA</option>
      <option>SBL</option>
      <option >U</option>
      <option>Upside-New</option>
      <option >Upside-Replacement</option>
       </select>
       <div className="errorMsg">{this.state.errors.bl_value}</div>
       </div>
    </div>
   </div>
</div>

{/*12th row first part */}

<div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">Lead Time:</div>
 <div class="col-md-6  col-sm-6">
 <input type="text" class="form-control" name="Lead_Time" autocomplete="off" value={this.state.fields.Lead_Time} onChange={this.handleChange}>

 </input>
 <div className="errorMsg">{this.state.errors.Lead_Time}</div>
</div>
</div>
</div>
   {/* 12th row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">CP:</div>
   <div class="col-md-6  col-sm-6"  >
   <input type="text" class="form-control" name="CP" autocomplete="off" value={this.state.fields.CP} onChange={this.handleChange}>
     </input>
   
   <div className="errorMsg">{this.state.errors.CP}</div>
   </div>
   </div>
   </div>
</div>
{/*13th  row first part */}
<div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">Revenue Loss:</div>
 <div class="col-md-6  col-sm-6">
 <input type="text" class="form-control" name="Revenue_Loss" autocomplete="off" placeholder="In $" value={this.state.fields.Revenue_Loss} onChange={this.handleChange}>

 </input>
 <div className="errorMsg">{this.state.errors.Revenue_Loss}</div>
</div>
</div>
</div>
   {/* 13th row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Risk Amount:</div>
   <div class="col-md-6  col-sm-6"  >
   
   <input type="text " class="form-control" name="Risk_Amount" autocomplete="off" value={this.state.fields.Risk_Amount} onChange={this.handleChange} placeholder="In $"></input>
   <div className="errorMsg">{this.state.errors.Risk_Amount}</div>
       </div>
    </div>
   </div>
</div>
  {/* 14th row first part*/}
  <div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">DL Mapping:</div>
 <div class="col-md-6  col-sm-6">
 <select class="form-control" name="DL_Mapping" value={this.state.fields.DL_Mapping} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      <option >Arun</option>
      <option>Arun Karunakaran</option>
      <option >Arunachalam Lakshman</option>
      <option>Ashok Panduranga</option>
      <option >Balaji Sambamoorthy</option>
      <option>Balamurali </option>
      <option>Balamurali Santhanakumar </option>
      <option >Digendra</option>
      <option>Dinakar</option>
    <option >Divakar</option>
      <option>Divakar/ Ashokakumar</option>
      <option >Judie</option>
      <option>Kamaljit</option>
      <option >Keerthivasan Rajamani</option>
      <option>Kumar Karthik</option>
      <option>M S Venkata Ramu</option>
      <option >ICAN</option>
      <option>SRE</option>
      <option >SecureTransport</option>
      <option>Webservice SME </option>
      <option>Seebeyond</option>
      <option>Datastage</option>
      </select>
      <div className="errorMsg">{this.state.errors.DL_Mapping}</div>
</div>
</div>
</div>
  {/* 14th row second part*/}
 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">EL Mapping:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" name="EL_Mapping" value={this.state.fields.EL_Mapping} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      <option >1000080433</option>
      <option>1000082914</option>
      <option >1000100287</option>
      <option>1000102994</option>
      <option >1000121902</option>
      <option>1000123341</option>
      <option >1000123764</option>
      <option>1000129569</option>
      <option >1000200202</option>
      <option>1000220927</option>
      <option >1000250428</option>
      <option>1000251122</option>
      <option >1000258000</option>
      <option>1000261979</option>
      <option >1000267556</option>
      <option>1000279013</option>
      <option >1000279696</option>
    
    
    </select>
    <div className="errorMsg">{this.state.errors.EL_Mapping}</div>
   </div>
   </div>
   </div>
   </div>

{/*15th row first part */}
<div class="row">
 
 <div class="col-lg-12 col-sm-12"  >
 <div class="row">
 <div class="col-lg-3  col-sm-6 col-md-3 blue ">SO Comments:</div>
 <div class="col-lg-9 col-sm-6 col-md-9">
 <div class="form-group">
  
  <textarea class="form-control" name="SO_Comments" rows="5" value={this.state.fields.SO_Comments} onChange={this.handleChange}>
    
  </textarea>
  <div className="errorMsg">{this.state.errors.SO_Comments}</div>
</div>

 </div>
 </div>

 

 
 
 </div>
 </div>
 

 

 <div class="col-md-4 text-center"> 
    <button id="singlebutton" name="singlebutton" class="btn btn-success"  >Submit</button> 
   
</div> 

 </form>

      </div>
      </div>
     
        
        
       
    );
    }
}

export default CreateSO;


