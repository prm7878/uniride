import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/ObjaviPrijevoz.css';

const ObjaviPrijevoz = () => {
    const cities = [
        "Zagreb",
        "Split",
        "Rijeka",
        "Osijek",
        "Zadar",
        "Pula",
        "Dubrovnik",
        "Karlovac",
        "Varaždin",
        "Šibenik",
        "Slavonski Brod",
        "Velika Gorica"
    ];

    const [formData, setFormData] = useState({
        polaziste_grad: '',
        polaziste_ulica: '',
        odrediste_grad: '',
        odrediste_ulica: '',
        broj_putnika: '',
        datum: '',
        vrijeme: '',
        cijena: ''
    });

    const [showPolazisteGradSuggestions, setShowPolazisteGradSuggestions] = useState(false);
    const [showOdredisteGradSuggestions, setShowOdredisteGradSuggestions] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [selectedHour, setSelectedHour] = useState('08');
    const [selectedMinute, setSelectedMinute] = useState('00');

    const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
    const minutes = ['00', '15', '30', '45'];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDateChange = (date) => {
        const formatted = date.toLocaleDateString('hr-HR');
        setFormData({ ...formData, datum: formatted });
        setShowCalendar(false);
    };

    const handleTimeSelect = () => {
        const formatted = `${selectedHour}:${selectedMinute}`;
        setFormData({ ...formData, vrijeme: formatted });
        setShowTimePicker(false);
    };

    const selectCity = (field, city) => {
        setFormData({ ...formData, [field]: city });
        if (field === 'polaziste_grad') setShowPolazisteGradSuggestions(false);
        if (field === 'odrediste_grad') setShowOdredisteGradSuggestions(false);
    };

    const filterCities = (input) => {
        if (!input) return cities;
        return cities.filter(city => 
            city.toLowerCase().startsWith(input.toLowerCase())
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Objava prijevoza:', formData);
    };

    return (
        <section className="objavi-section">
            <div className="objavi-header">
                <p className="tagline">Novi prijevoz</p>
                <h1>Objavi <span>vožnju</span></h1>
                <p className="subtitle">Popuni podatke o svojoj vožnji i pronađi suputnike koji putuju istim putem.</p>
            </div>

            <form className="objavi-form" onSubmit={handleSubmit}>
                {/* Polazište */}
                <div className="form-section">
                    <h3 className="section-title">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <circle cx="12" cy="10" r="3" strokeWidth="2"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21c-4-4-8-7.5-8-11a8 8 0 1116 0c0 3.5-4 7-8 11z"/>
                        </svg>
                        Polazište
                    </h3>
                    <div className="input-row">
                        <div className="input-group">
                            <label htmlFor="polaziste_grad">Grad</label>
                            <div className="autocomplete-wrapper">
                                <input
                                    type="text"
                                    id="polaziste_grad"
                                    name="polaziste_grad"
                                    className="input-field"
                                    placeholder="npr. Zagreb"
                                    value={formData.polaziste_grad}
                                    onChange={handleChange}
                                    onFocus={() => setShowPolazisteGradSuggestions(true)}
                                    onBlur={() => setTimeout(() => setShowPolazisteGradSuggestions(false), 200)}
                                    autoComplete="off"
                                    required
                                />
                                {showPolazisteGradSuggestions && filterCities(formData.polaziste_grad).length > 0 && (
                                    <ul className="autocomplete-dropdown">
                                        {filterCities(formData.polaziste_grad).map(city => (
                                            <li 
                                                key={city}
                                                onClick={() => selectCity('polaziste_grad', city)}
                                            >
                                                {city}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="polaziste_ulica">Ulica</label>
                            <input
                                type="text"
                                id="polaziste_ulica"
                                name="polaziste_ulica"
                                className="input-field"
                                placeholder="npr. Ilica 1"
                                value={formData.polaziste_ulica}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Odredište */}
                <div className="form-section">
                    <h3 className="section-title">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        Odredište
                    </h3>
                    <div className="input-row">
                        <div className="input-group">
                            <label htmlFor="odrediste_grad">Grad</label>
                            <div className="autocomplete-wrapper">
                                <input
                                    type="text"
                                    id="odrediste_grad"
                                    name="odrediste_grad"
                                    className="input-field"
                                    placeholder="npr. Split"
                                    value={formData.odrediste_grad}
                                    onChange={handleChange}
                                    onFocus={() => setShowOdredisteGradSuggestions(true)}
                                    onBlur={() => setTimeout(() => setShowOdredisteGradSuggestions(false), 200)}
                                    autoComplete="off"
                                    required
                                />
                                {showOdredisteGradSuggestions && filterCities(formData.odrediste_grad).length > 0 && (
                                    <ul className="autocomplete-dropdown">
                                        {filterCities(formData.odrediste_grad).map(city => (
                                            <li 
                                                key={city}
                                                onClick={() => selectCity('odrediste_grad', city)}
                                            >
                                                {city}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="odrediste_ulica">Ulica</label>
                            <input
                                type="text"
                                id="odrediste_ulica"
                                name="odrediste_ulica"
                                className="input-field"
                                placeholder="npr. Riva 5"
                                value={formData.odrediste_ulica}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                {/* Detalji vožnje */}
                <div className="form-section">
                    <h3 className="section-title">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Detalji vožnje
                    </h3>
                    <div className="input-row input-row-3">
                        <div className="input-group">
                            <label htmlFor="datum">Datum</label>
                            <div className="calendar-wrapper">
                                <input
                                    type="text"
                                    id="datum"
                                    name="datum"
                                    className="input-field"
                                    placeholder="Odaberi datum"
                                    value={formData.datum}
                                    onFocus={() => setShowCalendar(true)}
                                    readOnly
                                    required
                                />
                                {showCalendar && (
                                    <>
                                        <div 
                                            className="calendar-overlay" 
                                            onClick={() => setShowCalendar(false)}
                                        />
                                        <div className="calendar-container">
                                            <Calendar
                                                onChange={handleDateChange}
                                                minDate={new Date()}
                                                locale="hr-HR"
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="vrijeme">Vrijeme</label>
                            <div className="time-wrapper">
                                <input
                                    type="text"
                                    id="vrijeme"
                                    name="vrijeme"
                                    className="input-field"
                                    placeholder="Odaberi vrijeme"
                                    value={formData.vrijeme}
                                    onFocus={() => setShowTimePicker(true)}
                                    readOnly
                                    required
                                />
                                {showTimePicker && (
                                    <>
                                        <div 
                                            className="time-overlay" 
                                            onClick={() => setShowTimePicker(false)}
                                        />
                                        <div className="time-picker-container">
                                            <div className="time-picker-header">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                                                    <path strokeLinecap="round" strokeWidth="2" d="M12 6v6l4 2"/>
                                                </svg>
                                                Odaberi vrijeme
                                            </div>
                                            <div className="time-picker-body">
                                                <div className="time-column">
                                                    <div className="time-column-label">Sat</div>
                                                    <div className="time-scroll">
                                                        {hours.map(hour => (
                                                            <div
                                                                key={hour}
                                                                className={`time-option ${selectedHour === hour ? 'active' : ''}`}
                                                                onClick={() => setSelectedHour(hour)}
                                                            >
                                                                {hour}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="time-separator">:</div>
                                                <div className="time-column">
                                                    <div className="time-column-label">Min</div>
                                                    <div className="time-scroll">
                                                        {minutes.map(minute => (
                                                            <div
                                                                key={minute}
                                                                className={`time-option ${selectedMinute === minute ? 'active' : ''}`}
                                                                onClick={() => setSelectedMinute(minute)}
                                                            >
                                                                {minute}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="time-picker-footer">
                                                <button 
                                                    type="button" 
                                                    className="time-btn time-btn-cancel"
                                                    onClick={() => setShowTimePicker(false)}
                                                >
                                                    Odustani
                                                </button>
                                                <button 
                                                    type="button" 
                                                    className="time-btn time-btn-confirm"
                                                    onClick={handleTimeSelect}
                                                >
                                                    Potvrdi
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="broj_putnika">Broj putnika</label>
                            <input
                                type="number"
                                id="broj_putnika"
                                name="broj_putnika"
                                className="input-field"
                                placeholder="1-8"
                                min="1"
                                max="8"
                                value={formData.broj_putnika}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Cijena */}
                <div className="form-section">
                    <h3 className="section-title">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Cijena
                    </h3>
                    <div className="input-group cijena-group">
                        <label htmlFor="cijena">Cijena po putniku</label>
                        <div className="cijena-input-wrapper">
                            <input
                                type="number"
                                id="cijena"
                                name="cijena"
                                className="input-field"
                                placeholder="0.00"
                                min="0"
                                step="0.5"
                                value={formData.cijena}
                                onChange={handleChange}
                                required
                            />
                            <span className="currency">EUR</span>
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                    </svg>
                    Objavi prijevoz
                </button>
            </form>
        </section>
    );
};

export default ObjaviPrijevoz;