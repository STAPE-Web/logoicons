import * as React from "react";

const SvgZoom = ({ title, titleId, ...props }) => (
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
      d="M672.38 80H327.62C191.08 80 80 191.08 80 327.62v344.76C80 808.92 191.08 920 327.62 920h344.76C808.92 920 920 808.92 920 672.38V327.62C920 191.08 808.92 80 672.38 80ZM600 607.72c0 17.84-14.44 32.28-32.28 32.28H300.1c-44.24 0-80.1-35.86-80.1-80.1V372.26c0-17.82 14.44-32.26 32.28-32.26h267.64c44.22 0 80.08 35.86 80.08 80.1v187.62Zm180-3.8c0 15.7-17.28 25.28-30.6 16.96l-100-62.5a20.019 20.019 0 0 1-9.4-16.96V438.6c0-6.9 3.56-13.3 9.4-16.96l100-62.5c13.32-8.34 30.6 1.24 30.6 16.94v227.84Z"
      fill="#1A1A1A"
    />
  </svg>
);

export default SvgZoom;
