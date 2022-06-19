import * as React from "react";

const SvgTinder = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#tinder_svg__a)">
      <path
        d="M388.208 393.792c1.875 3.041 5.125 5 8.834 5 2.5 0 4.833-.875 6.583-2.375l.625-.5c16.25-13.542 30.875-27.5 44.625-42.375 133.708-145.125 55.625-323.292 55-324.958-3.75-8.75-1.25-19.126 6.25-24.75 8.125-5.626 18.125-5 25.625 1.374C988.875 426.625 868.875 747.625 860.125 769.25 823.875 900.125 679.5 994.834 508.292 999.667c-5.75.333-10.084.333-15.125.333C291 1000 119.125 875.459 119.125 716.375v-2.5c0-220.708 199.792-438.417 208.708-447.667 5.667-6.208 14.375-8.125 21.875-4.375 7.5 3.167 12.375 10.625 12.125 18.792-1.791 43.167 6.959 80.625 26.292 112.5v.625l.083.042Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="tinder_svg__a">
        <path fill="#fff" d="M0 0h1000v1000H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTinder;
