import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';
import axios from 'axios';


//import {Link} from 'react-router-dom';

class CreateSO extends Component {
  constructor(props) {

    super(props);

    this.state = {

      fields: {},
      soCreationDate : '',
      errors: {},
      data: [],
      statusDescSOType : [],
      statusDescSOStatus : [],
      
    }
    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
};

handleChange(e) {

  let fields = this.state.fields;

  fields[e.target.name] = e.target.value;

  this.setState({
    fields
 });
}

componentDidMount() {
    console.log("componentDidMount")
    axios.get('http://localhost:8080/fetchStatusType?statusType1=SOType&statusType2=SOStatus')
         .then(response => {
              console.log(response.data)
          this.setState({
            data : response.data
          })    
        })
        axios.get('http://localhost:8080/fetchStatusType?statusType1=SOType&statusType2=SOStatus')
        .then(response => {
             console.log(response.data)
         this.setState({
           data : response.data
         })    
       })

}


submituserRegistrationForm(e) {

  e.preventDefault();

  if (this.validateForm()) {

      let fields = {};

      fields["soType"] = "";
      fields["soStatus"] = "";
      fields["practice"] = "";
      fields["priority"] = "";
      fields["uniqueId"] = "";
      fields["soAgeing"] = "";
      fields["soCreationDate"] = this.state.soCreationDate;
      fields["location"] = "";
      fields["city"] = "";
      fields["rims"] = "";
      fields["tracking"] = "";
      fields["projectType"] = "";
      fields["projectId"] = "";
      fields["projectName"] = "";
      fields["jobLevel"] = "";
      fields["practiceArea"] = "";
      fields["clientLob"] = "";
      fields["fulfillmentPoc"] = "";
      fields["skills"] = "";
      fields["billingDate"] = "";
      fields["blmlsblUpside"] = "";
      fields["leadTime"] = "";
      fields["cp"] = "";
      fields["revenueLoss"] = "";
      fields["riskAmount"] = "";
      fields["dLMapping"] = "";
      fields["elMapping"] = "";
     
      fields["soComments"] = "";

      this.setState({fields:fields});
      {/*console.log(this.state.fields.soType)
      console.log(this.state.fields.soStatus)
      console.log(this.state.fields.practice)
      console.log(this.state.fields.priority)
      console.log(this.state.fields.uniqueId)
      console.log(this.state.fields.soAgeing)
     
      console.log(this.state.soCreationDate)
      console.log(this.state.fields.soLastWorkingDate)
      console.log(this.state.fields.location)
      console.log(this.state.fields.city)
      console.log(this.state.fields.rims)
      console.log(this.state.fields.tracking)
      console.log(this.state.fields.projectType)
      console.log(this.state.fields.projectId)
      console.log(this.state.fields.projectName)
      console.log(this.state.fields.jobLevel)
      console.log(this.state.fields.practiceArea)
      console.log(this.state.fields.clientLob)
      console.log(this.state.fields.fulfillmentPoc)
      console.log(this.state.fields.skills)
      console.log(this.state.fields.billingDate)
      console.log(this.state.fields.blmlsblUpside)
      console.log(this.state.fields.leadTime)
      console.log(this.state.fields.cp)
      console.log(this.state.fields.revenueLoss)
      console.log(this.state.fields.riskAmount)
      console.log(this.state.fields.dLMapping)
      console.log(this.state.fields.elMapping)
      console.log(this.state.fields.soComments)*/}

     let data = {
         soType : this.state.fields.soType,
         soStatus : this.state.fields.soStatus,
         practice : this.state.fields.practice,
         priority : this.state.fields.priority,
         uniqueId : this.state.fields.uniqueId,
         soAgeing : this.state.fields.soAgeing,
         
         soCreationDate : this.state.soCreationDate,
         soLastWorkingDate : this.state.fields.soLastWorkingDate,
         location : this.state.fields.location,
         city : this.state.fields.city,
         rims : this.state.fields.rims,
         tracking : this.state.fields.tracking,
         projectType : this.state.fields.projectType,
         projectId : this.state.fields.projectId,
         projectName : this.state.fields.projectName,
         jobLevel : this.state.fields.jobLevel,
         practiceArea :   this.state.fields.practiceArea,
         clientLob : this.state.fields.clientLob,
         fulfillmentPoc :   this.state.fields.fulfillmentPoc,
         skills : this.state.fields.skills,
         billingDate : this.state.fields.billingDate,
         blmlsblUpside :  this.state.fields.blmlsblUpside,
         leadTime :  this.state.fields.leadTime,
         cp : this.state.fields.cp,
         revenueLoss :  this.state.fields.revenueLoss,
         riskAmount :this.state.fields.riskAmount,
         dlMapping :this.state.fields.dlMapping,
         elMapping :this.state.fields.elMapping,
         soComments: this.state.fields.soComments,
       }
      
    }
     
    
      alert("Form submitted");
    // axios.post('http://localhost:8080/save', data)
    
    
                    
             
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
  if (!fields["practice"]) {

    formIsValid = false;

    errors["practice"] = "*Please enter the practice";

  }
  if (!fields["priority"]) {

    formIsValid = false;

    errors["priority"] = "*Please enter the priority";

  }
  if (!fields["uniqueId"]) {

    formIsValid = false;

    errors["uniqueId"] = "*Please enter the uniqueId";

  }
  if (!fields["soAgeing"]) {

    formIsValid = false;

    errors["soAgeing"] = "*Please enter the soAgeing";

  }
//   if (!fields["soCreationDate"]) {

//     formIsValid = false;

//     errors["soCreationDate"] = "*Please enter the SO Creation Date";

//   }
//   if (!fields["soLastWorkingDate"]) {

//     formIsValid = false;

//     errors["soLastWorkingDate"] = "*Please enter the SO Last Working Date";

//   }
  if (!fields["location"]) {

    formIsValid = false;

    errors["location"] = "*Please enter the location";

  }
  if (!fields["city"]) {

    formIsValid = false;

    errors["city"] = "*Please enter the city";

  }
  if (!fields["rims"]) {

    formIsValid = false;

    errors["rims"] = "*Please enter the rims";

  }
  if (!fields["tracking"]) {

    formIsValid = false;

    errors["tracking"] = "*Please enter the tracking";

  }
  if (!fields["projectType"]) {

    formIsValid = false;

    errors["projectType"] = "*Please enter the projectType";

  }
  if (!fields["projectId"]) {

    formIsValid = false;

    errors["projectId"] = "*Please enter the projectId";

  }
  if (!fields["projectName"]) {

    formIsValid = false;

    errors["projectName"] = "*Please enter the ProjectName";

  }
  if (!fields["jobLevel"]) {

    formIsValid = false;

    errors["jobLevel"] = "*Please enter the jobLevel";

  }
  if (!fields["practiceArea"]) {

    formIsValid = false;

    errors["practiceArea"] = "*Please enter the PracticeArea";

  }
  if (!fields["clientLob"]) {

    formIsValid = false;

    errors["clientLob"] = "*Please enter the Client LOB";

  }
  if (!fields["fulfillmentPoc"]) {

    formIsValid = false;

    errors["fulfillmentPoc"] = "*Please enter the Fulfillment POC";

  }
  if (!fields["skills"]) {

    formIsValid = false;

    errors["skills"] = "*Please enter the skills";

  }
  if (!fields["blmlsblUpside"]) {

    formIsValid = false;

    errors["blmlsblUpside"] = "*Please enter the BL/ML/SBL/Upside";

  }
  if (!fields["leadTime"]) {

    formIsValid = false;

    errors["leadTime"] = "*Please enter the leadTime";

  }
  if (!fields["cp"]) {

    formIsValid = false;

    errors["cp"] = "*Please enter the cp";

  }
  if (!fields["revenueLoss"]) {

    formIsValid = false;

    errors["revenueLoss"] = "*Please enter the Revenue Loss";

  }
  if (!fields["riskAmount"]) {

    formIsValid = false;

    errors["riskAmount"] = "*Please enter the Risk Amount";

  }
  if (!fields["dLMapping"]) {

    formIsValid = false;

    errors["dLMapping"] = "*Please enter the DL Mapping";

  }
  if (!fields["elMapping"]) {

    formIsValid = false;

    errors["elMapping"] = "*Please enter the EL Mapping";

  }
  if (!fields["soComments"]) {

    formIsValid = false;

    errors["soComments"] = "*Please enter the SO Comments";

  }
 
  this.setState({

    errors: errors

  });

  return formIsValid;
}
  
    
    render() {
        console.log("render")
        let data = this.state.data
          let i = 0 
          let j = 0
          data.map(eachData => {
             // console.log("'" +eachData.statusType + "'")
              if(eachData.statusType === 'SOType    ') {
                this.state.statusDescSOType[i++] = eachData.statusDesc
              } else {
                this.state.statusDescSOStatus[j++] = eachData.statusDesc
              }
          }
          )
          console.log(this.state.statusDescSOType)
          console.log(this.state.statusDescSOStatus)
    return(
        <div class="container">
        <div className="App">
        {/* First row first part*/}

        <form id="form1" onSubmit= {this.submituserRegistrationForm}>
            <div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">SO TYPE:</div>
 <div class="col-md-6  col-sm-6">
 <select class="form-control" name="soType" value={this.state.fields.soType} onChange={this.handleChange}> 
 <option value="none" selected="selected"> 
          Select an Option 
      </option> 
    {
    this.state.statusDescSOType.map(eachDesc => <option>{eachDesc}</option>)
    }
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
      {
    this.state.statusDescSOStatus.map(eachDesc => <option>{eachDesc}</option>)
    }
    
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
 <div class="col-md-6  col-sm-6 blue ">Practice:</div>
 <div class="col-md-6  col-sm-6">
 <select class="form-control" name="practice"  value={this.state.fields.practice} onChange={this.handleChange}> 
    
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
    <div className="errorMsg">{this.state.errors.practice}</div> 

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
 <input type="text" class="form-control" name="uniqueId" autocomplete="off" value={this.state.fields.uniqueId} onChange={this.handleChange}> 
  </input>
 <div className="errorMsg">{this.state.errors.uniqueId}</div>
 </div>
 </div>

 

 
 
 </div>
   {/* Third row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">SO Ageing:</div>
   <div class="col-md-6  col-sm-6"  >
   <input type="text" class="form-control" name="soAgeing" autocomplete="off" value={this.state.fields.soAgeing} onChange={this.handleChange}>
   </input>
   <div className="errorMsg">{this.state.errors.soAgeing}</div>

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
    
       
 < DayPickerInput   name="soCreationDate"   onDayChange={day => this.setState({
     soCreationDate:day
 })} />
    

 </div>
 </div>

 

 
 
 </div>
   {/* Fourth row second part*/}

   <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Last Working Date:</div>
   <div class="col-md-6  col-sm-6"  >
  < DayPickerInput name="soLastWorkingDate"  onDayChange={day => console.log(day)} />
   

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
 <select class="form-control" name="location" value={this.state.fields.location} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      <option >OnSite</option>
      <option>OffShore</option>
      <option >NearShore</option>
</select>
<div className="errorMsg">{this.state.errors.location}</div>
</div>
</div>
</div>
   {/* Fifth row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">City:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" name="city" value={this.state.fields.city} onChange={this.handleChange}> 
    
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
    <div className="errorMsg">{this.state.errors.city}</div>
   </div>
   </div>
   </div>
</div>

{/*Sixth row first part */}

<div class="row">
 
 <div class="col-md-6 col-sm-12"  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">Rims:</div>
 <div class="col-md-6  col-sm-6">
 <input type="text" class="form-control" name="rims" autocomplete="off" value={this.state.fields.rims} onChange={this.handleChange}>

 </input>
 <div className="errorMsg">{this.state.errors.rims}</div>
 </div>
 </div>

 

 
 
 </div>
   {/* Sixth row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Tracking:</div>
   <div class="col-md-6  col-sm-6"  >
   <input type="text" class="form-control" name="tracking" autocomplete="off" value={this.state.fields.tracking} onChange={this.handleChange}>

   </input>
   
   <div className="errorMsg">{this.state.errors.tracking}</div>
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
 <select class="form-control" name="projectType" value={this.state.fields.projectType} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      <option >BFD</option>
      <option>BTM</option>
      <option>NBL</option>
</select>
<div className="errorMsg">{this.state.errors.projectType}</div>
</div>
</div>
</div>
  {/* 7th row second part*/}
 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Project ID:</div>
   <div class="col-mdm-6  col-sm-6"  >
   <select class="form-control" name="projectId" value={this.state.fields.projectId} onChange={this.handleChange}> 
    
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
    <div className="errorMsg">{this.state.errors.projectId}</div>
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
 <select class="form-control" name="projectName" value={this.state.fields.projectName} onChange={this.handleChange}> 
    
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
    <div className="errorMsg">{this.state.errors.projectName}</div>

 </div>
 </div>

 

 
 
 </div>
   {/* 8th row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Job Level:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" name="jobLevel" value={this.state.fields.jobLevel} onChange={this.handleChange}> 
    
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
    <div className="errorMsg">{this.state.errors.jobLevel}</div>
   </div>
   </div>
   </div>
</div>
          {/*9th row first PART */}
          <div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">Practice Area:</div>
 <div class="col-md-6  col-sm-6">
 <select class="form-control" name="practiceArea" value={this.state.fields.practiceArea} onChange={this.handleChange}>
    
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
<div className="errorMsg">{this.state.errors.practiceArea}</div>
</div>
</div>
</div>
   {/* 9th row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Client LOB:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" name="clientLob" value={this.state.fields.clientLob} onChange={this.handleChange}> 
    
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
<div className="errorMsg">{this.state.errors.clientLob}</div>

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
 <select class="form-control" name="fulfillmentPoc" value={this.state.fields.fulfillmentPoc} onChange={this.handleChange}> 
    
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
<div className="errorMsg">{this.state.errors.fulfillmentPoc}</div>
</div>
</div>
</div>
   {/* 10th row second part*/}

   <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Skills:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" name="skills" value={this.state.fields.skills} onChange={this.handleChange}> 
    
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
<div className="errorMsg">{this.state.errors.skills}</div>
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
    
</div>

</div>
</div>
   {/* 11th row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">BL/ML/SBL /Upside:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" name="blmlsblUpside" value={this.state.fields.blmlsblUpside} onChange={this.handleChange}> 
    
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
       <div className="errorMsg">{this.state.errors.blmlsblUpside}</div>
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
 <input type="text" class="form-control" name="leadTime" autocomplete="off" value={this.state.fields.leadTime} onChange={this.handleChange}>

 </input>
 <div className="errorMsg">{this.state.errors.leadTime}</div>
</div>
</div>
</div>
   {/* 12th row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">CP:</div>
   <div class="col-md-6  col-sm-6"  >
   <input type="text" class="form-control" name="cp" autocomplete="off" value={this.state.fields.cp} onChange={this.handleChange}>
     </input>
   
   <div className="errorMsg">{this.state.errors.cp}</div>
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
 <input type="text" class="form-control" name="revenueLoss" autocomplete="off" placeholder="In $" value={this.state.fields.revenueLoss} onChange={this.handleChange}>

 </input>
 <div className="errorMsg">{this.state.errors.revenueLoss}</div>
</div>
</div>
</div>
   {/* 13th row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Risk Amount:</div>
   <div class="col-md-6  col-sm-6"  >
   
   <input type="text " class="form-control" name="riskAmount" autocomplete="off" value={this.state.fields.riskAmount} onChange={this.handleChange} placeholder="In $"></input>
   <div className="errorMsg">{this.state.errors.riskAmount}</div>
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
 <select class="form-control" name="dLMapping" value={this.state.fields.dLMapping} onChange={this.handleChange}> 
    
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
      <div className="errorMsg">{this.state.errors.dLMapping}</div>
</div>
</div>
</div>
  {/* 14th row second part*/}
 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">EL Mapping:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" name="elMapping" value={this.state.fields.elMapping} onChange={this.handleChange}> 
    
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
    <div className="errorMsg">{this.state.errors.elMapping}</div>
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
  
  <textarea class="form-control" name="soComments" rows="5" value={this.state.fields.soComments} onChange={this.handleChange}>
    
  </textarea>
  <div className="errorMsg">{this.state.errors.soComments}</div>
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
