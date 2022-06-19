import * as React from "react";

const SvgMicrosoft = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1000 985"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M472.597 963.311H27.588V518.302h445.009v445.009Zm491.851 0H519.44V518.302h445.008v445.009ZM472.597 471.459H27.588V26.451h445.009v445.008Zm491.851 0H519.44V26.451h445.008v445.008Z"
      fill="#000"
    />
  </svg>
);

export default SvgMicrosoft;
