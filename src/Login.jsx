import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.trim() || !pass.trim()) {
            alert("Please fill in all fields");
            return;
        }
        console.log(email);
        navigate("/main");
    };
        
    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <br/>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <br/>
            <p>Don't have an account?</p>
            <button className="register-btn" onClick={() => navigate("/register")}>
                Register Here
            </button>
        </div>
    );
};

export default Login;
