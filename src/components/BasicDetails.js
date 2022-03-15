import '../CSS/BasicDetails.css'
import { useState } from 'react'
import Modal from 'react-modal'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
export const BasicDetails = () => {
  const [name,setName] = useState("")
  const [dob,setdob] = useState("")
  const [img,setimg] = useState("")
  const [sts,setsts] = useState(true)
  const [modalsts,setmodal] = useState(true)


  const save = () =>{
  if (name.trim() =="")
  {
    toast.error("Name is Empty")
  }
  else if (dob =="")
  {
    toast.error("Date of Brith is Empty")
  }
  else if (img == "")
  {
    toast.error("Upload Your Photo")
  }
  else
  {
    toast.success("Basic Details Saved Successfully.")
    setsts(false)
    localStorage.setItem("BasicStatus",true)
    localStorage.setItem("usr_name",name)
    localStorage.setItem("usr_dob",dob)
    localStorage.setItem("usr_photo",img)
  }
  }


  const btn = () => {
    if(sts)
    {
      if(localStorage.getItem("BasicStatus"))
      {
          return <div> 
            <br/>
  <strong class="alert alert-success"><i class="fa-solid fa-check"></i> Basic Details  <i>"SAVED"</i> Successfully</strong>
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
          <center><span>&nbsp;<i class="fa-solid fa-thumbs-up fa-7x"></i></span><br/><h2>You Successfully Complete The Basic Details, Please Click Next to Fill Out the Next Section.</h2>
          <a href="/ContactDetails" class="btn btn-success">Next <i class="fa-solid fa-angles-right"></i></a></center>
     <hr/>
      </Modal>
      </div>

    }
  }

const img_set = (imgfile) =>{
const Reader = new FileReader()
Reader.addEventListener("load",()=>{
  setimg(Reader.result)
})
Reader.readAsDataURL(imgfile.files[0])
}

const img_file_sts = () => {
  if(localStorage.getItem("usr_photo"))
  {
return <div>
  <br/><img src={localStorage.getItem("usr_photo")} alt="User Photo" style={{height: "50%",width: "50"}}/><br/><br/>
</div>
  }
  else
  {
return <strong><br/>No File Uplodaded<br/><br/></strong>
  }
}
const edit = () => 
{
  localStorage.clear("BasicStatus")
  localStorage.clear("usr_name")
  localStorage.clear("usr_dob")
  localStorage.clear("usr_photo")
  window. location. reload(false)
}
    return <div>
<div class="container text-center">
  <br/><br/><br/>
  <span class="text-white"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Basic Details&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></span><hr/>
<div class="card">
    <div class="container">
      <br/>
      <strong>Enter Your Name</strong>
      <div class="row">
        <div class="col-md-2">
         &nbsp;
        </div>
        <div class="col-md-8">
        <hr class="alert-danger"/><input type="text" class="form-control" placeholder='Enter Your full name Here' onChange={(e)=>setName(e.target.value)} value={localStorage.getItem("usr_name")}/>
        </div>
        <div class="col-md-2" >
        &nbsp;
        </div>
      </div>
      <hr/>
      <strong>Select Your Date Of Brith</strong>
      <div class="row">
      <div class="col-md-2">
         &nbsp;
        </div>
        <div class="col-md-8 ">
        <hr class="alert-danger"/>  <input type="date" class="form-control" onChange={(e)=>{setdob(e.target.value)}} value={localStorage.getItem("usr_dob")}/>          
        </div>
        <div class="col-md-2" >
        &nbsp;
        </div>
      </div>
      <hr/>
      <strong>Upload Your Photo</strong>
      <div class="row">
      <div class="col-md-2">
         &nbsp;
        </div>
        <div class="col-md-8">
        <hr class="alert-danger"/> {localStorage.getItem("usr_name")?"":<input type="file" class="form-control" onChange={(e)=>{img_set(e.target)}}/>}<br/>
        <div class="card">
          <center>
       {img?<div><br/><img src={img} alt="User Photo" style={{height: "50%",width: "50"}}/><br/><br/></div>:img_file_sts()}
       </center>
        </div>
        </div>
        <div class="col-md-2" >
        </div>
      </div>
      <hr/>
      {localStorage.getItem("usr_name")?<button class="btn btn-danger" onClick={()=>edit()}>Edit Details</button>:""}
    </div>  
  </div>
  {btn()}
  <br/><br/><br/>
</div>
    </div>
}