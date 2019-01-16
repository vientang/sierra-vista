import React from 'react';

const GuideIcon = ({ className, size, onClick }) => {
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
            <g id="group-5svg">
                <path d="M54.776,22.013 C54.776,22.013 36.417,22.013 36.417,22.013 C35.589,22.013 35.344,21.341 35.344,20.512 C35.344,20.512 35.344,10.505 35.344,10.505 C35.344,9.676 35.589,9.004 36.417,9.004 C36.417,9.004 54.776,9.004 54.776,9.004 C55.693,9.004 56.379,9.539 56.833,9.893 C56.833,9.893 60.649,12.895 60.649,12.895 C61.558,13.577 62.094,14.663 62.094,15.855 C62.094,17.047 61.558,18.134 60.622,18.836 C60.622,18.836 56.953,21.444 56.953,21.444 C56.195,22.013 55.307,22.013 54.776,22.013 ZM38.344,19.011 C38.344,19.011 54.776,19.011 54.776,19.011 C54.902,19.011 55.165,19.011 55.244,18.986 C55.244,18.986 58.854,16.412 58.854,16.412 C59.067,16.250 59.094,15.968 59.094,15.855 C59.094,15.742 59.067,15.460 58.821,15.275 C58.821,15.275 54.989,12.261 54.989,12.261 C54.891,12.184 54.739,12.066 54.643,12.006 C54.643,12.006 38.344,12.006 38.344,12.006 C38.344,12.006 38.344,19.011 38.344,19.011 Z" id="path-1" fillRule="evenodd"/>
                <path d="M6.565,25.068 C6.010,25.068 5.520,24.912 5.111,24.604 C5.111,24.604 1.550,22.254 1.550,22.254 C0.540,21.500 0.003,20.430 0.003,19.267 C0.003,18.103 0.540,17.033 1.476,16.330 C1.476,16.330 5.123,13.642 5.123,13.642 C5.878,13.073 6.740,13.007 7.321,13.007 C7.321,13.007 25.417,13.007 25.417,13.007 C26.245,13.007 27.344,13.679 27.344,14.508 C27.344,14.508 27.344,23.514 27.344,23.514 C27.344,24.343 26.245,25.015 25.417,25.015 C25.417,25.015 7.321,25.015 7.321,25.015 C7.241,25.015 7.162,25.026 7.084,25.034 C6.907,25.052 6.733,25.068 6.565,25.068 ZM6.564,22.065 C6.564,22.065 6.565,23.567 6.565,23.567 C6.565,23.567 6.565,22.065 6.565,22.065 C6.565,22.065 6.564,22.065 6.564,22.065 ZM7.321,16.009 C7.002,16.009 6.918,16.049 6.909,16.053 C6.909,16.053 3.266,18.740 3.266,18.740 C3.038,18.911 3.003,19.144 3.003,19.267 C3.003,19.389 3.038,19.622 3.275,19.800 C3.275,19.800 6.696,22.057 6.696,22.057 C6.722,22.054 6.748,22.051 6.774,22.048 C6.954,22.029 7.137,22.013 7.321,22.013 C7.321,22.013 24.344,22.013 24.344,22.013 C24.344,22.013 24.344,16.009 24.344,16.009 C24.344,16.009 7.321,16.009 7.321,16.009 Z" id="path-2" fillRule="evenodd"/>
                <path d="M25.417,42.027 C25.417,42.027 7.321,42.027 7.321,42.027 C6.542,42.027 5.757,41.760 5.111,41.275 C5.111,41.275 1.473,38.530 1.473,38.530 C0.540,37.830 0.003,36.751 0.003,35.574 C0.003,34.396 0.540,33.317 1.476,32.615 C1.476,32.615 5.103,29.849 5.103,29.849 C5.840,29.296 6.583,29.018 7.321,29.018 C7.321,29.018 25.417,29.018 25.417,29.018 C26.245,29.018 27.344,29.690 27.344,30.519 C27.344,30.519 27.344,40.526 27.344,40.526 C27.344,41.356 26.245,42.027 25.417,42.027 ZM7.321,32.020 C7.290,32.024 7.143,32.071 6.914,32.243 C6.914,32.243 3.285,35.010 3.285,35.010 C3.038,35.195 3.003,35.442 3.003,35.574 C3.003,35.705 3.038,35.952 3.275,36.130 C3.275,36.130 6.916,38.876 6.916,38.876 C7.041,38.971 7.189,39.025 7.321,39.025 C7.321,39.025 24.344,39.025 24.344,39.025 C24.344,39.025 24.344,32.020 24.344,32.020 C24.344,32.020 7.321,32.020 7.321,32.020 Z" id="path-3" fillRule="evenodd"/>
                <path d="M38.344,59.540 C38.344,61.474 36.777,63.042 34.844,63.042 C34.844,63.042 28.844,63.042 28.844,63.042 C26.911,63.042 25.344,61.474 25.344,59.540 C25.344,59.540 25.344,3.500 25.344,3.500 C25.344,1.566 26.911,-0.002 28.844,-0.002 C28.844,-0.002 34.844,-0.002 34.844,-0.002 C36.777,-0.002 38.344,1.566 38.344,3.500 C38.344,3.500 38.344,59.540 38.344,59.540 ZM35.344,3.500 C35.344,3.224 35.120,3.000 34.844,3.000 C34.844,3.000 28.844,3.000 28.844,3.000 C28.567,3.000 28.344,3.224 28.344,3.500 C28.344,3.500 28.344,59.540 28.344,59.540 C28.344,59.816 28.567,60.040 28.844,60.040 C28.844,60.040 34.844,60.040 34.844,60.040 C35.120,60.040 35.344,59.816 35.344,59.540 C35.344,59.540 35.344,3.500 35.344,3.500 Z" id="path-4" fillRule="evenodd"/>
            </g>
        </svg>
    );
};

GuideIcon.displayName = 'GuideIcon';
GuideIcon.defaultProps = {
    size: 48,
};

export default GuideIcon;