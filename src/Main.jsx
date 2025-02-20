import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./main.css";

const Main = () => {
    const [aboutMeText, setAboutMeText] = useState("");
    const [submittedText, setSubmittedText] = useState("");
    const navigate = useNavigate();

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
        localStorage.clear(); // Clear all stored data (including user session)
        navigate("/"); // Redirect to Login page
    };

    return (
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

            {/* Logout Button */}
            <button className="logout-btn" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Main;
