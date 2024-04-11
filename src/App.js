import "./App.css";
import LandingScreen from "./components/LandingScreen/LandingScreen";
import Login from "./components/LoginForm/Login";
import Signup from "./components/SignUpForm/Signup";
import Profile from "./components/Profile/Profile"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile
         />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
