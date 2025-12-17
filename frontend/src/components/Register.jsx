import { useState } from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: ovdje ide poziv na backend (login)
    console.log({ name, surname, email, password });
    navigate("/login");
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Register</h2>

        <input 
            type="text"
            placeholder="Ime"
            value={name} 
            onChange={(e) => setName(e.target.value)}
            className="login-input"
            required
        />

        <input 
            type="text" 
            placeholder="Prezime"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="login-input"
            required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
          required
        />

        <input
          type="password"
          placeholder="Lozinka"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          required
        />

        <button type="submit" className="login-button">
          Registriraj se
        </button>
      </form>
      <div className="login-footer">Imaš račun? <Link to="/login">Prijavi se</Link></div>
    </div>
  );
}
