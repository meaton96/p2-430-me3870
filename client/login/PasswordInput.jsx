import React, { useState, useEffect } from "react";
const PasswordInput = ({ password, setPassword, confirmPassword, setConfirmPassword, showConfirm }) => {
    const [isValidPassword, setIsValidPassword] = useState(null);
    const [passwordMessage, setPasswordMessage] = useState("");
    const [isPasswordMatch, setIsPasswordMatch] = useState(null);
    const [confirmMessage, setConfirmMessage] = useState("");

    useEffect(() => {
        const validatePassword = () => {
            if (!password || !showConfirm) {
                setIsValidPassword(null);
                setPasswordMessage("");
                return;
            }
            if (password.length < 8) {
                setIsValidPassword(false);
                setPasswordMessage("Password must be at least 8 characters long");
                return;
            }
            if (!/\d/.test(password)) {
                setIsValidPassword(false);
                setPasswordMessage("Password must contain at least one number");
                return;
            }
            if (!/[A-Z]/.test(password)) {
                setIsValidPassword(false);
                setPasswordMessage("Password must contain at least one uppercase letter");
                return;
            }
            setIsValidPassword(true);
            setPasswordMessage("Password is strong");
        };

        validatePassword();
    }, [password, showConfirm]);

    useEffect(() => {
        if (!confirmPassword) {
            setIsPasswordMatch(null);
            setConfirmMessage("");
            return;
        }

        if (password === confirmPassword) {
            setIsPasswordMatch(true);
            setConfirmMessage("Passwords match");
        } else {
            setIsPasswordMatch(false);
            setConfirmMessage("Passwords do not match");
        }
    }, [password, confirmPassword]);

    return (
        <>
            <div className="field">
                <label className="label">Password</label>
                <div className={`control has-icons-left has-icons-right`}>
                    <input
                        className={`input ${isValidPassword === null ? "" : isValidPassword ? "is-success" : "is-danger"}`}
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                    </span>
                    {isValidPassword !== null && (
                        <span className="icon is-small is-right">
                            <i className={`fas ${isValidPassword ? "fa-check" : "fa-exclamation-triangle"}`}></i>
                        </span>
                    )}
                </div>
                {passwordMessage && (
                    <p className={`help ${isValidPassword ? "is-success" : "is-danger"}`}>{passwordMessage}</p>
                )}
            </div>

            {showConfirm && (
                <div className="field">
                    <label className="label">Confirm Password</label>
                    <div className={`control has-icons-left has-icons-right`}>
                        <input
                            className={`input ${isPasswordMatch === null ? "" : isPasswordMatch ? "is-success" : "is-danger"}`}
                            type="password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                        {isPasswordMatch !== null && (
                            <span className="icon is-small is-right">
                                <i className={`fas ${isPasswordMatch ? "fa-check" : "fa-exclamation-triangle"}`}></i>
                            </span>
                        )}
                    </div>
                    {confirmMessage && (
                        <p className={`help ${isPasswordMatch ? "is-success" : "is-danger"}`}>{confirmMessage}</p>
                    )}
                </div>
            )}
        </>
    );
};

export default PasswordInput;
