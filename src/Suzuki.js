import * as React from "react";

const SvgSuzuki = ({ title, titleId, ...props }) => (
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
      d="M723.708 833.125C562.917 932.917 500 1000 500 1000L4.375 654.375s208.458-154.792 382.75-36.25l233.75 161.75L649.333 761 4.417 305.042s92.75-27.084 271.833-138.125C437.083 67.042 500 0 500 0l495.625 345.667s-208.458 154.791-382.792 36.25L379.167 220.042l-28.459 18.916L995.542 695s-92.667 27.042-271.834 138.125Z"
      fill="#000"
    />
  </svg>
);

export default SvgSuzuki;
