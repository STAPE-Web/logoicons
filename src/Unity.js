import * as React from "react";

const SvgUnity = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#unity_svg__a)">
      <path
        d="M829.094 799.969 650.094 500l179-299.969L916.688 500l-87.594 299.969ZM433.25 770.844 208.344 549.969H566.75l179 299.969-312.5-79.094Zm0-545.938 312.5-79.094-179 299.969H204.094c0 4.25 229.156-220.875 229.156-220.875ZM891.594 0 483.438 104.156l-62.5 104.156H299.969L0 499.969l299.969 291.656h120.969l58.25 104.156 408.374 104.157 108.219-395.844-58.25-104.156 62.499-104.157L891.594 0Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="unity_svg__a">
        <path fill="#fff" d="M0 0h1000v1000H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgUnity;
