import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer'
import Home from "./Pages/Home";
import Login from './Pages/Login';
import Staff from './Pages/Staff';
import Goals from './Pages/Goals';
import NotFound from './Pages/NotFound';

export default function App() {
	return (
		<div class="dark:bg-gray-900">
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/staff" element={<Staff />} />
				<Route path="/goals" element={<Goals />} />
				<Route path="/profile" element={<Login />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
}
