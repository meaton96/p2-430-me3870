import React from "react";

const Feed = () => {

    return (
        <div>
            <header className="feed-header">
                <div className="is-flex is-justify-content-center py-5">
                    <figure className="image is-64x64">
                        <img src="/assets/img/logo-120p.png" alt="logo" />
                    </figure>
                </div>
                <div class="tabs">
                    <ul>
                        <li class="is-active"><a>Discover</a></li>
                        <li><a>Following</a></li>
                        <li><a>My Posts</a></li>
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default Feed;
