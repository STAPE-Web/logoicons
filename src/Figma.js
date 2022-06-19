import * as React from "react";

const SvgFigma = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#figma_svg__a)">
      <path
        d="M500 500a166.667 166.667 0 1 1 333.333.001A166.667 166.667 0 0 1 500 500ZM166.667 833.333a166.667 166.667 0 0 1 166.666-166.666H500v166.666a166.666 166.666 0 1 1-333.333 0ZM500 0v333.333h166.667a166.667 166.667 0 1 0 0-333.333H500ZM166.667 166.667a166.667 166.667 0 0 0 166.666 166.666H500V0H333.333a166.668 166.668 0 0 0-166.666 166.667Zm0 333.333a166.666 166.666 0 0 0 166.666 166.667H500V333.333H333.333A166.668 166.668 0 0 0 166.667 500Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="figma_svg__a">
        <path fill="#fff" d="M0 0h1000v1000H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFigma;
