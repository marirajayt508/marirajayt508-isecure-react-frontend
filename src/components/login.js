import '../Resources/Css/loginregister.css'
import {useState,useEffect} from 'react'
import logo from '../Resources/Images/Logo/logo.png'
import { useNavigate } from 'react-router-dom'
import codes from '../Resources/Apis/CountryCodes.json'
import {  toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { Ping_Api, Hcaptcha_sitekey, Check,Otp_Api} from '../settings'
toast.configure()
export const Login = () => {
    const [firstname,setfirst] = useState("")
    const [lastname,setlast] = useState("")
    const [code,setcode] = useState("+91")
    const [phno,setphno] = useState("")
    const [email,setemail] = useState("")
    const [pswd,setpswd] = useState("")
    const [cpswd,setcpswd] = useState("")
    const [proclass,setproclass] = useState("alert bg-danger ")
    const [prosts,setprosts] = useState("Your Password is too week")
    const [captha,setcaptcha] = useState(false)
    const [otp,setotp] = useState(true)
    const [otps,setotps] = useState()
    const [resend,setresend] = useState(false)
    const [otpveri,setotpveri] = useState("")
    const [verists,setverists] = useState(false)
    const navigate = useNavigate()
    const lowerCaseLetters = /[a-z]/g ;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var regex = /a-zA-Z0-9!@#\$%\^\&*\)\(+=._-/g

    

    function login(){
        navigate('/login')
     }


  
     const validate = () => {
          if(firstname.trim()=="")
          {
              toast.error("First Name is Empty")
          }
         else if(lastname.trim()=="")
          {
            toast.error("Last Name is Empty")
          }
          else if(phno.trim()=="")
          {
            toast.error("Phone Number is Empty")
          }
          else if(phno.trim().length!=10 || isNaN(phno))
          {
            toast.error("Enter Valid Phone Number")
          }
          else if(email.trim()=="")
          {
            toast.error("Email is Empty")
          }
          else if((email.search("@")==-1))
          {toast.error("Enter Valid Email")
           if((email.search(".")==-1))
            {
              toast.error("Enter Valid Email")
            }
          }
    
          else if(pswd.trim()=="")
          {
            toast.error("Password is Empty")
          }
          else if(pswd.trim().length<8)
          {
            toast.error("Please Enter Minimum 8 letters password")
          }
          else if(pswd.trim().length<8)
          {
            toast.error("Please Enter Minimum 8 letters password")
          }
          else if(cpswd.trim()=="")
          {
            toast.error("Confrim Password is Empty")
          }
          else if(pswd!=cpswd)
          {
            toast.error("Password and Confrim password Not matched")
          }
          else
          {
            
       
        
        if(email){
          const emailchck = {'email' : email}
          axios.post(Check, emailchck)
          .then(response => checkemail(response.data)).catch((error)=>console.log("Error"))
}


function checkemail(data)
            {
          if(data)  {
            setotp(false)
            setresend(false)
          }
        else{
          toast.error("Email alredy exist please use diffrent one.")
        }}
        }
          
     }
     localStorage.setItem('email',true)
 
    
     const sts = (val) => {
        setpswd(val)
        let pattern = /[0-9]/;
        let strong = /[!@#\$%\^\&*\)\(+=._-]/;
        let result = pattern.test(pswd.trim());
        let green = strong.test(pswd.trim());


        if(pswd.trim().length>=8)
        {
           if(result)
        {
           setproclass("alert bg-secondary")
           setprosts("Your Password is Strong")
           if(green)
           {
              setproclass("alert bg-success")
              setprosts("Your Password is Very Strong")
           }
           else{
            setproclass("alert bg-secondary")
            setprosts("Your Password is Strong")
           }
        }
        else{
          setproclass("alert bg-warning")
          setprosts("Your Password Length is OK")
        }
        }
        else  if(pswd.trim().length<8){
            setproclass("alert bg-danger")  
           setprosts("Your Password is too weak")
        }
     }
     const csts = (a) => {
      setcpswd(a)
     }
     const sendotpf = () => {
      toast.success("OTP Send Successfully.")
      const emailchck = {'email' : email}
      axios.post(Otp_Api,emailchck)
      .then(response => {setotps(response.data)
      }).catch((error)=>navigate('/tc'))
     setresend(true)
    }
    const submitotp = () =>{
      if(otps == otpveri)
      {
        setverists(true)
        toast.success("Email Verified")
      }
      else
      {
        toast.error("Email Not Verified")
      }
    }
    sessionStorage.clear('tc')
  const tcv = () =>{
    const register_datas = {
      'name' : firstname+" "+lastname,
      'firstname' : firstname,
      'lastname' : lastname,
      'code' : code,
      'phonenumber' : phno,
      'email' : email,
      'password' : cpswd,
      'key' : firstname.charAt(0)+lastname.charAt(0)+code+email.charAt(3)+email.charAt(4)+phno+pswd+firstname.charAt(0)+lastname.charAt(0)+code+email.charAt(3)+email.charAt(4)
  }
  sessionStorage.setItem('tc',true)
    axios.post(Ping_Api, register_datas)
    .then(response => navigate('/tc',{state : register_datas})).catch((error)=>navigate('/tc',{state : false}))
  }

   if(localStorage.getItem('regs'))
   {

       
     return <div>
       <div>
        <div class="parent">
 <div class="last text-center">
     <br/><br/><br/><br/>
 <img class="img-control" src={logo} alt="This is logo image"/><hr class="hr-control-last"/>
 <strong class="text-white "><b>iSecure</b></strong><hr class="hr-control-last"/>
 <button class="btn btn-warning" onClick={()=>navigate("/")}>Home</button>
 </div>
 <div class="item text-center container">
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
     <strong class="text-white"><b>Registration Form Filled</b></strong>
     <hr class="hr-control"/>
     <div>   
  <button class="btn btn-danger" onClick={()=>{navigate('/ServiceLists')}}>Menu</button><button class="btn btn-primary" onClick={()=>{navigate('/')}}>Home</button></div>
 </div>
 
 
</div>
   </div>
     </div>

     
    } else
      { 
         return <div>
        <div class="parent">
 <div class="last text-center">
     <br/><br/><br/><br/>
 <img class="img-control" src={logo} alt="This is logo image"/><hr class="hr-control-last"/>
 <strong class="text-white "><b>iSecure</b></strong><hr class="hr-control-last"/>
 <button class="btn btn-primary" onClick={()=>{login()}}>Login</button>
 </div>
 <div class="item text-center container">
     <br/>{otp ? <div>
     <strong class="text-white"><b>Register</b></strong>
     <hr class="hr-control"/>
 <div class="card container form-width md-form"><br/><br/>
 <div class="container">
 <div class="row">
     <div class="col-md-6">
     <input type="text" placeholder="Enter your First name" class="form-control" onChange={(e)=>{setfirst(e.target.value)}} value={firstname}/><br/>
     </div>
     <div class="col-md-6">
     <input type="text" placeholder="Enter your Last name" class="form-control" onChange={(e)=>{setlast(e.target.value)}} value={lastname}/><br/>
     </div>
 </div>
 <div class="row">
     <div class="col-md-3">
     <select class="form-control" onChange={(e)=>{setcode(e.target.value)}} value={code}>
         {codes.map((a)=>{
             return <option value={a.dial_code}>{a.dial_code}</option>
         })}
     </select>
     </div>
     <div class="col-md-9">
     <input type="text" placeholder="Enter your phnone number" class="form-control" onChange={(e)=>{setphno(e.target.value)}} value={phno}/><br/>
     </div>
 </div>
 <input type="text" placeholder="Enter your email ID" class="form-control" onChange={(e)=>{setemail(e.target.value.toLowerCase())}} value={email}/><br/>
 <input type="password" placeholder="Enter your password" class="form-control" onChange={(e)=>{sts(e.target.value)}} value={pswd}/>  
 {pswd!=""?<div class="text-white strong"><div class={proclass}>{prosts}</div></div>:<div><br/></div>}
 <input type="password" placeholder="Enter yor confirm Password" class="form-control" onChange={(e)=>{csts(e.target.value)}} value={cpswd}/>
 {!captha ?<div><br/> <HCaptcha
      sitekey={Hcaptcha_sitekey}
      onVerify={(token,ekey) => setcaptcha(true)}
    /></div> : <span class="text-success small">Captcha verified</span>}
  <br/>
  </div>  </div>     
  {captha?<button class="btn btn-success" onClick={()=>validate()}>Register</button>:<button class="btn btn-success" onClick={()=>validate()} disabled>Register</button>}
</div> : <div>
<strong class="text-white"><b>Email Verification</b></strong>
     <hr class="hr-control"/>
 <div class="card container form-width md-form"><br/><br/>
 <div class="container">
 {!verists ? <div><code>Email : <b class="text-primary">{email}</b></code>
   <hr/>
   {resend ? <div class="md-form"><input type="text" class="form-control" placeholder="Enter OTP" onChange={(e)=>{setotpveri(e.target.value)}}/><br/>
     <button class="btn btn-danger" onClick={()=>{submitotp()}} >Submit</button><button class="btn btn-info" onClick={()=>{sendotpf()}}>Resend OTP</button><button class="btn btn-warning" onClick={()=>{setotp(true)}} >Back</button></div>:<button class="btn btn-secondary" onClick={()=>{sendotpf()}}>send OTP</button>  }
   </div> : <div>
   <div><code>Email : <b class="text-primary">{email}</b></code>&nbsp;<span class="badge badge-success small">
<i class='fa fa-check-circle'></i> Verified</span>
   <hr/>
     </div>
     <button class="btn btn-primary" onClick={()=>tcv()}>Next</button>
     </div>}  
   <br/>
   </div>
  </div> 
  </div>}
 </div>
 
</div>
   </div> }

}