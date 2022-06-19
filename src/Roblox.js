import * as React from "react";

const SvgRoblox = ({ title, titleId, ...props }) => (
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
      d="M242.5 39.96a20.001 20.001 0 0 0-18.516 14.923l-183.32 696.64a20.005 20.005 0 0 0 14.258 24.454L751.6 959.336a20 20 0 0 0 21.032-7.236 20 20 0 0 0 3.422-7.022l183.32-696.68a19.994 19.994 0 0 0-2.06-15.182 20.005 20.005 0 0 0-12.198-9.271l-696.68-183.32a19.994 19.994 0 0 0-5.937-.664ZM430 380l190 50-50 190-190-50 50-190Z"
      fill="#000"
    />
  </svg>
);

export default SvgRoblox;
