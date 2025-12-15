import React, { useState } from 'react';

const SearchCard = () => {
    const [formData, setFormData] = useState({
        polaziste: '',
        odrediste: '',
        datum: '',
        brojPutnika: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Pretraga:', formData);
    };

    return (
        <section className="search-section">
            <p className="tagline">Studentski prijevoz</p>
            <h1>Putuj pametnije,<br /><span>dijeli vožnju.</span></h1>
            <p className="subtitle">Pronađi studente koji putuju istim putem. Uštedi novac, upoznaj nove ljude i smanji svoj ugljični otisak.</p>

            <form className="search-card" onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="input-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <circle cx="12" cy="10" r="3" strokeWidth="2"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21c-4-4-8-7.5-8-11a8 8 0 1116 0c0 3.5-4 7-8 11z"/>
                        </svg>
                        <input 
                            type="text" 
                            className="input-field" 
                            placeholder="Polazište (npr. Zagreb)"
                            name="polaziste"
                            value={formData.polaziste}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="input-group">
                    <div className="input-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        <input 
                            type="text" 
                            className="input-field" 
                            placeholder="Odredište (npr. Split)"
                            name="odrediste"
                            value={formData.odrediste}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="input-row">
                    <div className="input-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2"/>
                            <path strokeLinecap="round" strokeWidth="2" d="M16 2v4M8 2v4M3 10h18"/>
                        </svg>
                        <input 
                            type="text" 
                            className="input-field" 
                            placeholder="Datum"
                            name="datum"
                            value={formData.datum}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        <input 
                            type="number" 
                            className="input-field" 
                            placeholder="Broj putnika" 
                            min="1" 
                            max="8"
                            name="brojPutnika"
                            value={formData.brojPutnika}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary search-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                    Pronađi prijevoz
                </button>
            </form>
        </section>
    );
};

export default SearchCard;
