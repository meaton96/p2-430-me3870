import React, { useState, useEffect } from "react";
import { sendGet, sendPost } from "./helper";



const SelectAvatar = ({ username  }) => {
    const [avatars, setAvatars] = useState([]);
    const [curAvatar, setCurAvatar] = useState({ file: "/assets/img/avatar-grey.png" });

    useEffect(() => {
        const getAvatars = async () => {
            try {
                const res = await sendGet("/getDefaultAvatars");
                if (res.avatars) {
                    console.log(res);
                    setAvatars(res.avatars);
                }
            }
            catch (err) {
                console.error("Error getting avatars:", err);
            }

        }
        getAvatars();


    }, []);

    const setAvatar = async () => {
        try {
            const res = await sendPost("/changeAvatar", { username, avatar: curAvatar.file });
            if (res.avatar) {
                console.log("Avatar set to:", res.avatar);
            }
        }
        catch (err) {

            console.error("Error setting avatar:", err);
        }
    };

    return (
        <>
            <h1 className="is-size-1 has-text-white">Select an Avatar</h1>
            <div className="columns">
                <div className="column is-half">
                    <figure className="image is-square">
                        <img src={curAvatar.file} alt={curAvatar} />
                    </figure>
                </div>
                <div className="column is-half">

                    <div className="grid is-col-min-1">
                        {avatars.map((avatar) => (
                            <div key={avatar} className="cell">
                                <figure className="image is-96x96">
                                    <img src={avatar.file} alt={avatar.name} onClick={() => setCurAvatar(avatar)} />
                                </figure>
                            </div>))}
                    </div>
                </div>
            </div>
            <div className="is-flex is-justify-content-center">
                <button className="button is-primary" onClick={() => {
                    setAvatar();
                     window.location = '/app';
                }}>
                    Select Avatar</button>
            </div>
        </>
    );
}

export default SelectAvatar;