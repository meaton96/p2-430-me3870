import React from "react";
const { Suspense, lazy } = React;
const FollowingFeed = lazy(() => import("../modules/twitter-clone/feeds/FollowingFeed.jsx"));
const SimplePostFeed = lazy(() => import("../modules/twitter-clone/feeds/SimplePostFeed.jsx"));



const feeds = {
    discover: 'discover',
    following: 'following',
    myPosts: 'myPosts'
};

const Feed = () => {

    const [feed, setFeed] = React.useState('discover');


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
                setFeed(feeds.discover);
                break;
            case 1:
                setFeed(feeds.following);
                break;
            case 2:
                setFeed(feeds.myPosts);
                break;
            default:
                setFeed(feeds.discover);
        }
    }

    return (
        <div>
            <header className="feed-header">
                <div className="is-flex is-justify-content-center py-5">
                    <figure className="image is-48x48">
                        <img src="/assets/img/logo-120p.png" alt="logo" />
                    </figure>
                </div>
                <div className="tabs">
                    <ul>
                        <li
                            className={(feed === feeds.discover ? "is-active" : "")}
                            onClick={() => handleFeedChange(0)}
                        >
                            <a>Discover</a>
                        </li>
                        <li
                            className={(feed === feeds.following ? "is-active" : "")}
                            onClick={() => handleFeedChange(1)}
                        >
                            <a>Following</a>
                        </li>
                        <li
                            className={(feed === feeds.myPosts ? "is-active" : "")}
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
