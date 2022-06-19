import * as React from "react";

const SvgChevrolet = ({ title, titleId, ...props }) => (
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
      d="M996.042 407.667H663.333v-64.084a6.541 6.541 0 0 0-6.541-6.583H343.25a6.545 6.545 0 0 0-6.542 6.583v64.084H98.25c-3.625 0-8.042 2.916-9.875 6.583L.833 585.75c-1.875 3.667-.458 6.542 3.209 6.542h332.625v64.166c0 3.584 2.916 6.542 6.541 6.542H656.75a6.527 6.527 0 0 0 6.542-6.542v-64.166H901.75c3.625 0 8.042-2.917 9.917-6.542l87.5-171.5c1.873-3.625.458-6.583-3.167-6.583h.042Zm-103.959 41.5L840.25 550.708h-218v71.167H377.917v-71.167H108.125L160 449.167h218v-71.125h244.333v71.125h269.75Z"
      fill="#000"
    />
  </svg>
);

export default SvgChevrolet;
