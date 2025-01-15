import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/Landing";
import TwitterDashboard from "./pages/TwitterDashboard";
import YoutubeDashboard from "./pages/YoutubeDashboard";
import DocumentDashboard from "./pages/DocumentDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/twitter" element={<TwitterDashboard />} />
        <Route path="/dashboard/youtube"  element={<YoutubeDashboard/>} />
        <Route path="/dashboard/text" element={<DocumentDashboard/>}/>
      </Routes>
    </>
  );
}

export default App;
