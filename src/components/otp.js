import '../Resources/Css/loginregister.css'
import logo from '../Resources/Images/Logo/logo.png'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Otp_Api } from '../settings'
import {useState,useEffect} from 'react'
import { toast } from 'react-toastify'
export const Otp = () => {
    const [otp,setotp] = useState("")
    const [sts,setsts] = useState(false)
    const [enterotp,setenter] = useState("")
    const [otp_cnt,setotp_cnt] = useState("Send Otp")
    const [umsg,setumsg] = useState(true)
    const [otps,setotps]= useState(false)
    const navigate = useNavigate()
    const { state } = useLocation();
    const vals = {state}
    useEffect(()=>{
   localStorage.setItem('email',true)
    },[state])
   otps?sessionStorage.setItem('emailotp',false):sessionStorage.setItem('emailotp',true)
    sessionStorage.setItem('reg',true)
    localStorage.setItem('ia',false)
    console.log(state)
    const sendotp = () => {
        axios.post(Otp_Api,state)
        .then(response => setotp(response.data)).catch((error)=>navigate('/tc',{state : null}))
        setsts(true)
        setotps(true)
    }
    const resendotp = () => {
        toast.success("OTP Regenerated")
        axios.post(Otp_Api,state)
        .then(response => setotp(response.data)).catch((error)=>navigate('/tc',{state : null}))
        setsts(true)
        setotps(true)
    }
const resend = () =>{

    return <div>
        <button class="btn btn-warning" onClick={()=>resendotp()}>Resend OTP</button>
    </div>

}
    function register(){
        navigate('/register')
     }
     console.log(vals)
     const navi = () =>{
        localStorage.clear()
        navigate('/tc',{state : state})
     }
     const keypass = () => {
   
      if(otp == enterotp )
      {
          toast.success("Email Verified")
         navi()
      }         
      else
      {
        toast.error("Otp is Wrong. please Click Resend otp.")
        setotp_cnt("Resend OTP")
        
        
      }
     }


     if(state)
    {
        if(localStorage.getItem('email'))
        {return <div>
         <div class="parent">
  <div class="last text-center">
      <br/><br/><br/><br/>
  <img class="img-control" src={logo} alt="This is logo image"/><hr class="hr-control-last"/>
  <strong class="text-white "><b>iSecure</b></strong><hr class="hr-control-last"/>
  <button class="btn btn-warning" onClick={()=>register()}>Back</button>
  </div>
  <div class="item text-center container">
<br/><br/><br/><br/><br/>
      <strong class="text-white"><b>Email Verificatin</b></strong>
      <hr class="hr-control"/>
      {sts ? <div><div class="card container form-width">
      <br/>
      <b class="text-danger">Email ID  </b><b class="text-dark">---------------</b><b class="text-primary">{state["email"]}</b><hr/>
       <input type="text" placeholder='Enter otp' class="form-control" onChange={(e)=>{setenter(e.target.value)}}/>
       <br/>
   </div>      <br/>
   <button class="btn btn-success" onClick={()=>keypass()}>Submit</button>{
resend()
}</div>:
   <div><div class="card container form-width">
   <br/>
   <b class="text-danger">Email ID  </b><b class="text-dark">---------------</b><b class="text-primary">{state["email"]}</b><hr/>
    <input type="text" placeholder='Enter otp' class="form-control" disabled/>
    <br/>
</div>      <br/>
<button class="btn btn-secondary" onClick={()=>sendotp()}>{otp_cnt}</button>

</div>

   }
  </div>
  
  
</div>
    </div>}else{
        return <div>
        <div class="parent">
 <div class="last text-center">
     <br/><br/><br/><br/>
 <img class="img-control" src={logo} alt="This is logo image"/><hr class="hr-control-last"/>
 <strong class="text-white "><b>iSecure</b></strong><hr class="hr-control-last"/>
 <button class="btn btn-warning" onClick={()=>register()}>Back</button>
 </div>
 <div class="item text-center container">
<br/><br/><br/><br/><br/><br/><br/>
     <strong class="text-white"><b>Email Verified</b></strong>
     <hr class="hr-control"/>
     <div><div class="card container form-width">
     <br/>
      <b class="text-primary">{state['email']} <span class="badge bg-success"><i class="fa fa-check" aria-hidden="true"></i></span></b>
      <br/>
  </div>      <br/>
  <button class="btn btn-primary" onClick={()=>{navi()}}>Next </button></div>
 </div>
 
 
</div>
   </div>
    }}
else 
{
    return <div>
    <div class="parent">
<div class="last text-center">
 <br/><br/><br/><br/>
<img class="img-control" src={logo} alt="This is logo image"/><hr class="hr-control-last"/>
<strong class="text-white "><b>iSecure</b></strong><hr class="hr-control-last"/>
<button class="btn btn-secondary" onClick={()=>navigate('/home')}>Home</button>
</div>
<div class="item text-center container">
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<div class="card container form-width">
 <br/><i class="fa-solid fa-face-frown danger fa-5x "></i><br/>
  <b class="alert alert-danger">Server Error</b>
</div>      <br/>

</div>


</div>
</div> 
}
}