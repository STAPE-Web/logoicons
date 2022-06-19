import * as React from "react";

const SvgHaskell = ({ title, titleId, ...props }) => (
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
      d="M.25 852.917 235.375 500 .25 147.125h176.458l236.417 352.917-236.417 352.833-176.458.042Zm235.125 0L470.417 500l-235-352.875h177.75l468.875 705.75h-176l-147.292-222.5-145.625 222.5-177.75.042Zm568.792-206.042-78.209-117.792H999.75v117.75l-195.583.042Zm-117.75-176.458-78.209-117.792h391.125v117.792H686.417Z"
      fill="#000"
    />
  </svg>
);

export default SvgHaskell;
