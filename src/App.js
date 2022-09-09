import './App.css';
import Home from './components/Home';
import Bloggerwithblogs from './components/Bloggerwithblogs';
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
			<Navbar />
			<Routes>
				<Route path ="/" element={<Home />} />
				<Route path = "/bloggers/:id" element={<Bloggerwithblogs />} />
			</Routes>
    </div>
  );
}

export default App;
