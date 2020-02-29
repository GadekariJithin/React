import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//import DayPickerInput from './react-day-picker/DayPickerInput';


//import 'react-day-picker/lib/style.css';

//import {Link} from 'react-router-dom';


class CreateSO extends Component {


  
    
    render() {
 
    return(
        <div class="container">
        <div className="App">
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


{/* Second row first part */}




           <div class="row">
 
 <div class="col-md-6 col-sm-12"  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">Practise:</div>
 <div class="col-md-6  col-sm-6">
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

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Priority:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" id="sotype" >
    
    <option value="none" selected disabled hidden> 
          Select an Option 
      </option> 
      <option >Critical</option>
      <option>High</option>
      <option >Medium</option>
      <option>Low</option>
    
    </select>

   </div>
   </div>
   </div>
</div>
          {/*Third row first PART */}
          <div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">Unique Id:</div>
 <div class="col-md-6  col-sm-6">
 <input type="Unique Id" class="form-control" id="Unique Id"></input>

 </div>
 </div>


 

 
 
 </div>
   {/* Third row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">SO Ageing:</div>
   <div class="col-md-6  col-sm-6"  >
   <input type="SO Ageing" class="form-control" id="SO Ageing"></input>
   

   </div>
   </div>
   </div>
</div>
{/* Fourth row first part*/ }

           <div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">So Creation Date:</div>
 <div class="col-md-6  col-sm-6">
    
       
 {/*< DayPickerInput onDayChange={day => console.log(day)} />*/}
    

 </div>
 </div>


 

 
 
 </div>
   {/* Fourth row second part*/}

   <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Last Working Date:</div>
   <div class="col-md-6  col-sm-6"  >
  {/*< DayPickerInput onDayChange={day => console.log(day)} />*/}
   

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
 <select class="form-control" id="Location" >
    
    <option value="none" selected disabled hidden> 
          Select an Option 
      </option> 
      <option >OnSite</option>
      <option>OffShore</option>
      <option >NearShore</option>
</select>
</div>
</div>
</div>
   {/* Fifth row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">City:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" id="City" >
    
    <option value="none" selected disabled hidden> 
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
 <input type="RIMS" class="form-control" id="RIMS"></input>

 </div>
 </div>


 

 
 
 </div>
   {/* Sixth row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Tracking:</div>
   <div class="col-md-6  col-sm-6"  >
   <input type="Tracking" class="form-control" id="Tracking"></input>
   

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
 <select class="form-control" id="Projecttype" >
    
    <option value="none" selected disabled hidden> 
          Select an Option 
      </option> 
      <option >BFD</option>
      <option>BTM</option>
      <option>NBL</option>
</select>
</div>
</div>
</div>
  {/* First row second part*/}
 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Project ID:</div>
   <div class="col-mdm-6  col-sm-6"  >
   <select class="form-control" id="Project ID" >
    
    <option value="none" selected disabled hidden> 
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

   </div>
   </div>
   </div>
</div>


{/* Second row first part */}




           <div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">ProjectName - Ally</div>
 <div class="col-md-6  col-sm-6">
 <select class="form-control" id="ProjectName-Ally:" >
    
    <option value="none" selected disabled hidden> 
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
    

 </div>
 </div>


 

 
 
 </div>
   {/* Second row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Job Level:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" id="Job Level" >
    
    <option value="none" selected disabled hidden> 
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

   </div>
   </div>
   </div>
</div>
          {/*Third row first PART */}
          <div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">Practise Area:</div>
 <div class="col-md-6  col-sm-6">
 <select class="form-control" id="Practise Area" >
    
    <option value="none" selected disabled hidden> 
          Select an Option 
      </option> 
      <option >ADM</option>
      <option>CDB</option>
      <option >CDE</option>
      <option>CIS</option>
      <option >EAS</option>
      <option>AQ</option>
</select>
</div>
</div>
</div>
   {/* Third row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Client LOB:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" id="Client LOB" >
    
    <option value="none" selected disabled hidden> 
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
   

   </div>
   </div>
   </div>
</div>
{/* Fourth row first part*/ }

           <div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">FulfiLlment POC:</div>
 <div class="col-md-6  col-sm-6">
 <select class="form-control" id="FulfiLlment POC" >
    
    <option value="none" selected disabled hidden> 
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
</div>
</div>
</div>
   {/* Fourth row second part*/}

   <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Skills:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" id="Skills" >
    
    <option value="none" selected disabled hidden> 
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
</div>
</div>
</div>
</div>
{/* Fifth row first part*/}
<div class="row">
 
 <div class="col-md-6 col-sm-12"  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">Billing Start Date/Joining:</div>
 <div class="col-md-6  col-sm-6">
{/*< DayPickerInput onDayChange={day => console.log(day)} />*/}
</div>
</div>
</div>
   {/* Fifth row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">BL/ML/SBL /Upside:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" id="BL/ML/SBL/Upside" >
    
    <option value="none" selected disabled hidden> 
          Select an Option 
      </option> 
      <option >BL</option>
      <option>Most Likely</option>
      <option >NA</option>
      <option>SBL</option>
      <option >U</option>
      <option>Upside-New</option>
      <option >Upside-Replacement</option>
       </select>
       </div>
    </div>
   </div>
</div>



{/*Sixth row first part */}

<div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">Lead Time:</div>
 <div class="col-md-6  col-sm-6">
 <input type="text" class="form-control" id="Lead Time" value="" read only></input>
</div>
</div>
</div>
   {/* Sixth row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">CP:</div>
   <div class="col-md-6  col-sm-6"  >
   <input type="text" class="form-control" id="CP" value=""></input>
   

   </div>
   </div>
   </div>
</div>
{/*7th  row first part */}
<div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">Revenue Loss:</div>
 <div class="col-md-6  col-sm-6">
 <input type="text" class="form-control" id="Revenue_Loss" value="" placeholder="In $"></input>
</div>
</div>
</div>
   {/* 7th row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Risk Amount:</div>
   <div class="col-md-6  col-sm-6"  >
   
   <input type="text " class="form-control" id="Risk Amount $ " value="" placeholder="In $"></input>
       </div>
    </div>
   </div>
</div>
  {/* 8th row first part*/}
  <div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">DL Mapping:</div>
 <div class="col-md-6  col-sm-6">
 <select class="form-control" id="Skills" >
    
    <option value="none" selected disabled hidden> 
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
</div>
</div>
</div>
  {/* 8th row second part*/}
 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">EL Mapping:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" id="EL Mapping" >
    
    <option value="none" selected disabled hidden> 
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

   </div>
   </div>
   </div>
   </div>



</div>

{/*7th row first part */}
<div class="row">
 
 <div class="col-lg-12 col-sm-12"  >
 <div class="row">
 <div class="col-lg-3  col-sm-6 col-md-3 blue ">SO Comments:</div>
 <div class="col-lg-9 col-sm-6 col-md-9">
 <div class="form-group">
  
  <textarea class="form-control" id="exampleFormControlTextarea3" rows="5"></textarea>
</div>

 </div>
 </div>


 

 
 
 </div>
 </div>
 



 




 <form ref="form" onSubmit={this.handleSubmit}>
    <button type="submit">Submit</button>
</form>
      </div>

        
        
       
    );
    }
}


export default CreateSO;
