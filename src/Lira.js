import * as React from "react";

const SvgLira = ({ title, titleId, ...props }) => (
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
      d="M41.667 500C41.667 246.875 246.875 41.667 500 41.667c253.125 0 458.333 205.208 458.333 458.333 0 253.125-205.208 458.333-458.333 458.333-253.125 0-458.333-205.208-458.333-458.333ZM500 250a41.667 41.667 0 1 0-83.333 0v53.333l-96.5 32.125a41.676 41.676 0 1 0 26.333 79.084l70.167-23.417v37.167l-96.5 32.166a41.676 41.676 0 1 0 26.333 79.084l70.167-23.417v192.208A41.667 41.667 0 0 0 458.333 750c41.375 0 102.542-12.083 154.584-49.542C667 661.5 708.333 596.917 708.333 500A41.666 41.666 0 1 0 625 500c0 69.75-28.125 109.333-60.833 132.833A183.404 183.404 0 0 1 500 661.458V488.333l96.5-32.166a41.67 41.67 0 0 0 24.104-20.892 41.68 41.68 0 0 0 2.271-31.817 41.666 41.666 0 0 0-20.892-24.103 41.669 41.669 0 0 0-31.816-2.272L500 400.542v-37.209l96.5-32.166a41.676 41.676 0 1 0-26.333-79.084L500 275.542V250Z"
      fill="#000"
    />
  </svg>
);

export default SvgLira;
