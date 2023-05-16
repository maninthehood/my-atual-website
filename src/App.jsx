import { Routes, Route } from 'react-router-dom';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Goals from './Pages/Goals';
import NavBar from './NavBar';
import Home from "./Pages/Home";
import Footer from './Pages/Footer'
import Profile from './Pages/Profile';

export default function App() {
	return (
			<>
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/goals" element={<Goals />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/profile" element={<Profile />} />
					</Routes>
					<Footer />
			</>
	);
}
