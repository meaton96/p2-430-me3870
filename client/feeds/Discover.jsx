import React from "react";
import { useState, useEffect } from "react";

const Discover = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        const fetchPosts = async () => {
            try {
                const res = await fetch("/simplePublicPosts");
                const resJson = await res.json();
                console.log(resJson);
                if (resJson) {
                    
                    setPosts(resJson);
                }
            }
            catch (err) {
                console.error("Error getting posts:", err);
            }
        }
        fetchPosts();

    }, []);


    return (
        <div>
            <h1>Discover New Posts</h1>
            <div className="is-flex flex-direction-column is-justify-content-center">
                {
                    posts.length > 0 ? posts.map((post) => (
                        <div key={post._id} className="card">
                            <div className="card-content">
                                <p>{post.content}</p>
                                <p>{post.author}</p>
                            </div>
                        </div>
                    ))
                    :
                    <p>No posts found.</p>

                }
            </div>

        </div>
    );
};

export default Discover;