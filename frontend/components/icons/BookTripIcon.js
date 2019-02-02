import React from 'react';

const BookTripIcon = ({ className, size, onClick, color }) => {
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
            <title>Book trip icon</title>
            <g id="Book trip icon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="add">
                    <g id="Bounding_Boxes">
                        <polygon id="Shape" points="0 0 48 0 48 48 0 48"></polygon>
                    </g>
                    <path d="M30,22 L38,22 C39.1045695,22 40,22.8954305 40,24 C40,25.1045695 39.1045695,26 38,26 L30,26 C28.8954305,26 28,25.1045695 28,24 C28,22.8954305 28.8954305,22 30,22 Z M26,38 C26,39.1045695 25.1045695,40 24,40 C22.8954305,40 22,39.1045695 22,38 L22,26 L10,26 C8.8954305,26 8,25.1045695 8,24 C8,22.8954305 8.8954305,22 10,22 L22,22 L22,10 C22,8.8954305 22.8954305,8 24,8 C25.1045695,8 26,8.8954305 26,10 L26,38 Z" fill={color}></path>
                </g>
            </g>
        </svg>
    );
};

BookTripIcon.displayName = 'BookTripIcon';
BookTripIcon.defaultProps = {
    color: '#31303D',
    size: 48,
};

export default BookTripIcon;