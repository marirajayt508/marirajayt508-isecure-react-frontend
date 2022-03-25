import '../Resources/Css/loginregister.css'
import logo from '../Resources/Images/Logo/logo.png'
import { useNavigate } from 'react-router-dom'

export const ButnIndex = () => {
    localStorage.clear()
    sessionStorage.clear()
    sessionStorage.setItem('reg',true)
    const navigate = useNavigate()
    function register(){
       
       navigate('/register')
    }
    function login(){
        navigate('/login')
     }
     function genpassword(){
        navigate('/genpassword')
     }
     function home(){
         navigate('/home')
     }
    return <div>
         <div class="parent">
  <div class="last text-center">
      <br/><br/><br/><br/>
  <img class="img-control" src={logo} alt="This is logo image"/><hr class="hr-control-last"/>
  <strong class="text-white "><b>iSecure</b></strong><hr class="hr-control-last"/>
  <button class="btn btn-primary" onClick={()=>home()}>Home</button>
  </div>
  <div class="item text-center container">
      <br/><br/><br/>  <br/><br/>
      <strong class="text-white"><b>iSecure</b></strong>
      <hr class="hr-control"/>
  <div class="card container form-width container"><br/>
     <center>  <button class="btn btn-success btn-control" onClick={()=>register()}>Register</button><hr/>
       <button class="btn btn-primary btn-control" onClick={()=>login()}>Login</button><hr/>
       <button class="btn btn-warning " onClick={()=>genpassword()}>Generate Password&nbsp;</button></center><br/>
   </div>      
  </div>
  
  
</div>
    </div>
}