import React from 'react';

const GroupIcon = ({ size }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <title>Group Icon</title>
            <g id="Group Icon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="group">
                    <g id="Bounding_Boxes">
                        <polygon id="Shape" points="0 0 48 0 48 48 0 48"></polygon>
                    </g>
                    <path d="M19.2,38 L28.8,38 C29.4627417,38 30,38.5372583 30,39.2 L30,40.8 C30,41.4627417 29.4627417,42 28.8,42 L19.2,42 C18.5372583,42 18,41.4627417 18,40.8 L18,39.2 C18,38.5372583 18.5372583,38 19.2,38 Z M32,34 C32,30.6862915 29.3137085,28 26,28 L22,28 C18.6862915,28 16,30.6862915 16,34 L16,42 C13.790861,42 12,40.209139 12,38 L8,38 C5.790861,38 4,36.209139 4,34 L4,30 C4,26.1358848 6.19167383,22.7836624 9.39974602,21.1186084 C7.91048702,19.5128712 7,17.3627634 7,15 C7,10.0294373 11.0294373,6 16,6 C19.0644745,6 21.8514853,7.54625513 23.494071,10.0139808 C23.6615339,10.0047013 23.8302179,10 24,10 C24.1697911,10 24.338484,10.0047018 24.5059557,10.0139823 C26.1489573,7.54564968 28.9361215,6 32,6 C36.9705627,6 41,10.0294373 41,15 C41,17.3627634 40.089513,19.5128712 38.600254,21.1186084 C41.8083262,22.7836624 44,26.1358848 44,30 L44,34 C44,36.209139 42.209139,38 40,38 L36,38 C36,40.209139 34.209139,42 32,42 L32,34 Z M36,34 L40,34 L40,30 C40,26.6862915 37.3137085,24 34,24 L31.484451,24 C31.2192198,24.3962347 30.9233583,24.7702333 30.600254,25.1186084 C33.8083262,26.7836624 36,30.1358848 36,34 Z M37,15 C37,12.2385763 34.7614237,10 32,10 C30.7293554,10 29.5450178,10.4777786 28.6461492,11.2904339 C31.2554535,12.8663028 33,15.7294211 33,19 C33,19.3068162 32.9846471,19.6100466 32.9546677,19.9089648 C35.2594556,19.4633698 37,17.4349479 37,15 Z M28.88587,20.067141 C28.961059,19.7193229 29,19.364209 29,19 C29,16.2385763 26.7614237,14 24,14 C21.2385763,14 19,16.2385763 19,19 C19,21.7614237 21.2385763,24 24,24 C26.3951787,24 28.3970023,22.3158467 28.88587,20.067141 Z M12,34 C12,30.1358848 14.1916738,26.7836624 17.399746,25.1186084 C17.0766417,24.7702333 16.7807802,24.3962347 16.515549,24 L14,24 C10.6862915,24 8,26.6862915 8,30 L8,34 L12,34 Z M16,10 C13.2385763,10 11,12.2385763 11,15 C11,17.4349479 12.7405444,19.4633698 15.0453323,19.9089648 C15.0153529,19.6100466 15,19.3068162 15,19 C15,15.7294207 16.7445469,12.8663021 19.3538517,11.2904333 C18.4551084,10.477929 17.2707955,10 16,10 Z" fill="#31303D"></path>
                </g>
            </g>
        </svg>
    );
};

GroupIcon.displayName = 'GroupIcon';
GroupIcon.defaultProps = {
    size: 48,
};

export default GroupIcon;