import React, { useState, useEffect } from "react";
import { sendGet, sendPost } from "../utils/helper";



const SelectAvatar = ({gridMin, forward, onClose, setAvatar}) => {
    const [avatars, setAvatars] = useState([]);
    const [curAvatar, setCurAvatar] = useState({ file: "/assets/img/avatar-grey-small.png" });

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

    const _setAvatar = async () => {
        try {
            const res = await sendPost("/changeAvatar", { avatar: curAvatar.file });
            if (res.avatar) {
                if (setAvatar)
                    setAvatar(curAvatar.file);
                if (forward)
                    window.location = '/app';
                else
                    onClose();
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

                    <div className={`grid ${gridMin}`}>
                        {avatars.map((avatar) => (
                            <div key={avatar} className="cell">
                                <button>
                                    <img 
                                        className="chose-avatar-image"
                                        src={avatar.file} 
                                        alt={avatar.name} 
                                        onClick={() => setCurAvatar(avatar)} 
                                    />
                                </button>
                            </div>))}
                    </div>
                </div>
            </div>
            <div className="is-flex is-justify-content-center">
                <button className="button is-primary" onClick={() => {
                    _setAvatar();
                   
                }}>
                    Select Avatar</button>
            </div>
        </>
    );
}

export default SelectAvatar;