import { Navigate, useNavigate } from "react-router-dom";
import PreHandler from "../prelogin/PreHandler";


const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

 

  if(token){
    return  <Navigate to="/app" replace />;
  }
  else{
    return <PreHandler />
  }

};

export default ProtectedRoute;
