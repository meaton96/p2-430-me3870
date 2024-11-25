import React, { useState } from "react";
import UsernameInput from "./UsernameInput.jsx";
import PasswordInput from "../../shared/PasswordInput.jsx";
import SelectAvatar from "../../shared/SelectAvatar.jsx";
import { ClipLoader } from "react-spinners"; // Import spinner
import helper from "../../utils/helper.js";


//Modal component to handle allowing the user to login or signup
const LoginModal = ({ title, onClose }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [_title, setTitle] = useState(title);
    const [selectAvatar, setSelectAvatar] = useState(false);
    const [loginError, setLoginError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [validationMessage, setValidationMessage] = useState("");
    const [validUsername, setValidUsername] = useState(null);

    //Function to handle the login process
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!username) return;
        if (!password) return;

        try {
            const res = await helper.sendPost("/login", { username, pass: password });
            if (res.error) {
                setLoginError("Incorrect username or password");
            } else {
                setLoginError("");
                onClose();
            }
        } catch (err) {
            console.error("Error during login:", err);
            setLoginError("An unexpected error occurred");
        }
    };

    //Function to handle the signup process
    const handleSignup = async (e) => {
        e.preventDefault();
        if (!username || !password || !confirmPassword) return;
        if (password !== confirmPassword) return;

        setIsLoading(true);
        try {
            const res = await helper.sendPost("/signup", { username, pass: password, pass2: confirmPassword });
            if (res.status === 200) {
                setSelectAvatar(true);
            } else {
                if (res.error) {
                    setValidUsername(false);
                    setValidationMessage("profanity is not allowed");
                }
            }
        } catch (err) {
            setValidationMessage("something happened");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="modal is-active login-modal">
            <div
                className="modal-background"
                onClick={() => {
                    if (!selectAvatar) onClose();
                }}
            ></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{_title}</p>
                    <button
                        className="delete"
                        aria-label="close"
                        onClick={() => {
                            if (!selectAvatar) onClose();
                        }}
                    ></button>
                </header>
                <section className="modal-card-body">
                    <>
                        {!selectAvatar ? (
                            <form onSubmit={_title === "Login" ? handleLogin : handleSignup}>
                                <UsernameInput
                                    username={username}
                                    setUsername={setUsername}
                                    validate
                                    isSignup={_title === "Signup"}
                                    validationMessage={validationMessage}
                                    setValidationMessage={setValidationMessage}
                                    validUsername={validUsername}
                                    setValidUsername={setValidUsername}
                                />
                                <PasswordInput
                                    password={password}
                                    setPassword={setPassword}
                                    confirmPassword={confirmPassword}
                                    setConfirmPassword={setConfirmPassword}
                                    showConfirm={_title === "Signup"}
                                />
                                {_title === "Login" && loginError && (
                                    <p className="help is-danger">{loginError}</p>
                                )}
                                {isLoading ? (
                                    <div className="spinner-container">
                                        <ClipLoader color={helper.getCssVariable('--primary-color')} size={30} />
                                    </div>
                                ) : (
                                    <button className="button modal-login-btn mt-3" type="submit">
                                        {_title}
                                    </button>
                                )}
                            </form>
                        ) : (
                            <SelectAvatar
                                gridMin={"is-col-min-3"}
                                forward={true}
                                onClose={onClose}
                            />
                        )}
                    </>
                </section>
                {!selectAvatar && (
                    <footer className="modal-card-foot">
                        <button
                            className="button is-text"
                            onClick={() => setTitle(_title === "Login" ? "Signup" : "Login")}
                        >
                            {_title === "Login"
                                ? "Don't have an account? Signup"
                                : "Already have an account? Login"}
                        </button>
                    </footer>
                )}
            </div>
        </div>
    );
};

export default LoginModal;
