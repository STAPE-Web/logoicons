import * as React from "react";

const SvgMitsubishi = ({ title, titleId, ...props }) => (
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
      d="M333.333 932.5H0l166.667-288.333H500L333.333 932.5Zm333.334 0H1000L833.333 644.167H500L666.667 932.5Zm0-576.667L500 67.5 333.333 355.833 500 644.167l166.667-288.334Z"
      fill="#000"
    />
  </svg>
);

export default SvgMitsubishi;
