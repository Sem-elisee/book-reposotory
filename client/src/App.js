import { BrowserRouter, Route, Routes } from "react-router-dom";
import Action from "../src/Views/action/Action"
import Drama from "../src/Views/drama/Drama";
import Comedy from "../src/Views/comedy/Comedy"
import Others from "../src/Views/others/Others"

import Dashboard from "../src/Views/dashboard/Dashboard"
import Empreint from "./Views/empreint/Empreint";
import Achat from "./Views/achat/Achat";
import Parametre from "./Views/parametre/Parametre";
import Livre from "../src/Views/livre/Livre"
import LoginAdmin from "./Views/loginAdmin/LoginAdmin";
import PageNotFound from "./Views/notFound/PageNotFound";
import LoginUser from "./Views/loginUser/LoginUser";
import InfosBook from "./Views/infosBook/InfosBook";
import SimularDetails from "./Views/simular/SimularDetails";
import TraningNowDetails from "../src/Views/traning/TraningNowDetails";
import ComedyDetails from "./Views/comedy/ComedyDetails";
import ActionDetails from "./Views/action/ActionDetails";
import SignUp from "./Views/sign-up/SignUp";
import { OthersInf } from "./Views/others/OthersInf";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Drama/>} />
                <Route path="/action" element={<Action/>} />
                <Route path="/comedy" element={<Comedy/>} />
                <Route path="/others" element={<Others/>} />

                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/empreint" element={<Empreint/>} />
                <Route path="/achat" element={<Achat/>} />
                <Route path="/livre" element={<Livre/>} />
                <Route path="/parametre" element={<Parametre/>} />

                <Route path="/infosBook/:name" element={<InfosBook/>} />
                <Route path="/oeuvreSimulaire/:name" element={<SimularDetails/>} />
                <Route path="/tendance/:name" element={<TraningNowDetails/>} />
                <Route path="/comedyDetails/:name" element={<ComedyDetails/>} />
                <Route path="/actionDetails/:name" element={<ActionDetails/>} />
                <Route path="/OthersDetails/:name" element={<OthersInf/>} />
            
                <Route path="/admin" element={<LoginAdmin/>} />
                <Route path="/loginUser" element={<LoginUser/>} />
                <Route path="/signUp" element={<SignUp/>} />
                <Route path="*" element={<PageNotFound/>} />
                
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
