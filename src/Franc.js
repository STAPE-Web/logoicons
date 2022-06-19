import * as React from "react";

const SvgFranc = ({ title, titleId, ...props }) => (
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
      d="M500 0C224.298 0 0 224.298 0 500s224.298 500 500 500 500-224.298 500-500S775.702 0 500 0Zm176.149 336.875a9.118 9.118 0 0 1-9.119 9.119H465.188v87.179H616.41a9.118 9.118 0 0 1 9.119 9.119v69.909a9.118 9.118 0 0 1-9.119 9.118H465.188v69.909h44.073a9.118 9.118 0 0 1 9.119 9.118v54.712a9.118 9.118 0 0 1-9.119 9.118h-44.073v53.66a9.118 9.118 0 0 1-9.118 9.118h-69.909a9.118 9.118 0 0 1-9.118-9.118v-53.66H332.97a9.118 9.118 0 0 1-9.119-9.118v-54.712a9.118 9.118 0 0 1 9.119-9.118h44.073V266.967a9.118 9.118 0 0 1 9.118-9.119H667.03a9.118 9.118 0 0 1 9.119 9.119v69.908Z"
      fill="#000"
    />
  </svg>
);

export default SvgFranc;
