import * as React from "react";

const SvgGurufy = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1000 762"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#gurufy_svg__a)" fill="#000">
      <path d="M485.357 771.428C340.714 713.571 197.679 689.464 54.643 697.5L0 147.857c147.857-8.036 308.571 17.678 485.357 83.571v540ZM485.357 154.286V180c-123.75-45-245.893-72.321-364.821-80.357L115.714 0c115.715 6.429 250.715 65.893 369.643 154.286ZM527.143 771.429c144.643-57.857 287.678-81.964 430.714-73.929l54.643-551.25c-147.857-8.035-308.571 17.679-485.357 83.572v541.607ZM527.143 154.286V180c125.357-45 247.5-72.321 364.821-78.75L896.786 0C781.071 6.429 646.071 65.893 527.143 154.286Z" />
    </g>
    <defs>
      <clipPath id="gurufy_svg__a">
        <path fill="#fff" d="M0 0h1000v761.905H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgGurufy;
