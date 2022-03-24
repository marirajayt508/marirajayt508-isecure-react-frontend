import { useLocation,useNavigate } from "react-router-dom"
import logo from '../Resources/Images/Logo/logo.png'

export const Keypass = () => {
    const { state } = useLocation();
    const navigate = useNavigate()
    localStorage.clear()
    localStorage.setItem('tc',true)
    console.log(state)
    const download= () => {
      const element = document.createElement("a");
      const file = new Blob([JSON.stringify(state)], {type: 'json'});
      element.href = URL.createObjectURL(file);
      element.download = "keypass.json";
      document.body.appendChild(element); // Required for this to work in FireFox
      element.click();
    }
    const back = () =>{
         localStorage.clear()
         navigate("/login")
    }
   if(state)
   {
       return <div class="bg-secondary text-center">
        <br/><br/><br/>
        <div class="container ">
<div class="card  container">
<br/><br/>
<center><img src={logo} alt="logo" style={{'height' : '80px','width' : '120px'}}/></center>
  <b>iSecure</b>
  <hr/>
  <h4><code><span class="text-success">Registration Success</span></code></h4>
  <br/>
  <div class="card alert-danger"><br/>
  <p>Email : <code class="bg-success text-white container">Verified</code></p>
  <p>Key : <code class="bg-white container">{state['Encrypted_datas']['keys']['key3']?'Key Generated':''}</code></p>
  <p>Pass : <code class="bg-white container">{state['Encrypted_datas']['data']?'Pass Generated':''}</code></p>
  <p>Registration : <code class="bg-white container">successful</code></p><br/>
  </div>
  <br/>
</div><br/>
<button class="btn btn-success" onClick={()=>{download()}}>Download Keypass</button><button class="btn btn-warning" onClick={()=>{back()}}>Login</button><br/><br/><br/><br/><br/><br/>

</div>
      
  </div>
    }
    else{
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
 <br/>
  <b class="alert alert-danger">Access Denide</b>
</div>      <br/>

</div>


</div>
</div> 
    }
}