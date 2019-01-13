import React from 'react';

const AvatarIcon = ({ className, size, onClick }) => {
    return (
        <svg 
            className={className}
            onClick={onClick}
            width={size} 
            height={size} 
            viewBox="0 0 48 48" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <title>Avatar icon</title>
            <g id="Avatar icon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="avatar">
                    <g id="Bounding_Boxes">
                        <polygon id="Shape" points="0 0 48 0 48 48 0 48"></polygon>
                    </g>
                    <path d="M24,4 C35.04,4 44,12.96 44,24 C44,35.04 35.04,44 24,44 C12.96,44 4,35.04 4,24 C4,12.96 12.96,4 24,4 Z M24,8 C15.169139,8 8,15.169139 8,24 C8,32.830861 15.169139,40 24,40 C32.830861,40 40,32.830861 40,24 C40,15.169139 32.830861,8 24,8 Z M24,36 C20.0629632,36 16.4328282,34.3655446 14,31.6360837 C15.2262505,29.7755981 19.7163263,28 24,28 C28.2836737,28 32.7737495,29.7755981 34,31.6360837 C31.5671718,34.3655446 27.9370368,36 24,36 Z M24,14 C27.32,14 30,16.68 30,20 C30,23.32 27.32,26 24,26 C20.68,26 18,23.32 18,20 C18,16.68 20.68,14 24,14 Z" fill="#31303D"></path>
                </g>
            </g>
        </svg>
    );
};

AvatarIcon.displayName = 'AvatarIcon';
AvatarIcon.defaultProps = {
    size: 48,
};

export default AvatarIcon;