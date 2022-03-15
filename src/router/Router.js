import { Route,Routes,BrowserRouter } from "react-router-dom";
import { Heropage } from "../components/HeroPage/HeroPage";
import { BasicDetails } from "../components/BasicDetails";
import { ContactDetails } from "../components/ContactDetails";
import { NotFound } from "../components/404";
export const Routers = () => {
  return <BrowserRouter>
    <Routes>
    <Route path='/' element={< Heropage/>}/>
    <Route path="/BasicDetails" element={<BasicDetails/>} />
    <Route path="/ContactDetails" element={<ContactDetails/>} />
    <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
}