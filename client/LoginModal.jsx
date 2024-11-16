import React, { useState } from 'react';
const helper = require('./helper.js');

const LoginModal = ({ title, onClose }) => {
    // State for form inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [_title, setTitle] = useState(title);

    const handleLogin = (e) => {
        e.preventDefault();

        if (!username || !password) {
            return false;
        }

        helper.sendPost('/login', { username, pass: password });
        return false;
    };

    const handleSignup = (e) => {
        e.preventDefault();

        if (!username || !password || !confirmPassword) {
            return false;
        }
        if (password !== confirmPassword) {
            return false;
        }

        helper.sendPost('/signup', { username, pass: password, pass2: confirmPassword });
        return false;
    };

    return (
        <div className='modal is-active'>
            <div className='modal-background' onClick={onClose}></div>
            <div className='modal-card'>
                <header className='modal-card-head'>
                    <p className='modal-card-title'>{_title}</p>
                    <button className='delete' aria-label='close' onClick={onClose}></button>
                </header>
                <section className='modal-card-body is-flex is-justify-content-center'>
                    <form onSubmit={_title === 'Login' ? handleLogin : handleSignup} className='mainForm'>
                        <label htmlFor='username'>Username: </label>
                        <div className='control'>
                            <input
                                className='input'
                                id='user'
                                type='text'
                                name='username'
                                placeholder='username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <label htmlFor='pass'>Password: </label>
                        <div className='control'>
                            <input
                                className='input'
                                id='pass'
                                type='password'
                                name='password'
                                placeholder='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {_title === 'Signup' && (
                            <>
                                <label htmlFor='pass2'>Confirm Password: </label>
                                <div className='control'>
                                    <input
                                        className='input'
                                        id='pass2'
                                        type='password'
                                        name='confirmPassword'
                                        placeholder='confirm password'
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                            </>
                        )}
                        <input className='formSubmit button is-primary mt-3' type='submit' value={_title} />
                    </form>
                </section>
                <footer className='modal-card-foot is-flex is-justify-content-center mx-*'>
                    <button
                        className='button is-text'
                        onClick={() => setTitle(_title === 'Login' ? 'Signup' : 'Login')}
                    >
                        {_title === 'Login'
                            ? "Don't have an account? Signup"
                            : 'Already have an account? Login'}
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default LoginModal;