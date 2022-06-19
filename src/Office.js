import * as React from "react";

const SvgOffice = ({ title, titleId, ...props }) => (
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
      d="m598.047 133.333-431.38 146.68v439.974l166.666-55.013V298.307L600 243.359V775l-433.333-55.013 431.38 146.679 235.286-55.013V188.346l-235.286-55.013Z"
      fill="#1A1A1A"
    />
  </svg>
);

export default SvgOffice;
