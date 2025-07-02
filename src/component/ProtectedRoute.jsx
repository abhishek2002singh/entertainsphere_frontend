import { Navigate, useNavigate } from "react-router-dom";
import { setUserPresentTrue, setToken } from "../utils/checkLogin";
import { BASE_URL } from "../utils/Constant";
import axios from "axios";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const fetchUser = async () => {
        try {
          const res = await axios.get(`${BASE_URL}/me`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          });

          console.log(res.data); // Optional: set this to Redux or local state
          dispatch(addUser(res.data));

          // If fetch is successful, update Redux and navigate
          dispatch(setUserPresentTrue());
          dispatch(setToken(token));
          navigate("/app");
        } catch (error) {
          console.error("Failed to fetch user:", error);
          // Token is invalid or expired — navigate to login
          localStorage.removeItem("token");
          navigate("/");
        }
      };

      fetchUser(); // Don't forget to call the async function
    } else {
      // Token not found, redirect to login
      navigate("/");
    }
  }, [dispatch, navigate]);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
