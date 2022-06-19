import * as React from "react";

const SvgNpm = ({ title, titleId, ...props }) => (
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
      d="M0 312.5v343.75h281.25v62.5H500v-62.5h500V312.5H0Zm55.542 55.542H277.832v239.624h-55.603V423.645h-55.542v184.021H55.542V368.042Zm277.832 0h222.229v239.563H444.458v55.603H333.374V368.042Zm277.771 0H944.519v239.624h-55.603V423.645h-55.542v184.021h-55.542V423.645h-55.603v184.021H611.145V368.042Zm-166.687 55.603v128.479H500V423.645h-55.542Z"
      fill="#1A1A1A"
    />
  </svg>
);

export default SvgNpm;
