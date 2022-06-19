import * as React from "react";

const SvgTelegram = ({ title, titleId, ...props }) => (
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
      d="M500 0C223.875 0 0 223.875 0 500s223.875 500 500 500 500-223.875 500-500S776.125 0 500 0Zm245.583 342.542L663.5 729.208c-6.042 27.417-22.375 34.084-45.167 21.167l-125-92.083-60.25 58.083c-5.833 7.5-14.875 12.292-25 12.292h-.208l8.875-127.25 231.667-209.25c10-8.875-2.25-13.917-15.542-5.042l-286.208 180.25-123.334-38.5c-26.666-8.458-27.416-26.667 5.625-39.75l481.917-185.75c22.417-8.167 41.917 5.333 34.667 39.208l.041-.041Z"
      fill="#000"
    />
  </svg>
);

export default SvgTelegram;
