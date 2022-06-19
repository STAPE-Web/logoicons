import * as React from "react";

const SvgGoogle = ({ title, titleId, ...props }) => (
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
      d="M0 500C0 224.3 224.3 0 500 0c111.348 0 216.738 35.824 304.781 103.6L688.59 254.533c-54.438-41.904-119.652-64.057-188.59-64.057-170.671 0-309.524 138.853-309.524 309.524S329.329 809.524 500 809.524c137.462 0 254.276-90.062 294.533-214.286H500V404.762h500V500c0 275.7-224.3 500-500 500S0 775.7 0 500Z"
      fill="#000"
    />
  </svg>
);

export default SvgGoogle;
