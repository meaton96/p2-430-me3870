const React = require('react');
const { useState, useEffect, Suspense } = React;
const { createRoot } = require('react-dom/client');
const helper = require('./utils/helper.js');

// const Footer = React.lazy(() => import('./Footer.jsx'));
const Nav = React.lazy(() => import('./nav/Nav.jsx'));
const AccountSettings = React.lazy(() => import('./outlets/AccountSettings.jsx'));
const Feed = React.lazy(() => import('./outlets/Feed.jsx'));
const Pantry = React.lazy(() => import('./outlets/Pantry.jsx'));
const Recipes = React.lazy(() => import('./outlets/Recipes.jsx'));
const NewPostModal = React.lazy(() => import('./new-post/NewPostModal.jsx'));

const App = () => {

    const [avatar, setAvatar] = useState("/assets/img/avatar-grey-small.png");
    const [newPostModalActive, setNewPostModalActive] = useState(false);
    const [currentPage, setCurrentPage] = useState('AccountSettings');

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
    }, [avatar]);

    const handlePost = async (post) => {
        try {
            const res = await helper.sendPost("/simplePost", post);
            console.log(res);
        }
        catch (err) {
            console.error("Error posting:", err);
        }
    };

    const renderPage = () => {
        switch (currentPage) {
            case "Feed":
                return <Feed />;
            case "AccountSettings":
                return <AccountSettings
                    avatar={avatar}
                    setAvatar={setAvatar}
                    setNewPostModalActive={setNewPostModalActive}
                />;

            case "Pantry":
                return <Pantry />;
            case "Recipes":
                return <Recipes />;
            default:
                return <Feed />;
        }
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className='columns'>
                <Nav
                    setCurrentPage={setCurrentPage}
                    avatar={avatar}
                    setNewPostModalActive={setNewPostModalActive}
                />
                <div className='column is-three-quarters'>
                    {renderPage()}
                </div>
                {
                    <NewPostModal
                        isActive={newPostModalActive}
                        onClose={() => setNewPostModalActive(false)}
                        onPost={handlePost}
                        avatar={avatar}
                    />
                }
            </div>
            {/* <Footer /> */}
        </Suspense>
    );
};

const init = () => {
    const root = createRoot(document.querySelector('#app'));
    root.render(<App />);
}

window.onload = init;

export default App;
