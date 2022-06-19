import * as React from "react";

const SvgStackoverflow = ({ title, titleId, ...props }) => (
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
      d="M791.083 911.042V644.208H880V1000H76.833V644.208h88.75v266.834h625.5Zm-536.458-88.917h447.458v-89.042H254.625v89.042Zm10.792-202.167 436.666 91.209 18.792-86.25-436.583-91.125-18.875 86.166Zm56.625-210.666 404.375 188.75 37.625-81.25-404.417-188.75-37.583 80.666v.584Zm113.125-199.375 342.375 285.625 56.625-67.5L491.833 142.5l-56.25 67.375-.416.042ZM656.292 0l-72.75 53.917 266.875 358.5 72.75-53.917L656.208 0h.084Z"
      fill="#000"
    />
  </svg>
);

export default SvgStackoverflow;
