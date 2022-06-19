import * as React from "react";

const SvgPepsi = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#pepsi_svg__a)">
      <path
        d="M500 0C372.083 0 244.167 48.75 146.542 146.417c-195.334 195.25-195.334 511.833 0 707.125 195.208 195.248 511.833 195.288 707.083 0 195.255-195.292 195.255-511.917-.083-707.084A498.256 498.256 0 0 0 500.042 0H500Zm0 36c104.417 0 200.708 34.5 278.25 92.75a963.248 963.248 0 0 1-651.667 646.667A461.878 461.878 0 0 1 36.042 500C36.042 243.75 243.75 36 500 36Zm389.25 211.667A461.746 461.746 0 0 1 964 500c0 256.25-207.75 463.958-464 463.958a462.911 462.911 0 0 1-355.917-166.416C426 708.708 630.125 708.583 770.208 605.417 850.75 546.042 903.75 451.333 903.75 343.625c0-33.417-5.125-65.625-14.5-95.958Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="pepsi_svg__a">
        <path fill="#fff" d="M0 0h1000v1000H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPepsi;
