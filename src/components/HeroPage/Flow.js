import { NavBar } from "../NavBar"
import { SideBar } from "../SideMenu/SideMenu"
import { Routers } from "../../router/Router"
export const Flow = () =>{
    return <div>
        <NavBar/>
      <div class="row">
        <div class="col-md-2">
      <SideBar/>
      </div>
      <div class="col-md-8 container">
      <Routers/>
      </div>
      </div>
      </div>
}