import * as React from "react";

const SvgFirebase = ({ title, titleId, ...props }) => (
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
      d="m162.083 653.042 98.542-633.834a22.584 22.584 0 0 1 42.292-7.166l105.958 198.791-246.792 442.209Zm699.792 153.791-93.833-583.291a22.624 22.624 0 0 0-38.25-12.292L138.125 806.833l327.375 184.5a67.492 67.492 0 0 0 66.125 0l330.25-184.5Zm-266.042-509L520 152.75a22.58 22.58 0 0 0-40 0L147.083 749.333l448.75-451.5Z"
      fill="#000"
    />
  </svg>
);

export default SvgFirebase;
