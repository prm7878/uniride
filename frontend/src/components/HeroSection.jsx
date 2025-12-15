import React from 'react';

const HeroSection = ({ imageSrc = null }) => {
    return (
        <section className="hero-section">
            <div className="hero-image-container">
                <div className="hero-image">
                    {imageSrc ? (
                        <img src={imageSrc} alt="Studenti" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                        <div className="placeholder-img">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>Hero slika</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="stats-card stats-card-1">
                <div className="stats-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>
                </div>
                <div className="stats-content">
                    <h4>2,500+</h4>
                    <p>Aktivnih studenata</p>
                </div>
            </div>

            <div className="stats-card stats-card-2">
                <div className="stats-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
                <div className="stats-content">
                    <h4>15,000+</h4>
                    <p>Uspješnih vožnji</p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
