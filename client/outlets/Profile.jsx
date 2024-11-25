import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import PostView from './PostView.jsx';
import UnderConstruction from '../shared/UnderConstruction.jsx';

const Profile = () => {
    const { username } = useParams();

    return (
        <div>
            <Routes>
                <Route path="/" element={<ProfileDetails />} />
                <Route path="post/:postId" element={<PostView />} />
            </Routes>
        </div>
    );
};

const ProfileDetails = () => {

    return (
        <div>
            <UnderConstruction />
        </div>
    )


}

export default Profile;
