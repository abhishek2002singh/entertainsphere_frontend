import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider} from "react-redux";
import "./App.css";
import WatchPage from "./component/WatchPage"
import SearchResultPage from "./component/SearchResultPage"
import Login from "./component/Login";
import PreHandler from "./prelogin/PreHandler";
import Feed from "./component/Feed";
import Body from "./component/Body";
import ProtectedRoute from "./component/ProtectedRoute";
import appStore from "./utils/appStore";

function App() {
  // const theme = useSelector((store)=>store.theme.theme)

  // {`min-h-screen transition-colors duration-500 ease-in-out ${theme === 'dark' ? 'bg-gradient-to-r from-blue-200  to-blue-100 text-gray-700' : 'bg-gradient-to-r from-blue-100  to-blue-300 text-black' }`}

  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={ <ProtectedRoute><PreHandler/></ProtectedRoute> } />
          <Route path="/login" element={<Login /> } />

          {/* Protected Route */}
          <Route 
            path="/app" 
            element={
             
                <Body />
            
            }
          >
            <Route index element={<Feed />} />
            <Route path="watch" element={<WatchPage />} />
            <Route path="results" element={<SearchResultPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
