import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";

const PostModalFooter = ({ charactersRemaining, setMediaUrl }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [error, setError] = useState("");


    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (!file) {
            setError("No file selected");
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            setError("File size exceeds 5MB");
            setSelectedImage(null);
            return;
        }

        if (!file.type.startsWith("image/")) {
            setError("Invalid file type. Please upload an image.");
            setSelectedImage(null);
            return;
        }

        setError(""); // Clear any previous errors
        setSelectedImage(file);

        // Convert the file to a base64 string for temporary storage
        const reader = new FileReader();
        reader.onload = () => {
            sessionStorage.setItem("tempImage", reader.result); // Store as base64 in sessionStorage
        };
        reader.readAsDataURL(file);
        setMediaUrl(URL.createObjectURL(file));
    };

    

    return (
        <footer className="modal-card-foot post-modal-card-foot">
            <div className="post-modal-btn-container">
                <div className="modal-foot-left">
                    <label htmlFor="file-upload" className="icon img-upload-btn">
                        <FontAwesomeIcon icon={faImage} />
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                    />
                </div>
                <div className="modal-foot-right">
                    {charactersRemaining}
                </div>
            </div>

            {/* Error message */}
            {error && <p className="error-message">{error}</p>}

            
        </footer>
    );
};

export default PostModalFooter;