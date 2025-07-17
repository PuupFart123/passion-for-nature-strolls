import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutStrolls from './pages/AboutStrolls';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about-strolls':
        return <AboutStrolls />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App; 