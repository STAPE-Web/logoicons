import * as React from "react";

const SvgFacebook = ({ title, titleId, ...props }) => (
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
      d="M1000 503.042c0-276.125-223.875-500-500-500S0 226.917 0 503.042c0 249.583 182.833 456.416 421.875 493.916V647.583H294.917V503h126.958V392.917c0-125.292 74.667-194.542 188.875-194.542 54.667 0 111.917 9.792 111.917 9.792v123.041h-63.084c-62.125 0-81.5 38.542-81.5 78.084v93.75H716.75l-22.167 144.583h-116.5V997C817.167 959.458 1000 752.583 1000 503.042Z"
      fill="#000"
    />
  </svg>
);

export default SvgFacebook;
