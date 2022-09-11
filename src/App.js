import './App.css';
import Home from './components/Home';
import Bloggerwithblogs from './components/Bloggerwithblogs';
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Newblogger from './components/Newblogger';
import Addblogform from './components/Addblogform';

function App() {
  return (
    <div className="App">
			<Navbar />
			<Routes>
				<Route path ="/" element={<Home />} />
				<Route path = "/bloggers/:id" element={<Bloggerwithblogs />} />
				<Route path="/addbloggers" element={<Newblogger />} />
				<Route path="/addblog/:id" element={<Addblogform />} />
			</Routes>
    </div>
  );
}

export default App;
