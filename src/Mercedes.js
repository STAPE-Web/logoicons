import * as React from "react";

const SvgMercedes = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#mercedes_svg__a)">
      <path
        d="M500.208 0c275.959 0 500.002 224.042 500.002 500 0 275.958-224.043 500-500.002 500-275.958 0-500-224.042-500-500 0-275.958 224.042-500 500-500ZM135.417 730.792a431.544 431.544 0 0 0 364.791 200.875c153.375 0 288.209-80.167 364.792-200.875l-364.792-139-364.791 139Zm444.291-276.709L882.5 700.542A429.409 429.409 0 0 0 931.875 500c0-232.375-184.042-422.125-414.167-431.333l62 385.416Zm-97-385.416C252.583 77.875 68.542 267.625 68.542 500c0 72.375 17.833 140.583 49.375 200.542l302.791-246.459 62-385.416Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="mercedes_svg__a">
        <path fill="#fff" d="M0 0h1000v1000H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgMercedes;
