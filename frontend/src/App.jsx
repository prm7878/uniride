import React from 'react';
import AmbientBackground from './components/AmbientBackground';
import Header from './components/Header';
import SearchCard from './components/SearchCard';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import './styles/uniride.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <AmbientBackground />
            <Header />
            <div className="main-container">
                <div className="main-content">
                    <SearchCard />
                    <HeroSection />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;
