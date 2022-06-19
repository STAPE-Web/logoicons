import * as React from "react";

const SvgCitroen = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#citroen_svg__a)">
      <path
        d="M774.375 439.083C723.333 395.375 571.875 271 500 271c-71.917 0-223.333 124.292-274.292 168.042-.333-10.334-.625-16.625-.625-25.834 0 0-1.25-15.166 12.209-30.375 110.583-100.208 226.541-149.25 230.125-150.75C502 217.5 500.042 220.25 500 161.583c0 0 1.542-.083 2.5 0C551.25 166 682.125 293.042 759.583 378.958c.167.125 15.334 17.667 15.334 36.167 0 8.667-.292 17.208-.542 23.958Zm-2.083-71.666C764.042 358.25 570.208 144.25 500 144.25c-70.167 0-264.042 214-272.25 223.125-.833.917-19.75 22.5-19.75 47.75 0 19.625 1.292 39.417 1.333 39.583 0 .917.459 9.25 5.125 11.542a5.416 5.416 0 0 0 2.375.542 10.001 10.001 0 0 0 5.75-2.292c2.084-1.833 199.584-176.292 277.417-176.292 77.833 0 275.333 174.459 277.333 176.25a10.176 10.176 0 0 0 5.834 2.334c.833 0 1.666-.167 2.416-.542 4.584-2.292 5.084-10.625 5.125-11.583 0-.125 1.292-19.917 1.292-39.542 0-25.208-18.917-46.833-19.708-47.75v.042Zm2.333 275.375c-51.042-43.75-202.667-168.25-274.625-168.25-72 0-223.542 124.458-274.583 168.25-.292-10.334-.584-16.667-.584-25.834 0 0-1.25-15.208 12.209-30.416 110.708-100.334 226.75-149.417 230.333-150.917 34.583-14.583 32.667-11.875 32.625-70.583 0 0 1.542-.084 2.5 0 48.75 4.416 179.792 131.625 257.375 217.583.125.167 15.292 17.708 15.292 36.25 0 8.625-.25 17.208-.542 23.958v-.041Zm-2.083-71.75C764.333 561.917 570.25 347.708 500 347.708c-70.25 0-264.333 214.209-272.542 223.334-.833.916-19.75 22.583-19.75 47.791 0 19.667 1.292 39.459 1.334 39.625 0 .917.458 9.292 5.125 11.542a5.327 5.327 0 0 0 2.416.583 10.086 10.086 0 0 0 5.709-2.291c2.083-1.875 199.791-176.5 277.708-176.5 77.917 0 275.625 174.625 277.625 176.375a10.247 10.247 0 0 0 5.833 2.416c.834 0 1.667-.208 2.417-.583 4.583-2.25 5.083-10.625 5.125-11.583 0-.125 1.292-19.917 1.292-39.584 0-25.208-18.917-46.875-19.75-47.791Zm-139.584 270.5h-.041c-5.221.152-10.446.152-15.667 0-17.292 0-35.958-13.125-35.958-34.334 0-21 18.291-33.583 35.833-33.583.25 0 8.792-.417 15.833 0 17.709 0 36 12.583 36 33.583 0 21.209-18.666 34.334-35.958 34.334h-.042Zm16.875-81.167c-24.583-.542-49.583 0-49.75 0-30 0-54.458 20.958-54.458 46.667 0 26.166 24.417 47.416 54.458 47.416.209 0 25.167.5 49.792 0 30.083 0 54.542-21.25 54.542-47.375 0-25.5-23.959-46-54.584-46.666v-.042Zm319.584 92.875H1000v-44.833c0-26.167-23.333-46.709-53.083-46.709H869.5c-1.25 0-4.25.292-4.25 3.417v84.667c0 2.25 1.667 3.458 3.292 3.458h32.375v-70.833a4.586 4.586 0 0 1 2.79-4.386 4.565 4.565 0 0 1 1.793-.364h35.708c9.834 0 24.459 9.041 24.459 28.458v43.583s.083 3.542 3.75 3.542Zm-646.209-73.375H371v-14.583c0-2.042-1.458-3.584-3.417-3.584H234.458a3.461 3.461 0 0 0-3.219 2.193c-.169.429-.25.888-.239 1.349v14.583l31.833.042c11.917 0 19.959 10.292 19.959 19.917v50c0 1.666 1.458 3.458 3.5 3.458h32.291v-68.667a4.66 4.66 0 0 1 4.667-4.666l-.042-.042Zm-147.125 69.958c0 2.042 1.834 3.459 3.5 3.459h1.834l-.25.25c.916-.25 4.041-.25 14.875-.25h15.833v-88.084a3.5 3.5 0 0 0-3.458-3.5h-28.834a3.543 3.543 0 0 0-3.5 3.5v84.625Zm249.75-45.208v-18.333c0-5 3.542-8.459 8.584-8.459h47.5c7.208 0 13.333 6.084 13.333 13.334a13.458 13.458 0 0 1-13.458 13.458h-55.959Zm69.5 48.708h35.5c-.541-22-23.333-31.125-25.958-32.083l-.417-.208v-1.25l.459-.084c15.25-3.416 25.833-15.125 25.833-28.5 0-14.166-13.75-29.5-36.083-29.5h-85.875a18.468 18.468 0 0 0-13.238 5.465 18.448 18.448 0 0 0-5.346 13.285v69.334a3.333 3.333 0 0 0 3.417 3.458l32.25.042-.042-32.5h30.417c27.083 0 38.25 19.708 39.083 32.5v.041ZM121.792 792.5h34.791c-7.541-19.167-28.416-32.333-52.375-32.792l-10.666-.208a456.871 456.871 0 0 0-39.084.208c-17.083.875-27.916 4.792-38.458 14.084a44.58 44.58 0 0 0-16 33.625c0 26.166 23.167 46.75 53.833 47.791 21.042.75 23.334.792 50.917 0 25.542-.833 43.875-12.5 51.792-32.75h-34.75a3.245 3.245 0 0 0-3 1.709 36.168 36.168 0 0 1-31.417 17.708c-7.125.292-15.75 0-15.75 0-17.667 0-35.958-12.833-35.958-34.292v-.208c.125-21.333 18.333-34.083 36.041-34.125 2-.083 9.125-.292 15.667 0 12.875 0 25.25 6.875 31.5 17.5a3.25 3.25 0 0 0 2.917 1.708v.042Zm724.333 44.333h-84.167c-2.833 0-4.833-1.875-4.833-4.583v-17.458h72.917V798.75h-72.917l-.042-15.958c0-.084-.041-1.792 1.25-3.125.959-1 2.375-1.5 4.167-1.5h83.583v-12.834a3.359 3.359 0 0 0-.193-1.366 3.36 3.36 0 0 0-.723-1.175c-1.167-1.125-3.042-1.042-3.167-1.042H724.917c-.375 0-3.542.083-3.542 3.583v69.334c0 9.166 7 18.625 18.75 18.625h102.5c.833 0 1.708-.375 2.417-1 .336-.308.605-.681.792-1.096.186-.416.285-.866.291-1.321v-13.042Zm-26.167-108.208a22.917 22.917 0 0 0-12.416-3.208 23.246 23.246 0 0 0-12.375 3.208c-3.292 2.042-5.875 4.792-9.75 4.792s-6.209-2.75-9.667-4.792a23.75 23.75 0 0 0-12.375-3.208 23.043 23.043 0 0 0-12.417 3.208c-3.416 2.083-5.125 4.625-5.125 7.583 0 3 1.709 5.542 5.125 7.625 3.459 2.125 7.584 3.167 12.417 3.167a23.457 23.457 0 0 0 12.083-2.917c3.125-1.875 6.459-5 9.959-5s6.666 2.792 9.75 4.75A23.75 23.75 0 0 0 807.542 747c5 0 9.166-1.042 12.5-3.167 3.333-2.083 5-4.625 5-7.625 0-2.916-1.667-5.5-5.084-7.583Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="citroen_svg__a">
        <path fill="#fff" d="M0 0h1000v1000H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCitroen;