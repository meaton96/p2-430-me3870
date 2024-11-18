const helper = require('./utils/helper.js');
const React = require('react');
const { useState, useEffect } = React;
const { createRoot } = require('react-dom/client');
import Footer from './Footer.jsx';
import Nav from './nav/Nav.jsx';
import AccountSettings from './outlets/AccountSettings.jsx';
import Feed from './outlets/Feed.jsx';
import Pantry from './outlets/Pantry.jsx';
import Recipes from './outlets/Recipes.jsx';

const App = () => {

    const [avatar, setAvatar] = useState("/assets/img/avatar-grey-small.png");

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
    
    const [currentPage, setCurrentPage] = useState('AccountSettings');

    const renderPage = () => {
        switch (currentPage) {
            case "Feed":
                return <Feed />;
            case "AccountSettings":
                return <AccountSettings 
                            avatar={avatar}
                            setAvatar={setAvatar}
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
        <>
        <div className='columns'>
            <Nav 
                setCurrentPage={setCurrentPage} 
                avatar={avatar}
            />
            <div className='column is-three-quarters'>
                {renderPage()}
            </div>
        </div>
        {/* <Footer /> */}
        </>
    );
};

const init = () => {
    const root = createRoot(document.querySelector('#app'));
    root.render(<App />);
}

window.onload = init;

export default App;
