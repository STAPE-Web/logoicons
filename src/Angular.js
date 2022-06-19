import * as React from "react";

const SvgAngular = ({ title, titleId, ...props }) => (
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
      d="M413.75 526.875H586L499.833 322.5 413.75 526.875ZM499.833.375 28.583 166.167l71.875 615 399.375 218.458 399.5-218.25 71.834-615.125L499.833.417V.375ZM793.917 762.75H684.083l-59.166-145.875H374.792L315.625 762.75H205.708l294.167-652 294.042 652Z"
      fill="#000"
    />
  </svg>
);

export default SvgAngular;
