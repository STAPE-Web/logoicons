import * as React from "react";

const SvgWappalyzer = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1030 1000"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#wappalyzer_svg__a)" clipRule="evenodd">
      <path
        d="m72.344 500-57.328 41.094L15 566.25l500 358.562 499.97-358.562.03-25.125L957.656 500 515 729.781 72.344 500Z"
        stroke="#000"
        strokeWidth={30}
      />
      <path
        fillRule="evenodd"
        d="M515 75.203 15.031 433.75 15 458.906 515 817.5l499.97-358.594.03-25.156L515 75.203Zm65.406 353.875-60.937-84.062 51.969-38.032 108.343 160.204-43.64 31.937-116.532-48.203-.5.359 66.36 84.907-43.641 31.937-219.172-79.297 52.141-38.156 114.578 44.625.656-.469-63.593-81.922 41.015-30 112.281 46.516.672-.344Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="wappalyzer_svg__a">
        <path fill="#fff" d="M0 0h1030v1000H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgWappalyzer;
