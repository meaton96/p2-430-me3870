import React, { useState, useEffect, useRef } from "react";
import { ClipLoader } from "react-spinners";
import FeedPost from "./FeedPost.jsx";
import { getCssVariable } from "../../../utils/helper.js";

// Component to display a feed of posts
const SimplePostFeed = ({ endpoint }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isFetching, setIsFetching] = useState(false);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const limit = 10;
    const sentinelRef = useRef(null);

    // Fetch posts from the server
    useEffect(() => {
        const fetchPosts = async () => {
            setIsFetching(true);
            try {
                const skip = page * limit;
                const res = await fetch(`${endpoint}?skip=${skip}&limit=${limit}`);
                const resJson = await res.json();
                if (resJson && resJson.length > 0) {
                    setPosts((prevPosts) => [...prevPosts, ...resJson]);
                } else {
                    setHasMore(false);
                }
            } catch (err) {
                console.error("Error getting posts:", err);
            } finally {
                setIsFetching(false);
                setLoading(false);
            }
        };
        fetchPosts();
    }, [page, endpoint]);

    //Endless scrolling thanks to chat gpt
    useEffect(() => {
        if (isFetching || !hasMore) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setPage((prevPage) => prevPage + 1);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 1.0,
            }
        );

        if (sentinelRef.current) {
            observer.observe(sentinelRef.current);
        }

        return () => {
            if (sentinelRef.current) {
                observer.unobserve(sentinelRef.current);
            }
        };
    }, [isFetching, hasMore]);

    return (
        <div>
            <div className="is-flex is-flex-direction-column is-justify-content-center">
                {loading ? (
                    <div className="spinner-container">
                        <ClipLoader color={getCssVariable('--primary-color')} size={50} />
                    </div>
                ) : posts.length > 0 ? (
                    <>
                        {posts.map((post) => (
                            <FeedPost key={post._id} post={post} />
                        ))}
                        <div ref={sentinelRef}></div>
                        {isFetching && (
                            <div className="spinner-container">
                                <ClipLoader color={getCssVariable('--primary-color')} size={50} />
                            </div>
                        )}
                    </>
                ) : (
                    <p>No posts found.</p>
                )}
            </div>
        </div>
    );
};

export default SimplePostFeed;
