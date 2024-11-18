import React, { useState } from "react";
import UsernameInput from "./UsernameInput.jsx";
import PasswordInput from "./PasswordInput.jsx";
import SelectAvatar from "./SelectAvatar.jsx";
import helper from "./helper.js";

//Modal component to handle allowing the user to login or signup
const LoginModal = ({ title, onClose }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [_title, setTitle] = useState(title);
    const [selectAvatar, setSelectAvatar] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if (!username || !password) return false;

        helper.sendPost("/login", { username, pass: password });
        return false;
    };

    const handleSignup = async (e) => {
       
        e.preventDefault();
        if (!username || !password || !confirmPassword) return false;
        if (password !== confirmPassword) return false;

        const res = await helper.sendPost("/signup", { username, pass: password, pass2: confirmPassword });
        if (res) {
            setSelectAvatar(true);
        }
        return false;
    };
    

    return (
        <div className="modal is-active">
            <div className="modal-background" onClick={() => {
                if (!selectAvatar)
                    onClose();
                } 
            }></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{_title}</p>
                    <button className="delete" aria-label="close" onClick={() => {
                        if (!selectAvatar)
                            onClose();
                        }
                    }>

                    </button>
                </header>
                <section className="modal-card-body">
                    <>
                    {!selectAvatar ? 
                    (
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
                            showConfirm={_title === "Signup"}
                        />

                        <button className="button is-primary mt-3" type="submit">
                            {_title}
                        </button>
                    </form>
                    ) : 
                    (
                        <SelectAvatar 
                         username={username}
                        />
                    )}
                    </>
                    
                </section>
                {!selectAvatar && <footer className="modal-card-foot">
                    <button
                        className="button is-text"
                        onClick={() => setTitle(_title === "Login" ? "Signup" : "Login")}
                    >
                        {_title === "Login" ? "Don't have an account? Signup" : "Already have an account? Login"}
                    </button>
                </footer>}
                
            </div>
        </div>
    );
};

export default LoginModal;
