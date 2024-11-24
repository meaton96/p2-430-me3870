import React, { useState, useContext } from "react";
import PostModalTextArea from "./PostModalTextArea.jsx";
import PostModalHeader from "./PostModalHeader.jsx";
import PostModalFooter from "./PostModalFooter.jsx";
import { sendSimplePost } from "../hooks/simplePostProvider.js";
import { UserContext } from "../utils/UserContext.js";

const MAX_CHAR = 300;

const NewPostModal = () => {

    const [postText, setPostText] = useState("");
    // const [isPrivate, setIsPrivate] = useState(false);
    const [charactersRemaining, setCharactersRemaining] = useState(MAX_CHAR);
    const [visibility, setVisibility] = useState("public");
    const [mediaUrl, setMediaUrl] = useState("");
    const { newPostModalActive, setNewPostModalActive, activeBLToast } = useContext(UserContext);

    const onClose = () => setNewPostModalActive(false);

    const handlePost = async () => {
        if (!postText.trim()) return;
    
        let _mediaUrl = "";
        const tempImage = sessionStorage.getItem("tempImage"); // base64-encoded string
    
        if (tempImage) {
            console.log(tempImage);
    
            // Convert base64 back to Blob
            const byteString = atob(tempImage.split(",")[1]); // Decode base64
            const mimeString = tempImage.split(",")[0].split(":")[1].split(";")[0]; // Extract MIME type
    
            const arrayBuffer = new Uint8Array(byteString.length);
            for (let i = 0; i < byteString.length; i++) {
                arrayBuffer[i] = byteString.charCodeAt(i);
            }
    
            const blob = new Blob([arrayBuffer], { type: mimeString });
    
            const formData = new FormData();
            formData.append("image", blob, "upload.jpg"); // Name the file "upload.jpg"
    
            try {
                const response = await fetch("/uploadImage", {
                    method: "POST",
                    body: formData,
                });
    
                if (!response.ok) {
                    throw new Error("Failed to upload image");
                }
    
                const data = await response.json();
                _mediaUrl = data.url;
            } catch (err) {
                console.error(err.message);
                activeBLToast("Image upload failed. Please try again.");
                return;
            } finally {
                sessionStorage.removeItem("tempImage");
            }
        }
    
        const res = sendSimplePost({ content: postText, visibility, media: _mediaUrl });
    
        if (res) {
            activeBLToast("Post successful");
        }
    
        setPostText("");
        setVisibility("public");
        onClose();
    };

    return (
        <div className={`modal ${newPostModalActive ? "is-active" : ""}`}>


            <div className="modal-background"></div>
            <div className="modal-card post-modal-card">
                <PostModalHeader
                    handlePost={handlePost}
                    onClose={onClose}
                    isReply={false} />

                <section className="modal-card-body post-modal-card-body">
                    <PostModalTextArea
                        postText={postText}
                        setPostText={setPostText}
                        MAX_CHAR={MAX_CHAR}
                        visibility={visibility}
                        setVisibility={setVisibility}
                        setCharactersRemaining={setCharactersRemaining}
                        mediaUrl={mediaUrl}
                    />
                </section>
                


                <PostModalFooter
                    charactersRemaining={charactersRemaining}
                    setMediaUrl={setMediaUrl} />
            </div>
        </div>
    );
};

export default NewPostModal;
