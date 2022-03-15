import './css/sidemenu.css'
import './css/btn-colors.css'
import { statusTick } from './statusTick'
import { useNavigate } from "react-router-dom" 
export const SideBar = () => { 
  const navigate = useNavigate()
  const check = () => {
    localStorage.getItem("ContactStatus")?alert("Success"):alert("Complete Contact Details First")
  }
  const side = () =>{
    return <div>
    <div class="left-side">
    <div class="sidebar bg-dark">
        <br/>
        <a href="/BasicDetails" class="text-white"><br/><br/><strong>BasicDetails {localStorage.getItem("BasicStatus")?statusTick():""}</strong><br/></a>
        <a href="/ContactDetails" class="text-white"><br/><strong>Contact Details {localStorage.getItem("ContactStatus")?statusTick():""}</strong><br/></a>
        <a href="/ContactDetails" class="text-white"><br/><strong>Educational Details {localStorage.getItem("BasicStatus")?statusTick():""}</strong><br/></a>
        <a href="" class="text-white"><br/><strong>Area Of Intrest {localStorage.getItem("BasicStatus")?statusTick():""}</strong><br/></a>
        <a href="" class="text-white"><br/><strong>Certification Details {localStorage.getItem("BasicStatus")?statusTick():""}</strong><br/></a>
        <a href="" class="text-white"><br/><strong>Family Details {localStorage.getItem("BasicStatus")?statusTick():""}</strong><br/></a>
        <a href="" class="text-white"><br/><strong>Declaration {localStorage.getItem("BasicStatus")?statusTick():""}</strong><br/></a>
        <a onClick={()=>{check()}} class="text-white"><br/><strong>Download Resume<br/>&nbsp;<br/>&nbsp;</strong></a>
  </div>
  
    </div>
      </div>
  }
    return <div>
      {
       sessionStorage.getItem("side")?side():""
      }
    </div>
}