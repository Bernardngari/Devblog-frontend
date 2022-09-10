import './App.css';
import Home from './components/Home';
import Bloggerwithblogs from './components/Bloggerwithblogs';
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Newblogger from './components/Newblogger';

function App() {
  return (
    <div className="App">
			<Navbar />
			<Routes>
				<Route path ="/" element={<Home />} />
				<Route path = "/bloggers/:id" element={<Bloggerwithblogs />} />
				<Route path="/addbloggers" element={<Newblogger />} />
			</Routes>
    </div>
  );
}

export default App;
