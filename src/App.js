import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Market from './pages/Market';
import News from './pages/News';
import About from './pages/About';
import Exchanges from './pages/Exchanges';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 font-sans">
        <Header />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Market />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="text-center py-6 text-gray-500 border-t border-gray-700 mt-8">
          <p>Crypto Tracker Project</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;