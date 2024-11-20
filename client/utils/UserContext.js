import React, { createContext, useState, useEffect } from 'react';
import helper from './helper.js';


export const UserContext = createContext();
let breadcrumbs = [];
export const UserProvider = ({ children }) => {
    // const [username, setUsername] = useState("");
    const [isBackButtonActive, setIsBackButtonActive] = useState(false);


    const addBreadcrumb = (crumb) => {
        breadcrumbs.push(crumb);
        console.log("Breadcrumbs:", breadcrumbs);
    };
    const removeBreadcrumb = () => {
        breadcrumbs.pop();
        console.log("Breadcrumbs:", breadcrumbs);
    };
    const changeBasePage = (crumb) => {
        breadcrumbs[0] = crumb;
        console.log("Breadcrumbs:", breadcrumbs);
    };

    const handleBackButtonClicked = () => {
        console.log("Back button clicked");
        setIsBackButtonActive(false);

    };

    // useEffect(() => {
    //     const fetchUsername = async () => {
    //         try {
    //             const res = await helper.sendGet("/getUsername");
    //             if (res.username) {
    //                 setUsername(res.username);
    //             }
    //         } catch (err) {
    //             console.error("Error fetching username:", err);
    //         }
    //     };

    //     fetchUsername();
    // }, []);

    return (
        <UserContext.Provider value={{
            // username,
            //  setUsername,
            isBackButtonActive,
            setIsBackButtonActive,
            handleBackButtonClicked,
            breadcrumbs: [...breadcrumbs],
            addBreadcrumb,
            removeBreadcrumb,
            changeBasePage
        }}>
            {children}
        </UserContext.Provider>
    );
};
