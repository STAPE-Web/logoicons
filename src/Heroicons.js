import * as React from "react";

const SvgHeroicons = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1000 1063"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M500 141.938a726.067 726.067 0 0 0 428.531 150.937c5.906 33.844 8.969 68.688 8.969 104.313 0 275.781-184.844 508.562-437.5 580.906C247.344 905.75 62.5 672.969 62.5 397.188c0-35.625 3.063-70.5 8.969-104.375A726.067 726.067 0 0 0 500 141.969v-.031Z"
      stroke="#000"
      strokeWidth={80}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgHeroicons;
