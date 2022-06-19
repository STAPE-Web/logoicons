import * as React from "react";

const SvgSaveFrom = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 991 915"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M1.5 397.5H292V.5h400.5v397h297L495.5 914 1.5 397.5Z"
      fill="#000"
    />
    <path
      d="M64.5 163H183V.5h80.5v366L64.5 163ZM727.5.5H803V163h121.5l-197 203.5V.5Z"
      fill="#000"
    />
    <path
      d="M1.5 397.5H292V.5h400.5v397h297L495.5 914 1.5 397.5Z"
      stroke="#000"
    />
    <path
      d="M64.5 163H183V.5h80.5v366L64.5 163ZM727.5.5H803V163h121.5l-197 203.5V.5Z"
      stroke="#000"
    />
  </svg>
);

export default SvgSaveFrom;
