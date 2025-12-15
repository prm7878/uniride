import React from 'react';

const AmbientBackground = () => {
    return (
        <>
            <div className="ambient-bg">
                <div className="ambient-orb orb-1"></div>
                <div className="ambient-orb orb-2"></div>
                <div className="ambient-orb orb-3"></div>
            </div>
            <div className="noise-overlay"></div>
        </>
    );
};

export default AmbientBackground;
