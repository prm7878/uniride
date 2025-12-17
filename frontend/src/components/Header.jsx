import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/" className="logo">
                    <div className="logo-text">Uni<span>Ri</span>de</div>
                </Link>
                <div className="nav-actions">
                    <Link to="/login">
                        <button className="btn btn-ghost">Prijava</button>
                    </Link>
                    <Link to="/objavi">
                    <button className="btn btn-primary">Objavi prijevoz</button>
                    </Link>
                    <div className="avatar">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
