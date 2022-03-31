import '../Resources/Css/loginregister.css'
import logo from '../Resources/Images/Logo/logo.png'
import { useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect} from 'react'
import {  toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Decrypt_Api, Check, Get_Key, Ckeck_key_Api, Qr_Api, Qr_Api_End, Qr_Api_Check, login_check,login_check_navi } from '../settings'
import axios from 'axios'
import QRCode from "react-qr-code"
import IdleTimer from 'react-idle-timer'
import swal from 'sweetalert'
import {Timer} from './countdown'
import react from 'react'
import { useCookies } from 'react-cookie';

export const Register = () => {
    
const [login,setlogin] = useState(true)
const [upload,setupload] = useState(false)
const [fileup,setfile] = useState("")
const [endata,setendata] = useState("")
const [mail,setmail] = useState("")
const [pass,setpass] = useState("")
const [key,setkey] = useState("")
const [qr,setqr] = useState(false)
const [qrcode,setqrcode] = useState("")
const [counter, setCounter] = useState(false);
const [cookies, setCookie, removeCookie] = useCookies(['key']);

toast.configure()
const itimeref = useRef(null)
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
           if(endata=="")
            {
                toast.error("Key Pass is Empty")
                console.log(endata)
            }
            else
            {
                axios.post(Decrypt_Api,JSON.parse(endata)).then(response=>{
                    keychecking(response.data['data'])}).catch((error)=>toast.error("Key Pass not Found"))

               }

            function keychecking(key_data){
                sessionStorage.clear('key')
                sessionStorage.setItem('key',key_data) 
                const name = sessionStorage.getItem('key')
                if(cookies[name] == name)
                {
                    toast.error("Ohh, Sorry We found your privious session code till active. So please try after one miniut.")
                }
                else
               { axios.post(Qr_Api_End,{'key' : sessionStorage.getItem('key')}).then(response =>{console.log(response.data)})
                var date = new Date();
                date.setTime(date.getTime() + (30 * 1000));

                setCookie(sessionStorage.getItem('key'),sessionStorage.getItem('key'), { expires: date });
                axios.post(Ckeck_key_Api,{'key' : sessionStorage.getItem('key')}).then(response=>{
                    keycheckingstate(response.data)}).catch((error)=>toast.error("Invalid Key Pass"))}
            }
         }
         
         function keycheckingstate(data){
            /*Main For Keypass Login*/
            
             if(data.toLowerCase() == 'true')
             {
                 const qac =  sessionStorage.getItem('key')
 
                axios.post(Qr_Api_Check,{'key' : qac}).then(response=>{
                    qrchck(response.data)}).catch((error)=>toast.error("Invalid Key Pass"))
               function qrchck(data)
               {
                   if(data != "None" || data != 'false')
                   {
                    setqr(true)
                    const qra= sessionStorage.getItem('key')
                    axios.post(Qr_Api,{'key' : qra}).then(response=>{
                        qr_session_check(response.data)}).catch((error)=>toast.error("Invalid Key Pass"))

                        function qr_session_check(data)
                        {
                            setqrcode(data['qr'])
                            console.log(data)
                        }
                       
                   }
                   
                    else{

                       setqr(false)
                       toast.error("Invalid Key")
                   }
                   
                   
               }
               /*  */
             }
             else
             {
                 toast.error("Invalid key Pass.")
             }
         }
     }

     const usrlogin = () => {
         const emails = {'email' : mail}

         const password = {'password' : pass}
         
         if(mail.trim() == ""){
            toast.error("Please enter a email")
         }
         else if(pass.trim()=="")
         {
            toast.error("Please enter a password")
         }
      else
{
         axios.post(Check,emails).then(response => mailcheck(Boolean(response.data)))
         const mailcheck = (data) => {
             if(!data)
             {
                axios.post(Check,password).then(response => passcheck(Boolean(response.data)))
             }
             else
             {
                toast.error("Email not found")
             }
         }
         const passcheck = (data) => {
             
            if(!data)
            {
                axios.post(Get_Key,{'email' : emails}).then(response => seckey(response.data))
                
            }
            else
            {
               toast.error("Password is Worng")
            }
            function seckey(data)
            {
                sessionStorage.clear('key')
                sessionStorage.setItem('key',data)
                const name = sessionStorage.getItem('key')
                if(cookies[name] == name)
                {
                    toast.error("Ohh, Sorry We found your privious session code till active. So please try after one miniut.")
                }
                else
               { axios.post(Qr_Api_End,{'key' : sessionStorage.getItem('key')}).then(response =>{console.log(response.data)})
                var date = new Date();
                date.setTime(date.getTime() + (30 * 1000));           
                setCookie(sessionStorage.getItem('key'),sessionStorage.getItem('key'), { expires: date });
                const ChckKey={
                    'key' : sessionStorage.getItem('key')
                }
                axios.post(Ckeck_key_Api,ChckKey).then(response=>{
                    keystate(response.data)}).catch((error)=>toast.error("Error"))}
            }
            function keystate(data){
               /*Main for uLogin*/
               const qau = sessionStorage.getItem('key')
                axios.post(Qr_Api_Check,{'key' : qau}).then(response=>{
                    qrchck(response.data.toLowerCase())}).catch((error)=>toast.error("Invalid Key Pass"))
               function qrchck(data)
               {

                   if(data == "none" || data == 'false')
                   {
                    setqr(true)
                    const qri = sessionStorage.getItem('key') 
                    axios.post(Qr_Api,{'key' : qri}).then(response=>{
                        setqrcode(response.data['qr'])}).catch((error)=>toast.error("Invalid Key Pass"))
                       
                   }
                    else{

                       setqr(false)
                       toast.error("Session Active Please Try after Some time.")
                   }
                   
                   
               }
            }
         }
         
        }

        /* axios.post(Check,password).then(response => setcheckpass(Boolean(response.data)))}*/

     }

     function backSession(e){
         Next()
   }

     function Next()
     {
        
       axios.post(login_check,{'key' : sessionStorage.getItem('key')}).then(response =>ocode(response.data)).catch(error=> toast.error("Server Error"))
       function ocode(data)
       {
           if(data['loginstatus']=='true')
           {
            navigate("/DashBoard")
           }
           else if(sessionStorage.getItem('key'))
           {
        
           axios.post(Qr_Api_End,{'key' : sessionStorage.getItem('key')}).then(response =>dsession()).catch(error=> toast.error("Server Error"))
           function dsession()
           {
               sessionStorage.clear('key')
               removeCookie('key')
               setqr(false)
               swal("Session Code Deactivated", "");                
                            
           }
   
   }
     
       }
    }

    /* if(!qr && mail == "")
     {
        setInterval(()=>{
            window.location.reload()
        },60000)
     }*/


    return <div>
         <div class="parent">
  <div class="last text-center">
      <br/><br/>
  <img class="img-control" src={logo} alt="This is logo image"/><hr class="hr-control-last"/>
  <strong class="text-white "><b>iSecure</b></strong><hr class="hr-control-last"/>
  <button class="btn btn-success" onClick={()=>register()}>Register</button>
  </div>
  <div class="item text-center container">
    
    {!qr?  <strong class="text-white"><b>Login</b></strong> : <strong class="text-white"><br/><br/><br/><b>iAuth Session Code</b></strong> }
      <hr class="hr-control"/>
  <div class="card container form-width md-form">
       <br/>
       {!qr ? <div><div class="card container">  
           {
               login?<div><br/><br/><input type="text" placeholder='Enter Your Email' class="form-control" onChange={(e)=>setmail(e.target.value.toLowerCase())}/><br/>
               <input type="password" placeholder='Enter Your Password' class="form-control" onChange={(e)=>{setpass(e.target.value)}}/>
               <br/><center><button class="btn btn-secondary" style={{'width' : '30%'}} onClick={()=>{usrlogin()}}>Login</button></center> </div> : 
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
</div> : <div><div class="alert alert-danger">Click uplaod icon to <i>Choose</i> File </div>
<br/>
</div>
}

             </div>
               </div> : <div><br/><button class="btn btn-success" onClick={()=>{uploads()}}>Login using KeyPass</button></div>
           }
           <br/>
       </div></div> : <div>
       <QRCode value={"Your Code is : "+qrcode}/>
      <br/><br/><h3><b>Session Code : <code>{qrcode}</code></b></h3>
       <Timer time={60} onTimeover={(e)=>{backSession(e)}} msg={"Session Code Expires Please Login again."}/>
       <hr/>
        <div><i class="fa-solid fa-gear fa-la" id="rotate"></i></div> <b class="text-success">We Setting Up Your Account secure. So Please wait for a Seconds. Complete your iAuth Process if not done.</b><hr/>
           </div>}
           
       <br/>
       
   </div>      

  </div>
  
  
</div> 
    </div>
}

/*{!qr ? "": <div>
     
       <button class="btn btn-warning" onClick={(msg= "Session Deactived")=>{backSession(msg)}}>Back</button></div>}
*/