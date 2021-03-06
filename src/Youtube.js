import * as React from "react";

const SvgYoutube = ({ title, titleId, ...props }) => (
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
      d="M961.023 208.532c-36.097-42.91-102.742-60.413-230.02-60.413H268.987c-130.19 0-197.964 18.632-233.926 64.316C0 256.977 0 322.606 0 413.439v173.125C0 762.535 41.6 851.88 268.987 851.88h462.019c110.375 0 171.536-15.445 211.104-53.312 40.577-38.833 57.89-102.236 57.89-212.004V413.439c0-95.791-2.713-161.807-38.977-204.907Zm-319.02 315.371-209.8 109.648a32.223 32.223 0 0 1-14.942 3.668 32.252 32.252 0 0 1-32.258-32.258V386.368a32.256 32.256 0 0 1 15.51-27.568 32.254 32.254 0 0 1 31.616-1.058l209.8 108.942a32.26 32.26 0 0 1 .074 57.219Z"
      fill="#000"
    />
  </svg>
);

export default SvgYoutube;
