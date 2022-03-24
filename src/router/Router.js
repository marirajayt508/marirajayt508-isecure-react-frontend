import { Route,Routes,BrowserRouter } from "react-router-dom";
import { Login } from "../components/login";
import { Register } from "../components/register";
import { ButnIndex } from "../components/buttonindex";
import { Genpass } from "../components/genpassword";
import { Home } from "../components/home";
import { Tandc } from "../components/tandc";
import { Tccontents } from "../tandccontent";
import { Keypass } from "../components/keypass";
import {Otp} from "../components/otp"
export const Routers = () => {
  return <BrowserRouter>
    <Routes>
    <Route path='/' element={< Home />}/> 
    <Route path='/ServiceLists' element={< ButnIndex />}/>
    <Route path='/Register' element={< Login />}/>
    <Route path='/Login' element={< Register />}/>
    <Route path='/genpassword' element={< Genpass />}/>
    <Route path='/tc' element={< Tandc />}/> 
    <Route path='/tccontents' element={< Tccontents />}/> 
    <Route path='/otp' element={< Otp />}/>
    <Route path='/keypass' element={< Keypass />}/> 
    </Routes>
    </BrowserRouter>
}