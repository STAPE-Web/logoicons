import * as React from "react";

const SvgFortnite = ({ title, titleId, ...props }) => (
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
      d="M180 80c-55.14 0-100 44.86-100 100v640c0 55.14 44.86 100 100 100h640c55.14 0 100-44.86 100-100V180c0-55.14-44.86-100-100-100H180Zm140 100h340l-13.359 60H800l-20 140 20 340-280-20v100l-200 40V725.703L200 760l20-360-20-160h120v-60Zm40 40v570.156l120-22.226V560h100V440H480V340h103.477l26.679-120H360Z"
      fill="#000"
    />
  </svg>
);

export default SvgFortnite;
