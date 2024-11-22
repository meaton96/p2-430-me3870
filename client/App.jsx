import React, { useState, Suspense, useContext } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './utils/UserContext.js';
import { UserContext } from './utils/UserContext.js';

// Lazy-loaded components
const Nav = React.lazy(() => import('./nav/Nav.jsx'));
const AccountSettings = React.lazy(() => import('./outlets/AccountSettings.jsx'));
const Feed = React.lazy(() => import('./outlets/Feed.jsx'));
const Pantry = React.lazy(() => import('./outlets/Pantry.jsx'));
const Recipes = React.lazy(() => import('./outlets/Recipes.jsx'));
const NewPostModal = React.lazy(() => import('./new-post/NewPostModal.jsx'));
const Profile = React.lazy(() => import('./outlets/Profile.jsx'));
const UserProfile = React.lazy(() => import('./outlets/UserProfile.jsx'));
const PostView = React.lazy(() => import('./outlets/PostView.jsx'));
const NewReplyModal = React.lazy(() => import('./new-post/NewReplyModal.jsx'));
const BottomLeftToast = React.lazy(() => import('./shared/BottomLeftToast.jsx'));


const App = () => {

    const { blToastActive } = useContext(UserContext);

    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <div className='columns'>
                    <Nav />
                    <div className='column is-three-quarters is-full-height'>
                        <Routes>
                            <Route path="/" element={<Feed />} />
                            <Route path="/app" element={<Feed />} />
                            <Route path="/feed" element={<Feed />} />
                            <Route path="/profile" element={<UserProfile />} />
                            <Route path="/profile/:username" element={<Profile />} />
                            <Route path="/profile/:username/post/:postId" element={<PostView />} />
                            <Route
                                path="/account-settings"
                                element={
                                    <AccountSettings />
                                }
                            />
                            <Route path="/pantry" element={<Pantry />} />
                            <Route path="/recipes" element={<Recipes />} />
                            <Route path="/*" element={<Feed />} />

                            {/* Add more routes as needed */}
                        </Routes>
                    </div>
                    <NewPostModal />
                    <NewReplyModal />

                    {
                        blToastActive && <BottomLeftToast />
                    }



                </div>
            </Suspense>
        </Router>
    );
};

const Root = () => (
    <UserProvider>
        <App />
    </UserProvider>
);

const init = () => {
    const root = createRoot(document.querySelector('#app'));
    root.render(<Root />);
};

window.onload = init;

export default App;
