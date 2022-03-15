import '../CSS/NavBar.css'
import icon from './images/favicon.png'
export const NavBar = () => {
    return <div>
        <nav class="navbar bg-dark fixed-top">
           {localStorage.getItem("usr_name")?<strong class="text-white">
           <img src={localStorage.getItem("usr_photo")} alt="Photo" class="nav-db-control"/>&nbsp;&nbsp;&nbsp;Hai, {localStorage.getItem('usr_name')}</strong>:<div><img src={icon} alt="Favicon" class="nav-fav-control"/> <strong class="text-white">&nbsp;Greed Technology</strong></div>} 
        </nav>
    </div>
}