import React, { useState, Suspense, useContext } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './utils/UserContext.js';
import { UserContext } from './utils/UserContext.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


// Lazy-loaded components
//twitter clone
const NewPostModal = React.lazy(() => import('./modules/twitter-clone/new-post/NewPostModal.jsx'));
const NewReplyModal = React.lazy(() => import('./modules/twitter-clone/new-post/NewReplyModal.jsx'));


const Nav = React.lazy(() => import('./modules/nav/Nav.jsx'));
const AccountSettings = React.lazy(() => import('./outlets/AccountSettings.jsx'));
const Feed = React.lazy(() => import('./outlets/Feed.jsx'));
const Pantry = React.lazy(() => import('./outlets/Pantry.jsx'));
const Recipes = React.lazy(() => import('./outlets/Recipes.jsx'));
const Profile = React.lazy(() => import('./outlets/Profile.jsx'));
const UserProfile = React.lazy(() => import('./outlets/UserProfile.jsx'));
const PostView = React.lazy(() => import('./outlets/PostView.jsx'));
const BottomLeftToast = React.lazy(() => import('./shared/BottomLeftToast.jsx'));
const RecipeSearch = React.lazy(() => import('./outlets/RecipeSearch.jsx'));
const SingleRecipeContainer = React.lazy(() => import('./outlets/SingleRecipeContainer.jsx'));


const App = () => {

    const { blToastActive, setNewPostModalActive } = useContext(UserContext);

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
                            <Route path="/account-settings" element={<AccountSettings />} />
                            <Route path="/pantry" element={<Pantry />} />
                            <Route path="/recipes" element={<Recipes />} />
                            <Route path="/recipes/search" element={<RecipeSearch />} />
                            <Route path="/recipes/search/:recipeSource/:q" element={<RecipeSearch />} />
                            <Route path="/recipes/search/*" element={<RecipeSearch />} />

                            <Route path="/recipes/:source/:id" element={<SingleRecipeContainer />} />
                            <Route path="/*" element={<Feed />} />
                        </Routes>
                    </div>
                    <NewPostModal />
                    <NewReplyModal />
                    {
                        blToastActive && <BottomLeftToast />
                    }
                    <div className='is-hidden-tablet'>
                        <button className='new-post-mobile-btn is-fullwidth' onClick={() => setNewPostModalActive(true)}>
                            <FontAwesomeIcon icon={faPenToSquare} />

                        </button>
                    </div>



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
