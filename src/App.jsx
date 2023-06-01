import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer'
import Home from "./Pages/Home";
import Login from './Pages/Login';
import About from './Pages/About';
import Goals from './Pages/Goals';
import NotFound from './Pages/NotFound';
import Staff from './Pages/Staff';



export default function App() {
	return (
		<div class="dark:bg-slate-900">
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/goals" element={<Goals />} />
				<Route path="/staff" element={<Staff />} />
				<Route path="/profile" element={<Login />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
}
