import * as React from "react";

const SvgGoogleFonts = ({ title, titleId, ...props }) => (
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
      d="M166.667 116.667a150 150 0 1 0-.002 300.001 150 150 0 0 0 .002-300.001Zm316.666 0v766.666h300a216.666 216.666 0 0 1 0-433.333 166.668 166.668 0 0 1-117.851-284.518 166.667 166.667 0 0 1 117.851-48.815h-300Zm300 0V450A166.67 166.67 0 0 0 950 283.333a166.666 166.666 0 0 0-166.667-166.666Zm0 333.333v433.333a216.676 216.676 0 0 0 153.207-63.46A216.662 216.662 0 0 0 1000 666.667 216.667 216.667 0 0 0 783.333 450ZM462.5 149.75 0 883.292h366.667L462.5 731.625V149.75Z"
      fill="#000"
    />
  </svg>
);

export default SvgGoogleFonts;
