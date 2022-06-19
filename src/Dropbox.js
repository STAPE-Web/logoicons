import * as React from "react";

const SvgDropbox = ({ title, titleId, ...props }) => (
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
      d="M748.612.396H250.595C112.609.396 0 113.006 0 250.991v498.811c0 137.192 112.609 249.801 250.595 249.801h498.81c137.986 0 250.595-112.609 250.595-250.594V250.991C999.207 113.006 886.598.396 748.612.396Zm-66.614 695.48-182.394 110.23-182.395-110.23v-40.444l54.718 36.479 128.47-107.058 127.676 107.058 53.925-36.479v40.444Zm129.263-162.569L628.073 653.053 499.604 545.995l-128.47 107.058-183.188-119.746 126.884-102.3-126.884-102.3 183.188-119.746 128.47 107.851 128.469-107.851 183.188 119.746-126.883 102.3 126.883 102.3Z"
      fill="#000"
    />
    <path
      d="m314.83 431.007 184.774 114.988 184.774-114.988-184.774-114.195L314.83 431.007Z"
      fill="#000"
    />
  </svg>
);

export default SvgDropbox;
