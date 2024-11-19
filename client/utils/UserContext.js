import React, { createContext, useState, useEffect } from 'react';
import helper from './helper.js';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState("");

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
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    );
};
