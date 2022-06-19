import * as React from "react";

const SvgMcdonalds = ({ title, titleId, ...props }) => (
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
      d="M718.458 125.25c86.084 0 155.917 363.083 155.917 811.583H1000C1000 454 873.25 63.167 718.083 63.167c-88.625 0-166.958 117.083-218.666 301.125-51.709-184-130.042-301.125-217.959-301.125C126.292 63.166 0 453.666 0 936.5h125.583c0-448.458 69.084-811.25 155.167-811.25s155.875 335.416 155.875 749.167H561.5c0-413.751 70.167-749.167 156.25-749.167h.708Z"
      fill="#000"
    />
  </svg>
);

export default SvgMcdonalds;
