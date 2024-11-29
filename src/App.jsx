import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import MemeCard from "./components/MemeCard";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Favorites from './pages/Favorites';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-7xl w-full">
          <main className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
