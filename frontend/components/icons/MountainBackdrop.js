import React from 'react';

const mtnColor = '#fafafa';

const MountainBackdrop = () => {
    return (
        <svg 
            width={5000} 
            height={2100} 
            viewBox="0 0 519 519" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                transform: 'translate(-1500px, 850px)',
                zIndex: -1,
            }}
        >
            <title>Mountain backdrop</title>
            <desc>Mountain backdrop</desc>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="mountain-logo" transform="translate(1.000000, 1.000000)">
                    <g id="Mountain" mask="url(#mask-2)">
                        <g transform="translate(-150.000000, 155.000000)">
                            <path d="M70.257,80.631 L103.591,119.802 L121.096,121.995 L160.825,159.914 L232.207,74.676 L257.458,66.217 L298.872,0.407 L312.003,6.362 L347.356,70.291 L402.238,99.121 L431.866,135.471 L444.323,117.922 L454.088,117.922 L516.294,180.926 C514.938,227.594 501.18,324.727 478.211,362 L38.716,362 C14.493,322.698 0.519,222.831 0.519,173.275 C0.519,160.137 1.509,147.23 3.402,134.621 L32.213,88.467 L70.257,80.631 Z" id="Path" fill={mtnColor}></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

MountainBackdrop.displayName = 'MountainBackdrop';

export default MountainBackdrop;