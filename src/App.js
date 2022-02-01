import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import NewsDetails from './components/newsDetails/NewsDetails';
import Terrariums from './components/terrariums/Terrariums';
import TerrariumDetails from './components/terrariumDetails/TerrariumDetails';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news/:id" element={<NewsDetails />} />
            <Route path="/terrariums" element={<Terrariums />} />
            <Route path='/terrariums/:id' element={<TerrariumDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
