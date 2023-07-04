import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer'
import Home from "./Pages/Home";
import About from './Pages/About';
import Goals from './Pages/Goals';
import Contacts from './Pages/Contacts';
import Blog from './Pages/Blog'
import Portfolio from './Pages/Portfolio';


export default function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/goals" element={<Goals />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/portfolio" element={<Portfolio />} />
			</Routes>
			<Footer />
		</>
	);
}
