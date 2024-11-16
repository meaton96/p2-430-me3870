
const React = require('react');
const { useState } = React;
const { createRoot } = require('react-dom');
import Footer from './Footer.jsx';
import LoginModal from './LoginModal.jsx';






const LoginButtons = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    return (

        <>
        <div className="columns container">
            <div className='column is-half is-flex p-5'>
                <figure className="image is-square">
                    <img src="/assets/img/logo-large.png" alt="Kitchen" />
                </figure>
            </div>
            <div className="column is-half">
                <>
                    <div className='is-flex is-flex-direction-column m-5 is-justify-content-center is-align-items-center' style={{ height: '100vh' }}>
                        <div className='is-text-align-left pb-2 mb-3'>
                            <h1 className='title'>Get</h1>
                            <h1 className='title indent'>Cooking</h1>
                        </div>
                        <button type='button' className='login-btn with-google my-1'>
                            Sign in with Google
                        </button>
                        <button id='signUpButton' className='login-btn my-1' onClick={() => setShowSignup(true)}>
                            Signup
                        </button>
                        <h2 className='my-2 subtitle'>Already have an account?</h2>
                        <button id='loginButton' className='login-btn my-1' onClick={() => setShowLogin(true)}>
                            Login
                        </button>
                    </div>

                    
                    {showLogin && <LoginModal
                        title='Login'
                        onClose={() => setShowLogin(false)}
                    />}
                    {showSignup && <LoginModal
                        title='Signup'
                        onClose={() => setShowSignup(false)}
                    />}
                </>
            </div>
        </div>
        <Footer />
        </>

    );
};

const init = () => {
    const root = createRoot(document.querySelector('#content'));
    root.render(<LoginButtons />);
};

window.onload = init;

