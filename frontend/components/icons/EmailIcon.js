import React from 'react';

const EmailIcon = ({ size, color }) => {
    return (
        <a href="mailto:info@sierravistaexpeditions.com" style={{ margin: 0 }}>
            <svg width={size} height={size} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <title>Email</title>
                <g id="Email" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="contact-us">
                        <g id="Bounding_Boxes">
                            <polygon id="Shape" points="0 0 48 0 48 48 0 48"></polygon>
                        </g>
                        <path d="M40,14.7612497 L27.7481703,24.5627135 C25.5568584,26.315763 22.4431416,26.315763 20.2518297,24.5627135 L8,14.7612497 L8,34 C8,35.1045695 8.8954305,36 10,36 L16.8,36 C17.4627417,36 18,36.5372583 18,37.2 L18,38.8 C18,39.4627417 17.4627417,40 16.8,40 L10,40 C6.6862915,40 4,37.3137085 4,34 L4,14 C4,10.6862915 6.6862915,8 10,8 L38,8 C41.3137085,8 44,10.6862915 44,14 L44,34 C44,37.3137085 41.3137085,40 38,40 L31.2,40 C30.5372583,40 30,39.4627417 30,38.8 L30,37.2 C30,36.5372583 30.5372583,36 31.2,36 L38,36 C39.1045695,36 40,35.1045695 40,34 L40,14.7612497 Z M37.0484379,12 L10.9515621,12 L22.7506099,21.4392382 C23.4810472,22.0235881 24.5189528,22.0235881 25.2493901,21.4392382 L37.0484379,12 Z M21.2,36 L26.8,36 C27.4627417,36 28,36.5372583 28,37.2 L28,38.8 C28,39.4627417 27.4627417,40 26.8,40 L21.2,40 C20.5372583,40 20,39.4627417 20,38.8 L20,37.2 C20,36.5372583 20.5372583,36 21.2,36 Z" fill={color}></path>
                    </g>
                </g>
            </svg>
        </a>
    );
};

EmailIcon.displayName = 'EmailIcon';
EmailIcon.defaultProps = {
    color: '#31303D',
    size: 48,
};

export default EmailIcon;