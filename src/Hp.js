import * as React from "react";

const SvgHp = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#hp_svg__a)">
      <path
        d="M500 999.999h-14.75l102.5-281.041h140.5c24.875 0 52.042-18.667 60.583-41.959l111-304.333c17.875-49.667-10.083-90.833-63.666-90.833H640.542l-256.25 705C163.875 933.958 0 735.958 0 499.999 0 270.958 154.5 77.624 364.917 18.624L110.25 718.958h105.583l135.084-371.917h80L295.792 718.958h105.625l126.541-347.084c17.834-49.666-10.083-90.833-63.666-90.833H375L477.5.833c7.75 0 14.75-.792 22.5-.792 276.417 0 500 223.583 500 500 0 276.417-223.583 499.999-500 499.999v-.041Zm302.792-652.916h-80l-111.75 305.833H691l111.792-305.833Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="hp_svg__a">
        <path fill="#fff" d="M0 0h1000v1000H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgHp;
