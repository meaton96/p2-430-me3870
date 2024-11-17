import React, { useState } from "react";
import UsernameInput from "./UsernameInput.jsx";
import PasswordInput from "./PasswordInput.jsx";

const LoginModal = ({ title, onClose }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [_title, setTitle] = useState(title);

    const handleLogin = (e) => {
        e.preventDefault();
        if (!username || !password) return false;

        helper.sendPost("/login", { username, pass: password });
        return false;
    };

    const handleSignup = (e) => {
        e.preventDefault();
        if (!username || !password || !confirmPassword) return false;
        if (password !== confirmPassword) return false;

        helper.sendPost("/signup", { username, pass: password, pass2: confirmPassword });
        return false;
    };

    return (
        <div className="modal is-active">
            <div className="modal-background" onClick={onClose}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{_title}</p>
                    <button className="delete" aria-label="close" onClick={onClose}></button>
                </header>
                <section className="modal-card-body">
                    <form onSubmit={_title === "Login" ? handleLogin : handleSignup}>
                        <UsernameInput 
                            username={username} 
                            setUsername={setUsername} 
                            validate={_title === "Signup"}
                        />
                        <PasswordInput
                            password={password}
                            setPassword={setPassword}
                            confirmPassword={confirmPassword}
                            setConfirmPassword={setConfirmPassword}
                            showConfirm={_title === "Signup"} // Only show confirm password for Signup
                        />

                        <button className="button is-primary mt-3" type="submit">
                            {_title}
                        </button>
                    </form>
                </section>
                <footer className="modal-card-foot">
                    <button
                        className="button is-text"
                        onClick={() => setTitle(_title === "Login" ? "Signup" : "Login")}
                    >
                        {_title === "Login" ? "Don't have an account? Signup" : "Already have an account? Login"}
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default LoginModal;
