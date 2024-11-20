import React, { useState, useEffect, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import helper from './utils/helper.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

import { UserProvider } from './utils/UserContext.js';

const App = () => {
    const [avatar, setAvatar] = useState("/assets/img/avatar-grey-small.png");
    const [newPostModalActive, setNewPostModalActive] = useState(false);

    useEffect(() => {
        const getAvatar = async () => {
            try {
                const res = await helper.sendGet("/getAvatar");
                if (res.avatar) {
                    setAvatar(res.avatar);
                }
            } catch (err) {
                console.error("Error getting avatar:", err);
            }
        };
        getAvatar();
    }, []);

    const handlePost = async (post) => {
        try {
            const res = await helper.sendPost("/simplePost", post);
        } catch (err) {
            console.error("Error posting:", err);
        }
    };

    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <div className='columns'>
                    <Nav
                        avatar={avatar}
                        setNewPostModalActive={setNewPostModalActive}
                    />
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
                                    <AccountSettings
                                        avatar={avatar}
                                        setAvatar={setAvatar}
                                        setNewPostModalActive={setNewPostModalActive}
                                    />
                                }
                            />
                            <Route path="/pantry" element={<Pantry />} />
                            <Route path="/recipes" element={<Recipes />} />
                            <Route path="/*" element={<Feed />} />

                            {/* Add more routes as needed */}
                        </Routes>
                    </div>
                    <NewPostModal
                        isActive={newPostModalActive}
                        onClose={() => setNewPostModalActive(false)}
                        onPost={handlePost}
                        avatar={avatar}
                    />
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
