import '../Resources/Css/loginregister.css'
import logo from '../Resources/Images/Logo/logo.png'
import { useNavigate } from 'react-router-dom'
import {useState} from 'react'
import {  toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Decrypt_Api } from '../settings'
import axios from 'axios'

export const Register = () => {

const [login,setlogin] = useState(true)
const [upload,setupload] = useState(false)
const [fileup,setfile] = useState("")
const [endata,setendata] = useState("")
toast.configure()

const fil = new FileReader()
    const navigate = useNavigate()
    if(fileup)
    {
        fil.readAsText(fileup)
        fil.onload = () =>{
            setendata(fil.result)
        }
    }
    function register(){
        navigate('/register')
     }

     const uploads = () => {
        setlogin(false)
         setupload(true)
     }
     const usrpwd = () =>{
        setlogin(true)
        setupload(false)
     }

     const Login = () =>{
         if(fileup.type != "application/json")
         {
             toast.error("Please Upload Correct Keypass to Login")
             setfile("")
         }
         else
         {
            axios.post(Decrypt_Api,JSON.parse(endata)).then(response=>{
                console.log(response.data)
            })
         }
     }

    return <div>
         <div class="parent">
  <div class="last text-center">
      <br/><br/><br/><br/>
  <img class="img-control" src={logo} alt="This is logo image"/><hr class="hr-control-last"/>
  <strong class="text-white "><b>iSecure</b></strong><hr class="hr-control-last"/>
  <button class="btn btn-success" onClick={()=>register()}>Register</button>
  </div>
  <div class="item text-center container">
    
      <strong class="text-white"><b>Login</b></strong>
      <hr class="hr-control"/>
  <div class="card container form-width md-form">
       <br/>
       <div class="card container">
           
           {
               login?<div><br/><br/><input type="text" placeholder='Enter Your Email' class="form-control"/><br/>
               <input type="password" placeholder='Enter Your Password' class="form-control"/>
               <br/><center><button class="btn btn-secondary" style={{'width' : '30%'}}>Login</button></center> </div> : 
               <div><br/><button class="btn btn-secondary" onClick={()=>{usrpwd()}}>Login using Username and password</button></div>
           }
           <br/>
       </div>
       <hr/>
       <div class="card container">
           
           {
               upload ? <div><br/> 
<div class="card container "><br/>
<input id="file" type="file" onChange={(e)=>setfile(e.target.files[0])} />
<br/>
{
fileup ? <div><div class="alert alert-success">You choosed<i> {fileup.name}</i>  </div>
<button class="btn btn-success" onClick={()=>Login()}>Login</button>
</div> : <div class="alert alert-danger">Click uplaod icon to <i>Choose</i> File </div>
}
             </div>
               </div> : <div><br/><button class="btn btn-success" onClick={()=>{uploads()}}>Upload Keypass to Login</button></div>
           }
           <br/>
       </div>
       <br/>
   </div>      
  </div>
  
  
</div>
    </div>
}