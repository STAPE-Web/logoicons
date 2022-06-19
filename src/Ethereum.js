import * as React from "react";

const SvgEthereum = ({ title, titleId, ...props }) => (
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
      d="M497.667 748.75 190.833 567.5 497.625 1000l307.083-432.5-307.166 181.25h.125ZM502.333 0 195.417 509.292l306.875 181.416 306.875-181.25L502.333 0Z"
      fill="#000"
    />
  </svg>
);

export default SvgEthereum;
