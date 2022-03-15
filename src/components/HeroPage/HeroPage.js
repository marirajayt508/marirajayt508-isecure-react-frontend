import { useNavigate } from "react-router-dom"
import './HeroPage.css'
export const Heropage = () =>{
    const navigate = useNavigate()
function sideenable()
{
    sessionStorage.setItem("side",true)
    navigate('/BasicDetails')
    window.location.reload()
}   
function newone()
{
    localStorage.clear()
    sessionStorage.setItem("side",true)
    navigate('/BasicDetails')
    window.location.reload() 
} 
    return <div class="container">
        <br/><br/><br/>
        <div class="card container text-center">
            <br/>
            {localStorage.getItem('usr_name')?<div>
                <img src={localStorage.getItem("usr_photo")}/>
               <br/><br/><div class="alert alert-primary"><strong ><i class="fa-solid fa-user-tie"></i><br/> Dear {localStorage.getItem("usr_name")}, We found you are incomplete in data submission.<br/> Please Click Below one to continue.</strong></div>
                <br/>
                <button onClick={()=>sideenable()} class="btn btn-secondary" style={{width : '20%'}}>Resume Old</button><button onClick={()=>newone()} class="btn btn-secondary" style={{width : '20%'}} ><i class="fa-solid fa-circle-plus"></i> Create New</button></div>:<button onClick={()=>sideenable()} class="btn btn-success">Enable</button>}
            <br/>
            </div>     
    </div>
}