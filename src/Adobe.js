import * as React from "react";

const SvgAdobe = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1000 970"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#adobe_svg__a)" fill="#000">
      <path d="M633.222 24.921h371.298V913.81L633.222 24.921ZM371.63 24.921H0V913.81L371.63 24.921ZM340.037 734.958l162.37-382.556 236.519 561.334H583.963l-70.741-178.778H340.037Z" />
    </g>
    <defs>
      <clipPath id="adobe_svg__a">
        <path fill="#fff" d="M0 0h1000v969.365H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgAdobe;
