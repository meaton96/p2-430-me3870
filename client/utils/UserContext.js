import React, { createContext, useState, useEffect } from 'react';
import helper from './helper.js';


export const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState("");
    const [isBackButtonActive, setIsBackButtonActive] = useState(false);
    const [avatar, setAvatar] = useState("/assets/img/avatar-grey-small.png");
    const [newPostModalActive, setNewPostModalActive] = useState(false);
    const [newReplyModalActive, setNewReplyModalActive] = useState(false);

    useEffect(() => {
        const getAvatar = async () => {
            try {
                const avatr = await helper.getUserAvatar();
                if (avatr) {
                    setAvatar(avatr);
                }
            } catch (err) {
                console.error("Error getting avatar:", err);
            }
        };
        getAvatar();
    }, []);
    const handleBackButtonClicked = () => {
        setIsBackButtonActive(false);
        window.history.back();
    };

    useEffect(() => {
        const fetchUsername = async () => {
            try {
                const res = await helper.sendGet("/getUsername");
                if (res.username) {
                    setUsername(res.username);
                }
            } catch (err) {
                console.error("Error fetching username:", err);
            }
        };

        fetchUsername();
    }, []);

    return (
        <UserContext.Provider value={{
            username,
            isBackButtonActive,
            setIsBackButtonActive,
            handleBackButtonClicked,
            avatar,
            setAvatar,
            newPostModalActive,
            setNewPostModalActive,
            newReplyModalActive,
            setNewReplyModalActive
        }}>
            {children}
        </UserContext.Provider>
    );
};
