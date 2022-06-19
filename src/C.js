import * as React from "react";

const SvgC = ({ title, titleId, ...props }) => (
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
      d="m500 28.076 433.333 252.778v438.293L500 971.92 66.667 719.147V280.854L500 28.076Zm0 238.591c-128.867 0-233.333 104.466-233.333 233.333 0 128.867 104.466 233.333 233.333 233.333h12.132A245.45 245.45 0 0 0 685.7 661.438l4.54-4.535-47.143-47.14-4.535 4.535a178.799 178.799 0 0 1-126.43 52.369H500c-92.047 0-166.667-74.62-166.667-166.667S407.953 333.333 500 333.333h12.132a178.799 178.799 0 0 1 126.43 52.369l4.535 4.535 47.143-47.14-4.54-4.535a245.455 245.455 0 0 0-173.568-71.895H500Z"
      fill="#000"
    />
  </svg>
);

export default SvgC;
