const React = require('react');
const { useState, useEffect, Suspense, useContext } = React;
const { createRoot } = require('react-dom/client');
const helper = require('./utils/helper.js');

const Nav = React.lazy(() => import('./nav/Nav.jsx'));
const AccountSettings = React.lazy(() => import('./outlets/AccountSettings.jsx'));
const Feed = React.lazy(() => import('./outlets/Feed.jsx'));
const Pantry = React.lazy(() => import('./outlets/Pantry.jsx'));
const Recipes = React.lazy(() => import('./outlets/Recipes.jsx'));
const NewPostModal = React.lazy(() => import('./new-post/NewPostModal.jsx'));
const Profile = React.lazy(() => import('./outlets/Profile.jsx'));
import { UserProvider, UserContext } from './utils/UserContext.js';


const App = () => {

    const [avatar, setAvatar] = useState("/assets/img/avatar-grey-small.png");
    const [newPostModalActive, setNewPostModalActive] = useState(false);
    const [currentPage, setCurrentPage] = useState('Feed');

     const { changeBasePage } = useContext(UserContext);
    
   

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
        }
        catch (err) {
            console.error("Error posting:", err);
        }
    };
    const handlePageChange = (page) => {
        //console.log("Page change to:", page);
        changeBasePage(page);
        setCurrentPage(page);
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
            case "Profile":
                return <Profile />;
            default:
                return <Feed />;
        }
    };

    changeBasePage(currentPage);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className='columns '>

                <Nav
                    handlePageChange={handlePageChange}
                    avatar={avatar}
                    setNewPostModalActive={setNewPostModalActive}
                />
                <div className='column is-three-quarters is-full-height'>
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

const Root = () => {
    return (
        <UserProvider>
            <App />
        </UserProvider>
    );
}

const init = () => {
    const root = createRoot(document.querySelector('#app'));
    root.render(
        <Root/>
    );
}

window.onload = init;

export default App;
