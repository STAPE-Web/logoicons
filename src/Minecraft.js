import * as React from "react";

const SvgMinecraft = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1030 1197"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M15 309.48 515.747 18 1015 309.48m-1000 0v128.55m0-128.55 500.747 285.501M1015 309.48 515.747 594.981M1015 309.48v128.55m-499.253 740.66L1015 886.46V438.03m-499.253 740.66L15 886.46V438.03m500.747 740.66V725.773m0-130.792v130.792M1015 438.03l-57.549 29.895v127.056l-53.811 32.884v-62.032l-54.559 29.148v66.517l-58.296 29.148V565.833l-111.361 62.032v71.002l-108.37 58.296v-66.517l-55.307 35.127m0 0-56.053-35.127v66.517l-111.361-58.296v-71.002l-112.855-62.032v124.813l-55.306-29.148v-66.517l-49.327-29.148v62.032l-60.539-32.884V467.925L15 438.03"
      stroke="#000"
      strokeWidth={30}
    />
  </svg>
);

export default SvgMinecraft;
