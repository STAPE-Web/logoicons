import * as React from "react";

const SvgNetflix = ({ title, titleId, ...props }) => (
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
      d="M224.583.167 422.5 561v-.292l15.667 44.167c87 246.167 133.75 378.125 134 378.417.166 0 13.333.833 29.25 1.666 48.166 2.084 107.916 7.5 153.166 12.917 10.417 1.25 19.417 1.667 20 1.25l-196.25-556.667-18.166-51.25-100.959-285.416C440.042 51.625 423.792 5.458 422.958 3.708L421.667 0H224.792l-.209.167Zm354.5.333-.416 221.083-.334 221.084-18.208-51.334v-.083l-23.542 492.083c23.125 65.292 35.5 100.125 35.625 100.292.167.167 13.334 1 29.25 1.75 48.209 2.083 107.917 7.5 153.334 12.917 10.416 1.25 19.458 1.666 20 1.25.541-.417.833-225.834.708-500.417L775.167.417H579.083V.5Zm-354.5-.417v499.584c0 274.75.292 499.791.625 500.125.334.328 17.334-1.25 37.792-3.584 20.417-2.5 48.75-5.416 62.917-6.666 21.583-2.084 86.166-6.25 93.666-6.25 2.167 0 2.334-11.25 2.625-211.667l.334-211.667 15.833 44.167 5.417 15.667 23.75-491.667-7.917-22.75L422.958 3.708l-1.25-3.625H224.583Z"
      fill="#000"
    />
  </svg>
);

export default SvgNetflix;
