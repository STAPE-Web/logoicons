import * as React from "react";

const SvgTerminal = ({ title, titleId, ...props }) => (
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
      d="M0 166.667c0-55.229 44.772-100 100-100h800c55.227 0 100 44.771 100 100v666.666c0 55.227-44.773 100-100 100H100c-55.228 0-100-44.773-100-100V166.667Zm386.195 333.334-176.43-176.43 47.141-47.141 223.57 223.571-223.57 223.572-47.141-47.14 176.43-176.432ZM800 733.333H533.333v-66.666H800v66.666Z"
      fill="#000"
    />
  </svg>
);

export default SvgTerminal;
