import * as React from "react";

const SvgVercel = ({ title, titleId, ...props }) => (
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
    <path d="M1000 938.542H0L500 61.458l500 877.084Z" fill="#000" />
  </svg>
);

export default SvgVercel;
