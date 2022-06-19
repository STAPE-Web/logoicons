import * as React from "react";

const SvgAdobePhotoshop = ({ title, titleId, ...props }) => (
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
    <path
      d="M410.417 350.833c-15.417-6.25-32.084-8.75-49.167-8.333-10.833 0-20.417 0-28.333.417-8.334-.417-14.167 0-17.084.416v140c5.834.417 11.25.834 16.25.834h22.084c16.25 0 32.5-2.5 47.916-7.5 13.334-3.75 25-11.667 34.167-22.084 8.75-10.416 12.917-24.583 12.917-42.916.416-12.917-2.917-25.834-9.584-37.084-7.083-10.833-17.083-19.166-29.166-23.75ZM822.917 12.5H177.083C79.167 12.5 0 91.667 0 189.583v620.792c0 97.917 79.167 177.083 177.083 177.083h645.834c97.916 0 177.083-79.166 177.083-177.083V189.583C1000 91.667 920.833 12.5 822.917 12.5ZM514.958 497.917C498.333 521.25 475 538.75 447.917 548.75c-28.334 10.417-59.584 14.167-93.75 14.167-10 0-16.667 0-20.834-.417-4.166-.417-10-.417-17.916-.417v133.709c.416 2.916-1.667 5.458-4.584 5.875H230c-3.333 0-5-1.709-5-5.459V267.5c0-2.917 1.25-4.583 4.167-4.583 7.083 0 13.75 0 23.333-.417 10-.417 20.417-.417 31.667-.833 11.25-.417 23.333-.417 36.25-.834 12.916-.416 25.416-.416 37.916-.416 34.167 0 62.5 4.166 85.834 12.916 20.833 7.084 40 18.75 55.833 34.167 13.333 13.333 23.75 29.583 30.417 47.5 6.208 17.5 9.541 35.417 9.541 54.167.042 35.833-8.291 65.416-25 88.75ZM810.417 660c-11.667 16.667-27.959 29.542-46.667 37.125-20.417 8.708-45.417 13.25-75.458 13.25-19.125 0-37.917-1.625-56.625-5.375-14.584-2.542-29.167-7.083-42.5-13.333-2.917-1.625-5.042-4.542-4.625-7.875v-72.5c0-1.209.458-2.917 1.708-3.75 1.208-.834 2.5-.417 3.75.416 16.25 9.584 33.333 16.292 51.667 20.417 15.791 4.167 32.458 6.25 49.166 6.25 15.834 0 27.084-2.125 34.584-5.875 6.666-2.917 11.25-10 11.25-17.5 0-5.875-3.334-11.25-10-16.667-6.667-5.375-20.375-11.625-40.792-19.625-21.25-7.5-40.792-17.5-59.167-29.958C613.792 535.792 603 523.75 595 509.583c-6.625-13.333-9.958-27.916-9.542-42.541 0-17.917 5-35 14.209-50.417 10.416-16.667 25.791-30 43.708-38.333 19.542-9.959 44.125-14.542 73.708-14.542 17.084 0 34.584 1.25 51.667 3.75 12.5 1.667 24.583 5 35.833 9.583 1.625.417 3.334 2.084 4.167 3.75.417 1.667.833 3.334.833 5v67.917c0 1.667-.833 3.333-2.083 4.167-3.75.833-5.833.833-7.5 0-12.5-6.667-25.833-11.25-40-14.167-15.417-3.333-30.833-5.417-46.667-5.417-8.333-.416-17.083.834-25.041 2.917-5.375 1.25-10 4.167-12.917 8.333-2.083 3.334-3.333 7.5-3.333 11.25s1.666 7.5 4.208 10.834c3.75 4.583 8.708 8.333 14.167 11.25 9.541 5 19.583 9.583 29.541 13.75 22.542 7.5 44.209 17.916 64.209 30.416 13.75 8.709 25 20.417 32.875 34.584 6.666 13.25 10 27.916 9.583 42.875.458 19.625-5.375 39.166-16.208 55.458Z"
      fill="#000"
    />
  </svg>
);

export default SvgAdobePhotoshop;