import * as React from "react";

const SvgMts = ({ title, titleId, ...props }) => (
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
      d="M498.045 128.162c132.477 0 274.045 236.842 274.045 441.943 0 161.103-94.703 298.534-274.045 298.534-179.476 0-273.931-137.431-273.931-298.534 0-205.101 141.435-441.943 273.931-441.943Z"
      fill="#000"
    />
  </svg>
);

export default SvgMts;
