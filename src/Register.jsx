import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.trim() || !pass.trim() || !name.trim()) {
            alert("Please fill in all fields");
            return;
        }

        localStorage.setItem(email, JSON.stringify({ name, email, pass }));

        alert("Registration successful! Please log in.");
        navigate("/");
    };

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" required />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" required />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" required />
                <button type="submit">Register</button>
            </form>

            <p>Already have an account?</p>
            <button className="login-btn" onClick={() => navigate("/")}>
                Login Here
            </button>
        </div>
    );
};

export default Register;
