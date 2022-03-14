import '../CSS/BasicDetails.css'
import { useState } from 'react'
import Modal from 'react-modal'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import a from '../CountryCodes/CountryCodes.json'
toast.configure()
export const ContactDetails = () => {
  const [phno,setPhno] = useState("")
  const [code,setCode] = useState("")
  const [email,setEmail] = useState("")
  const [sts,setsts] = useState(true)
  const [hno,setHno] = useState("")
  const [area,setArea] = useState("")
  const [city,setCity] = useState("")
  const [dist,setDist] = useState("")
  const [states,setState] = useState("")
  const [pincode,setPincode] = useState("")
  const [modalsts,setmodal] = useState(true)


  const save = () =>{
  if (phno.trim().length != 10 || Number.isInteger(phno))
  {
    toast.error("Invalid Phone Number")
  }
  else if (email =="")
  {
    toast.error("Email is Empty")
  }
  else if (! (email.includes("@") && email.includes(".com") ))
  {
    toast.error("Please Enter Valid Email")
  }
  else if (hno.trim() == "")
  {
    toast.error("Please Enter House number or Street Name")
  }
  else if (area.trim() == "")
  {
    toast.error("Please Enter Area")
  }
  else if (city.trim() == "")
  {
    toast.error("Please Enter City Name")
  }
  else if (dist.trim() == "")
  {
    toast.error("Please Enter Distric")
  }
  else if (states.trim()=="")
  {
    toast.error("Please Enter State")
  }
  else if (! (pincode.trim().length == 6 || Number.isInteger(pincode)))
  {
    toast.error("Please Enter Valid Pincode")
  }
  else
  {
    toast.success("Contact Details Saved Successfully.")
    setsts(false)
    localStorage.setItem("ContactStatus",true)
    localStorage.setItem("usr_phno",code+" "+phno)
    localStorage.setItem("usr_email",email)
    localStorage.setItem("House",hno)
    localStorage.setItem("Area",area)
    localStorage.setItem("City",city)
    localStorage.setItem("Distric",dist)
    localStorage.setItem("State",states)
    localStorage.setItem("PinCode",pincode)
  }
  }


  const btn = () => {
    if(sts)
    {
      if(localStorage.getItem("ContactStatus"))
      {
          return <div> 
            <br/>
  <strong class="alert alert-success"><i class="fa-solid fa-check"></i> Contact Details  <i>"SAVED"</i> Successfully</strong>
          </div>
      }
      else
      {
      return <div>
<button class="btn btn-secondary" onClick={()=>{save()}}> Save</button>
      </div>
      }
    }
    else
    {
      return <div class="container text-center">
        <Modal isOpen={modalsts}><br/><br/><br/><br/><br/><br/><hr/>
          <center><span>&nbsp;<i class="fa-solid fa-thumbs-up fa-7x"></i></span><br/><h2>You Successfully Complete The Contact Details, Please Click Next to Fill Out the Next Section.</h2>
          <a href="/EducationalDetails" class="btn btn-success">Next <i class="fa-solid fa-angles-right"></i></a></center>
     <hr/>
      </Modal>
      </div>

    }
  }
const edit = () => 
{
  localStorage.clear("ContactStatus")
  localStorage.clear("usr_phno")
  localStorage.clear("usr_email")
  localStorage.clear("House")
  localStorage.clear("Area")
  localStorage.clear("City")
  localStorage.clear("Distric")
  localStorage.clear("State")
  localStorage.clear("PinCode")
  window. location. reload(false)
}
    return <div>
<div class="container text-center">
  <br/><br/><br/>
  <span class="text-white"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact Details&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></span><hr/>
<div class="card">
    <div class="container">
      <br/>
      <strong>Phone Number</strong>
      <div class="row">
        <div class="col-md-2">
         &nbsp;
        </div>
        <div class="col-md-8">
        <hr class="alert-danger"/>
        <div class="row">
          <div class="col-md-3">
          <select class="form-control" onChange={(e)=>setCode(e.target.value)}>
            {
              a.map((num)=>{
                return <option>
                {num.code} - ({num.dial_code})
                </option>
              })
            }
          </select>
          </div>
          <div class="col-md-9">
          <input type="text" class="form-control" placeholder='Enter Your Phone Number' onChange={(e)=>setPhno(e.target.value)} value={localStorage.getItem("usr_phno")}/>
          </div>
        </div>
        </div>
        <div class="col-md-2" >
        &nbsp;
        </div>
      </div>
      <hr/>
      <strong>Email ID</strong>
      <div class="row">
      <div class="col-md-2">
         &nbsp;
        </div>
        <div class="col-md-8">
        <hr class="alert-danger"/>  <input type="email" placeholder="Enter Your Email ID" class="form-control" onChange={(e)=>{setEmail(e.target.value)}} value={localStorage.getItem("usr_dob")}/>          
        </div>
        <div class="col-md-2" >
        &nbsp;
        </div>
      </div>
      <hr/>
      <strong>Address</strong>
      <div class="row">
      <div class="col-md-2">
         &nbsp;
        </div>
        <div class="col-md-8">
        <hr class="alert-danger"/>
        <div class="card container">
          <br/>
          <center>
      <div class="row">
<div class="col-md-5">
<input type="text" class="form-control" placeholder='HouseNo/StreetName' onChange={(e)=>setHno(e.target.value)}/>
</div>
<div class="col-md-3">
<input type="text" class="form-control" placeholder='Area' onChange={(e)=>setArea(e.target.value)}/>
</div>
<div class="col-md-4">
<input type="text" class="form-control" placeholder='City' onChange={(e)=>setCity(e.target.value)}/>
</div>
        </div><br/>
        <div class="row">
<div class="col-md-4">
<input type="text" class="form-control" placeholder='District' onChange={(e)=>setDist(e.target.value)}/>
</div>
<div class="col-md-4">
<input type="text" class="form-control" placeholder='State' onChange={(e)=>setState(e.target.value)}/>
</div>
<div class="col-md-4">
<input type="text" class="form-control" placeholder='Pincode' onChange={(e)=>setPincode(e.target.value)}/>
</div>
        </div>
       </center>
       <br/>
        </div>
        </div>
        <div class="col-md-2" >
        </div>
      </div>
      <hr/>
      {localStorage.getItem("usr_phno")?<button class="btn btn-danger" onClick={()=>edit()}>Edit Details</button>:""}
    </div>  
  </div>
  {btn()}
  <br/><br/><br/>
</div>
    </div>
}