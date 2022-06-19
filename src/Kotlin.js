import * as React from "react";

const SvgKotlin = ({ title, titleId, ...props }) => (
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
      d="M54.167 1000 525 520.833 1000 1000H54.167ZM0 0h500L0 520.833V0Zm558.333 0L0 583.333V1000l500-500L1000 0H558.333Z"
      fill="#000"
    />
  </svg>
);

export default SvgKotlin;
