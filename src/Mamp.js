import * as React from "react";

const SvgMamp = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1000 868"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#mamp_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.633 334.828c10.206-70.382 88.776-289.715 309.424-331.3C445.282-21.04 605.851 46.46 718.585 160.793c-56.207 38.586-93.785 71.917-122.172 112.422 21.16 78.571 83.709 110.561 127.746 123.87-48.792-29.499-79.591-57.333-98.663-116.708 104.368-124.059 216.087-164.18 225.525-165.136 87.262 69.613 148.855 196.553 146.637 330.213-2.602 154.774-86.754 314.283-183.265 378.647-13.243 6.336-43.718-10.368-47.901-28.471 19.768-45.878 66.472-157.59 72.235-241.02 5.451-80.106-47.588-127.135-92.074-69.23-61.847 103.523-88.842 232.128-115.837 370.907-45.429 12.983-122.549 16.249-155.879-1.535-4.248-85.869 15.774-232.512-41.188-283.958-24.4-22.071-48.48-11.839-64.826 8.508-41.189 50.997-40.369 183.245-32.381 268.984-46.073 28.471-124.137 22.519-173.501 4.866-19.775-134.753-66.284-298.991-104.304-424.721-10.583 50.548-15.715 110.626-14.07 162.261C19.26 570.026-9.64 461.319 5.634 334.828Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="mamp_svg__a">
        <path fill="#fff" d="M0 0h1000v867.089H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgMamp;
