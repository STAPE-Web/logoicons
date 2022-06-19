import * as React from "react";

const SvgHonda = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1000 1000"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#honda_svg__a)">
      <path
        d="M995.958 286.25C982.25 152.125 893.042 123.917 814.542 111.042c-39.417-6.667-109.584-12.459-154.834-14.125-39.416-2.5-132-3.75-159.791-3.75-27.417 0-120.417 1.25-159.834 3.75-44.833 1.666-115.416 7.5-154.833 14.125C106.792 124.333 17.5 152.5 3.833 286.208.5 322.75-.333 370.5.083 421.542c1.25 84.666 8.334 141.958 12.5 181.833 2.875 27.375 14.084 109.167 28.625 151.5C61.125 813 79.375 830 100.542 847.458c39.041 31.542 102.958 41.5 116.25 44C289 904.333 435.125 906.792 499.5 906.792c64.333 0 210.417-2.084 282.667-15.334 13.708-2.5 77.625-12.083 116.25-44C919.583 830 937.833 813 957.75 754.875c14.583-42.333 26.167-124.125 29.083-151.5 4.167-39.875 11.625-97.167 12.459-181.833 1.668-51.042.416-98.792-3.334-135.334v.042Zm-49 224.958c-7.875 107.084-17.416 171.042-31.125 217.5-12.041 40.709-26.541 67.667-48.541 87.209-36.125 32.791-85.959 39.833-115 44-63.084 9.541-168.959 12.458-252.375 12.458-83.459 0-189.334-3.333-252.417-12.5-29.042-4.125-78.875-11.167-115-43.958C110.917 796.375 96 769 84.375 728.708c-13.708-46.041-23.25-110.416-31.125-217.5-4.583-64.333-3.75-168.958 3.333-225 10.75-83.833 52.292-125.791 141.125-141.541 41.5-7.5 97.5-12.875 150.25-15.375 42.334-2.917 112.5-4.167 151.542-3.75 39-.417 109.167 1.25 151.5 3.75 53.125 2.5 108.75 7.916 150.25 15.375 89.25 15.75 130.792 58.125 141.167 141.541 8.291 56.042 9.541 160.667 4.583 225h-.042ZM730.25 161.667c-22.833 102.541-31.958 149.458-50.667 223.75-17.833 71.416-31.958 137.416-55.625 169.375-24.458 32.375-56.875 39.458-78.875 41.916-11.625 1.25-19.916 1.667-44.416 2.084-24.875 0-33.209-.834-44.834-2.084-22-2.5-54.791-9.541-78.833-41.916-24.083-31.959-37.792-97.959-55.625-169.375-19.542-73.875-28.25-121.209-51.5-223.75 0 0-22.833.833-33.208 1.666-13.709.834-24.5 2.084-36.125 3.75 0 0 13.333 210.875 19.125 300.125 6.25 93.834 17.416 252.375 27.791 371.959 0 0 19.084 2.916 51.084 5 33.625 2.041 48.541 2.041 48.541 2.041 13.709-52.708 31.125-125.791 50.25-156.916 15.75-25.334 40.25-28.209 53.959-29.875 21.583-2.917 39.833-3.334 48.583-3.334 8.292-.416 26.542 0 48.542 3.334 13.708 2.083 38.208 4.583 53.958 29.875 19.542 31.125 36.542 104.166 50.25 156.916 0 0 14.917-.416 48.542-2.083a473.05 473.05 0 0 0 51.083-5c10.375-119.542 21.583-277.708 27.792-371.917 5.833-89.25 19.125-300.125 19.125-300.125-11.667-1.666-22.417-2.916-36.125-3.75-9.584-.833-32.792-1.666-32.792-1.666Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="honda_svg__a">
        <path fill="#fff" d="M0 0h1000v1000H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgHonda;
