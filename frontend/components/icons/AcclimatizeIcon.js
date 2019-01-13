import React from 'react';

const AcclimatizeIcon = ({ className, size, onClick }) => {
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
            <title>Gear icon</title>
            <g>
                <path d="M43.428,32.819 C39.418,32.819 34.947,31.549 30.171,28.128 C14.008,16.553 3.037,27.482 2.579,27.953 C2.000,28.546 1.053,28.559 0.459,27.984 C-0.135,27.408 -0.151,26.462 0.422,25.867 C0.552,25.733 13.602,12.572 31.917,25.689 C47.990,37.200 59.789,21.160 60.284,20.472 C60.769,19.798 61.707,19.647 62.377,20.129 C63.050,20.612 63.203,21.549 62.720,22.222 C62.617,22.365 54.928,32.818 43.428,32.819 Z" id="path-1" fillRule="evenodd"/>
                <path d="M43.428,23.375 C39.418,23.375 34.947,22.105 30.171,18.684 C13.941,7.059 3.038,18.033 2.582,18.505 C2.007,19.102 1.058,19.119 0.461,18.544 C-0.136,17.969 -0.152,17.019 0.422,16.423 C0.552,16.288 13.602,3.128 31.917,16.245 C47.985,27.752 59.789,11.716 60.284,11.027 C60.769,10.354 61.707,10.203 62.377,10.684 C63.050,11.167 63.203,12.105 62.720,12.778 C62.617,12.921 54.928,23.374 43.428,23.375 Z" id="path-2" fillRule="evenodd"/>
                <path d="M43.428,12.986 C39.418,12.986 34.947,11.716 30.171,8.295 C14.008,-3.280 3.037,7.648 2.579,8.120 C2.000,8.712 1.053,8.726 0.459,8.150 C-0.135,7.575 -0.151,6.629 0.422,6.034 C0.552,5.899 13.602,-7.261 31.917,5.856 C47.990,17.367 59.789,1.327 60.284,0.638 C60.769,-0.035 61.707,-0.187 62.377,0.295 C63.050,0.779 63.203,1.716 62.720,2.389 C62.617,2.532 54.928,12.984 43.428,12.986 Z" id="path-3" fillRule="evenodd"/>
            </g>
        </svg>
    );
};

AcclimatizeIcon.displayName = 'AcclimatizeIcon';
AcclimatizeIcon.defaultProps = {
    size: 48,
};

export default AcclimatizeIcon;