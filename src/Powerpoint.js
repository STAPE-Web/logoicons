import * as React from "react";

const SvgPowerpoint = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M333.333 333.333h-200v333.333H200V600h133.333c73.638 0 133.334-59.696 133.334-133.334s-59.696-133.333-133.334-133.333Zm0 200H200V400h133.333C370.152 400 400 429.848 400 466.666c0 36.819-29.848 66.667-66.667 66.667Z"
      fill="#000"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M499.989 0C336.373 0 191.125 78.616 99.955 200 44.747 200.025 0 244.787 0 300v400c0 55.213 44.747 99.973 99.955 100 91.17 121.387 236.418 200 400.034 200 276.144 0 499.998-223.86 499.998-500 0-276.143-223.854-500-499.998-500ZM66.667 300c0-18.409 14.924-33.333 33.333-33.333h400c18.11 0 32.846 14.442 33.321 32.436v401.79c-.475 18-15.211 32.44-33.321 32.44H100c-18.41 0-33.333-14.926-33.333-33.333V300Z"
      fill="#000"
    />
  </svg>
);

export default SvgPowerpoint;
