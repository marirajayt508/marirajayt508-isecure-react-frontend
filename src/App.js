import {Routers} from './router/Router'
import {NavBar} from './components/NavBar'
import { SideBar } from './components/SideMenu/SideMenu';
import (SideBar)
function App() {
  return (
    <div className="App">
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
  );
}

export default App;
