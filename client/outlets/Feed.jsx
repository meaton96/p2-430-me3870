import React from "react";
import { useContext } from "react";
import { UserProvider } from "../utils/UserContext.js";
const { Suspense, lazy } = React;
const FollowingFeed = lazy(() => import("../feeds/FollowingFeed.jsx"));
const SimplePostFeed = lazy(() => import("../feeds/SimplePostFeed.jsx"));



const feeds = {
    discover: 'discover',
    following: 'following',
    myPosts: 'myPosts'
};

const Feed = () => {

    const [feed, setFeed] = React.useState('discover');

    // const { addBreadcrumb, removeBreadcrumb } = useContext(UserProvider);
    const addBreadcrumb = (a) => { };
    const removeBreadcrumb = () => { };

    const getFeed = () => {
        switch (feed) {
            case feeds.discover:
                return <SimplePostFeed
                    key="discover"
                    endpoint={'/simplePublicPosts'}
                />;
            case feeds.following:
                return <FollowingFeed />;
            case feeds.myPosts:
                return <SimplePostFeed
                    key="myPosts"
                    endpoint={'/getPostsForCurrentUser'}
                />;
            default:
                return <SimplePostFeed
                    key="discover"
                    endpoint={'/simplePublicPosts'}
                />;
        }
    }

    const handleFeedChange = (feedIndex) => {
        switch (feedIndex) {
            case 0:
                removeBreadcrumb();
                addBreadcrumb("discover");
                setFeed(feeds.discover);
                break;
            case 1:
                removeBreadcrumb();
                addBreadcrumb("following");
                setFeed(feeds.following);
                break;
            case 2:
                removeBreadcrumb();
                addBreadcrumb("myPosts");
                setFeed(feeds.myPosts);
                break;
            default:
                removeBreadcrumb();
                addBreadcrumb("discover");
                setFeed(feeds.discover);
        }
    }
    addBreadcrumb("discover");

    return (
        <div>
            <header className="feed-header">
                <div className="is-flex is-justify-content-center py-5">
                    <figure className="image is-48x48">
                        <img src="/assets/img/logo-120p.png" alt="logo" />
                    </figure>
                </div>
                <div class="tabs">
                    <ul>
                        <li
                            class={(feed === feeds.discover ? "is-active" : "")}
                            onClick={() => handleFeedChange(0)}
                        >
                            <a>Discover</a>
                        </li>
                        <li
                            class={(feed === feeds.following ? "is-active" : "")}
                            onClick={() => handleFeedChange(1)}
                        >
                            <a>Following</a>
                        </li>
                        <li
                            class={(feed === feeds.myPosts ? "is-active" : "")}
                            onClick={() => handleFeedChange(2)}
                        >
                            <a>My Posts</a>
                        </li>
                    </ul>
                </div>
            </header>
            <Suspense fallback={<div>Loading...</div>}>
                <div className="feed-parent">
                    {getFeed()}
                </div>
            </Suspense>
        </div>
    );
};

export default Feed;
