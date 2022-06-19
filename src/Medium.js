import * as React from "react";

const SvgMedium = ({ title, titleId, ...props }) => (
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
      d="M298.83 238.14c-144.01 0-260.75 117.51-260.75 262.54 13.75 348.31 507.82 348.15 521.51 0 .01-144.99-116.75-262.54-260.76-262.54ZM715.27 253.54c-72 0-130.38 110.68-130.38 247.14 7.15 327.97 253.63 327.97 260.76 0 0-136.46-58.37-247.14-130.38-247.14ZM916.81 279.25c-60.23 4.26-60.1 438.85-.01 442.86 60.21-4.22 60.1-438.87.01-442.86Z"
      fill="#141414"
    />
  </svg>
);

export default SvgMedium;
