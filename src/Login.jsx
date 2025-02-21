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

        const userData = JSON.parse(localStorage.getItem(email));

        if (!userData || userData.pass !== pass) {
            alert("Invalid email or password");
            return;
        }

        console.log("Logging in:", userData.name);
        navigate("/main", { state: { username: userData.name } });
    };

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" required />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" required />
                <button type="submit">Log In</button>
            </form>

            <p>Don't have an account?</p>
            <button className="register-btn" onClick={() => navigate("/register")}>
                Register Here
            </button>
        </div>
    );
};

export default Login;
