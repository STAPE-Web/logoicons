import * as React from "react";

const SvgNike = ({ title, titleId, ...props }) => (
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
      d="M221.736 370.816c-51.261 60.2-100.412 134.854-100.904 190.655-.192 20.996 6.51 39.325 22.588 53.208 23.138 19.994 48.631 27.044 74 27.086 37.073.052 73.886-14.905 102.71-26.438 48.543-19.413 585.144-252.438 585.144-252.438 5.178-2.594 4.207-5.826-2.272-4.213-2.615.654-584.174 158.257-584.174 158.257a128.517 128.517 0 0 1-33.846 4.846c-44.694.264-84.464-24.544-84.143-76.823.125-20.456 6.387-45.124 20.897-74.14Z"
      fill="#000"
    />
  </svg>
);

export default SvgNike;
