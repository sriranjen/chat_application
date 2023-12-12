import Home from "./pages/Home";
import Reload from "./pages/Reload"
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Vediocall } from "./components/Vediocall";
import {More} from "./components/More"
import {Addcontact} from "./components/Addcontact"
import {Attachment} from "./components/Attachment"
import {OurTeam} from "./components/OurTeam"

import "./style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    
    
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="Addcontact" element={<Addcontact/>}/>
          <Route path="register" element={<Register />} />
          <Route path="OurTeam" element={<OurTeam/>}/>
          <Route path="Vediocall" element={<Vediocall/>}/>
          <Route path="More" element={<More/>}/>
          <Route path="Attach" element={<Attachment/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
