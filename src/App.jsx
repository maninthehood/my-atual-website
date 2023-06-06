import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer'
import Home from "./Pages/Home";
import Login from './Pages/Login';
import About from './Pages/About';
import Goals from './Pages/Goals';
import NotFound from './Pages/NotFound';
import Staff from './Pages/Staff';
import Visit from './Pages/Visit';
import Appoinments from './Pages/Appointments';
import Session from './Pages/Session';
import Dashboard from './Pages/Dashboard';
import Patient from './Pages/Patient';
import Employee from './Pages/Employee';



export default function App() {
  return (
    <div class="dark:bg-slate-900 selection:bg-fuchsia-300">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/profile" element={<Login />} />
        <Route path="/appointments" element={<Appoinments />} />
        <Route path="/session" element={<Session />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
