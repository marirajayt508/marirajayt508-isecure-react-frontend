import '../Resources/Css/loginregister.css'
import logo from '../Resources/Images/Logo/logo.png'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Encrypt_Api,Register_Api } from '../settings'
import {useState} from 'react'
import { toast } from 'react-toastify'
export const Tandc = () => {
    const [edata,setedata]= useState("")
    const [tgl,settgl] = useState(false)
    const navigate = useNavigate()
    const { state } = useLocation();
    console.log(state);
    sessionStorage.clear('emailsts')
    localStorage.clear('email')
    localStorage.clear('ia')
    function register(){
        navigate('/register')
     }
     console.log(state)
     const keypass = () => {
       
        toast.success("Keypass Download Started")
        axios.post(Encrypt_Api, state)
        .then(response => {keypass_gen(response.data)}).catch((error)=>navigate('/servererror',{state : null}))
        localStorage.setItem('ia',true)
        const Basic_db={
            'collection' : 'BaicDetails',
            'name' : state['name'],
            'password' : state['password'] ,
            'key' : state['key'],
        }
        const Key_db={
            'collection' : 'KeyDetails',
            'key' : state['key'],
        }
        const User_db={
            'collection' : 'UserDetails',
            'name' : state['name'],
            'firstname' : state['firstname'],
            'lastname' : state['lastname'],
            'code' : state['code'],
            'phonenumber' : state['phonenumber'],
            'email' : state['email'],
            'password' : state['password'] ,
            'key' : state['key'],
        }
        axios.post(Register_Api, Basic_db)
        .then(response => {console(response.data)}).catch((error)=>console.log(error))
        axios.post(Register_Api, Key_db)
        .then(response => {console(response.data)}).catch((error)=>console.log(error))
        axios.post(Register_Api, User_db)
        .then(response => {console(response.data)}).catch((error)=>console.log(error))
     }
     const keypass_gen=(data)=>{
         setedata(data)
         download()
         toast.success("Keypass Download Successfully...")
         settgl(true)
     }
     const download= () => {
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(edata)], {type: 'json'});
        element.href = URL.createObjectURL(file);
        element.download = "keypass.json";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
        
      }

     if(state)
    {return <div>
         <div class="parent">
  <div class="last text-center">
      <br/><br/><br/><br/>
  <img class="img-control" src={logo} alt="This is logo image"/><hr class="hr-control-last"/>
  <strong class="text-white "><b>iSecure</b></strong><hr class="hr-control-last"/>
  <button class="btn btn-warning" onClick={()=>register()}>Back</button>
  </div>
  <div class="item text-center container">

      <strong class="text-white"><b>Therms and Conditions</b></strong>
      <hr class="hr-control"/>
  <div class="card container form-width">
      <br/>
       <iframe class="embed-responsive-item" src="/tccontents" height="400px"  />
       <br/>
       {
           tgl?<div><b class="text-success container">Your Registeration Successfully Completed<br/></b><b><span class="text-danger medium strong"> Click GO Back<br/>*** For Successfull Registeration with out Error ""*</span></b><br/><br/></div>:""
       }
   </div>     
   {tgl? <div>
       <button class="btn btn-secondary" onClick={()=>navigate('/ServiceLists')}>Go Back</button><br/>   
       </div>
   : <div><br/><button class="btn btn-success" onClick={()=>keypass()}>I Agree and Download Keypass</button></div>
  
   }
  </div>
  
  
</div>
    </div>}
else 
{
    return <div>
    <div class="parent">
<div class="last text-center">
 <br/><br/><br/><br/>
<img class="img-control" src={logo} alt="This is logo image"/><hr class="hr-control-last"/>
<strong class="text-white "><b>iSecure</b></strong><hr class="hr-control-last"/>
<button class="btn btn-secondary" onClick={()=>register()}>Home</button>
</div>
<div class="item text-center container">
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<div class="card container form-width">
 <br/>
  <b class="alert alert-danger">Server Error</b>
</div>      <br/>

</div>


</div>
</div> 
}
}