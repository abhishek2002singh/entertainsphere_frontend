import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios'; // ✅ Import axios
import { toast } from 'react-toastify';

import { setUserPresentTrue, setToken } from '../utils/checkLogin';
import { addUser } from '../utils/userSlice'; // ✅ Make sure this exists
import PreHandler from '../prelogin/PreHandler';
import { BASE_URL } from '../utils/Constant'; // ✅ Import BASE_URL

const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          dispatch(setUserPresentTrue());
          dispatch(setToken(token));

          const res = await axios.get(`${BASE_URL}/me`, {
           
            withCredentials: true,
          });

          dispatch(addUser(res?.data));
        } catch (error) {
          console.error("Session expired or invalid token:", error);
          toast("Please login again, your session ended.");
          localStorage.removeItem("token");
        }
      }
    };

    fetchUser();
  }, []);

  if (token) {
    return <Navigate to="/app" />;
  } else {
    return <PreHandler />;
  }
};

export default ProtectedRoute;
