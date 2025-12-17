import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from "react";
import '../index.css'

const Header = () => {
    /*LoggedIn varijabla je temp var za togglanje vrste dropdowna kasnije treba promijeniti kad napravimo login logic*/ 
    const LoggedIn = true; 
    const [visible, setVisible] = useState(false);
    const dropdownRef = useRef(null);

    const buttonHandler = () => {
        setVisible(current => !current); 
        {console.log("Dropdown menu"+visible)};    
    };

    useEffect(() => {
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setVisible(false);
        }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
    }, []);

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
                    <button className="btn btn-primary">Objavi prijevoz</button>

                    <div className="relative inline-block avatar-container" ref={dropdownRef}>
                    <button className="avatar" onClick={buttonHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </button>

                    {visible && (
                        <>
                            {LoggedIn ? (
                                <div className="dropdown-menu">
                                <Link ><div className='text-white dropdown-item'>Profil</div></Link>
                                <Link ><div className='text-white dropdown-item'>Postavke</div></Link>
                                <div class="dropdown-divider"></div>
                                <Link ><div className='text-white dropdown-item'>Odjava</div></Link>
                                </div>
                            ) : (
                                <div className='dropdown-menu-transparent'>
                                <button className='btn btn-primary'><Link to="/login"><div className='text-white'>Prijavi se</div></Link></button>
                                </div>
                            )}
                        </>
                    )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
