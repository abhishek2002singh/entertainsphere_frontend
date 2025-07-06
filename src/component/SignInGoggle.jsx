// // 

// // SignInGoogle.jsx
// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { auth } from "./firebase"; // Make sure this is correct
// import { toast } from "react-toastify";

// function SignInGoogle() {
//   const googleLogin = async () => {
//     const provider = new GoogleAuthProvider(); // ✅ FIX: use 'new' to create an instance
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
//       if(result.user==true){
//         toast.success("Login successfully",{
//           position:"top-center",
//         })

//       }
    
//       console.log("User Info:", user);
//       // Example: You can save this to Redux or send to backend
//     } catch (error) {
//       console.error("Google login failed", error);
//     }
//   };

//   return (
//     <div onClick={googleLogin} className="border p-3 rounded cursor-pointer text-center">
//       <button className="capitalize text-red-600 font-bold">Sign in with Google</button>
//     </div>
//   );
// }

// export default SignInGoogle;

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase"; // Adjust path if needed
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice"; // ✅ your reducer
import { setUserPresentTrue, setToken } from "../utils/checkLogin";

function SignInGoogle() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userData = {
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        uid: user.uid,
      };

      const token = await user.getIdToken();
// console.log("DISPATCHING USER: ", userData); 
      dispatch(addUser(userData));
      dispatch(setUserPresentTrue());
      dispatch(setToken(token));
      localStorage.setItem("token", token);

      toast.success("Logged in with Google", { position: "top-center" });
      navigate("/app");
    } catch (error) {
      console.error("Google login failed", error);
      toast.error("Google login failed");
    }
  };

  return (
    <div onClick={googleLogin} className="border p-3 rounded cursor-pointer text-center mt-4">
      <button className="capitalize text-red-600 font-bold">Sign in with Google</button>
    </div>
  );
}

export default SignInGoogle;
