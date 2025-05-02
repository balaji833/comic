import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Comics from './pages/Comics';
import ComicView from './pages/ComicView';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comic/:id" element={<ComicView />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;