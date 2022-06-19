import * as React from "react";

const SvgYandex = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#yandex_svg__a)">
      <path
        d="M545.125 616.667 374.375 1000H249.958l187.5-409.75C349.375 545.5 290.583 464.5 290.583 314.667 290.375 104.917 423.292.042 581.375.042h160.75v999.998H634.542V616.708h-89.417v-.041Zm89.458-525.834h-57.416c-86.667 0-170.709 57.417-170.709 223.834 0 160.75 76.959 212.5 170.709 212.5h57.416V90.833Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="yandex_svg__a">
        <path fill="#fff" d="M0 0h1000v1000H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgYandex;
