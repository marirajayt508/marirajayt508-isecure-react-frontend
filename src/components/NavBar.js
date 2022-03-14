import '../CSS/NavBar.css'
export const NavBar = () => {
    return <div>
        <nav class="navbar bg-dark fixed-top">
           {localStorage.getItem("usr_name")?<strong class="text-white">
           <img src={localStorage.getItem("usr_photo")} alt="Photo" class="nav-db-control"/>&nbsp;&nbsp;&nbsp;Hai, {localStorage.getItem('usr_name')}</strong>:<strong class="text-white">Resume Builder</strong>} 
        </nav>
    </div>
}