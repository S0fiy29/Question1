import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./main.css";

const Main = () => {
    const [aboutMeText, setAboutMeText] = useState("");
    const [submittedText, setSubmittedText] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const username = location.state?.username || "Guest";

    useEffect(() => {
        const draft = localStorage.getItem("aboutMeDraft");
        if (draft) {
            setAboutMeText(draft);
        }
    }, []);

    const handleChange = (e) => {
        setAboutMeText(e.target.value);
    };

    const handleSaveDraft = () => {
        localStorage.setItem("aboutMeDraft", aboutMeText);
        alert("Draft saved!");
    };

    const handleSubmit = () => {
        if (!aboutMeText.trim()) {
            alert("Please enter something before submitting.");
            return;
        }
        setSubmittedText(aboutMeText);
        localStorage.removeItem("aboutMeDraft");
        setAboutMeText("");
        alert("About Me section submitted successfully!");
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <div className="main-container">
            <div className="profile-container">
                <h2>Welcome, {username}!</h2> {/* Display user's name */}
                <p>This is your profile page.</p>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>

            <div className="about-me-container">
                <h2>Update About Me</h2>
                <textarea
                    value={aboutMeText}
                    onChange={handleChange}
                    placeholder="Write something about yourself..."
                    rows="5"
                />
                <div className="button-group">
                    <button className="draft-btn" onClick={handleSaveDraft}>
                        Save as Draft
                    </button>
                    <button className="submit-btn" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>

                {submittedText && (
                    <div className="submitted-text">
                        <h3>Your Submitted "About Me":</h3>
                        <p>{submittedText}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Main;
