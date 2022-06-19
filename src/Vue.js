import * as React from "react";

const SvgVue = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#vue_svg__a)" fill="#000">
      <path d="M181.129 66.667H33.333a33.333 33.333 0 0 0-28.792 50.129l466.666 799.997A33.338 33.338 0 0 0 500 933.333c11.855 0 22.819-6.3 28.793-16.54L995.46 116.796a33.362 33.362 0 0 0 .113-33.398 33.34 33.34 0 0 0-28.906-16.731H818.873l-318.87 531.456L181.129 66.667Z" />
      <path d="M741.127 66.667h-195.06l-46.066 92.131-46.066-92.131h-195.06l241.128 401.879 241.124-401.88Z" />
    </g>
    <defs>
      <clipPath id="vue_svg__a">
        <path fill="#fff" d="M0 0h1000v1000H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgVue;
