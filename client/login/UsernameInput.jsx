import React, { useState, useEffect } from "react";
const helper = require("../helper.js");

const UsernameInput = ({ username, setUsername, validate }) => {
    const [validUsername, setValidUsername] = useState(null); // null for no validation yet, true/false for results
    const [validationMessage, setValidationMessage] = useState("");

    useEffect(() => {
        const validateUsername = async () => {
			if (!username || !validate) {
				setValidUsername(null);
				setValidationMessage("");
				return;
			}
			if (username.length < 3) {
				setValidUsername(false);
				setValidationMessage("Username must be at least 3 characters long");
				return;
			}
		
			try {
				const res = await helper.sendPost("/validateUsername", { username });
				if (res.exists !== undefined) {
				setValidUsername(!res.exists);
				setValidationMessage(res.exists ? "Username is already taken" : "Username is available");
				} else {
				console.error("Unexpected response format:", res);
				setValidUsername(false);
				setValidationMessage("Error validating username");
				}
			} catch (err) {
				console.error("Error validating username:", err);
				setValidUsername(false);
				setValidationMessage("Error validating username");
			}
        };
      
        validateUsername();
      }, [username, validate]);

    return (
        <div className="field">
            <label className="label">Username</label>
            <div className={`control has-icons-left has-icons-right`}>
                <input
                    className={`input ${validUsername === null ? "" : validUsername ? "is-success" : "is-danger"}`}
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => 
                        setUsername(e.target.value)
                    }
                />
                <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                </span>
                {validUsername !== null && (
                    <span className="icon is-small is-right">
                        <i className={`fas ${validUsername ? "fa-check" : "fa-exclamation-triangle"}`}></i>
                    </span>
                )}
            </div>
            {validationMessage && (
                <p className={`help ${validUsername ? "is-success" : "is-danger"}`}>{validationMessage}</p>
            )}
        </div>
    );
};

export default UsernameInput;
