import React from "react";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import FeedPost from "./FeedPost.jsx";
import { getCssVariable } from "../utils/helper.js";

// Component to display a feed of posts
const SimplePostFeed = ({ endpoint }) => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch posts from the server
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch(endpoint);
                const resJson = await res.json();
                if (resJson) {
                    setPosts(resJson);
                }
            } catch (err) {
                console.error("Error getting posts:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);
    
    return (
        <div>
            <div className="is-flex is-flex-direction-column is-justify-content-center">
                {loading ? (
                    <div className="spinner-container">
                        <ClipLoader color={getCssVariable('--primary-color')} size={50} />
                    </div>
                ) : posts.length > 0 ? (
                    posts.map((post) => (
                        <FeedPost key={post._id} post={post} />
                    ))
                ) : (
                    <p>No posts found.</p>
                )}
            </div>
        </div>
    );
}

export default SimplePostFeed;