import * as React from "react";

const SvgInfiniti = ({ title, titleId, ...props }) => (
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
      d="M287.208 608.583C215.417 602.5 90.833 555.417 90.833 473.292c0-104.167 180.959-200.75 409.125-200.75 239.584 0 409.167 96.583 409.167 200.75 0 82.083-124.083 128.625-195.917 134.708-19.791-25.375-213.25-282.958-213.25-282.958s-194.25 259.666-212.75 283.541Zm572.667 88.125C955.042 650 1000 572.25 1000 503.667c0-147.209-205.333-261-500.042-261C205.292 242.667 0 356.458 0 503.667c0 68.583 44.958 146.291 140.125 193.041 88.25 43.375 213.167 58.459 231.25 60.625l128.583-374.25 129.917 374.25c18-2.166 141.708-17.25 230-60.625Z"
      fill="#000"
    />
  </svg>
);

export default SvgInfiniti;
