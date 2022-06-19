import * as React from "react";

const SvgNextJs = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#next-js_svg__a)">
      <path
        d="M467.254.27c-2.15.195-8.996.879-15.154 1.368C310.068 14.443 177.028 91.08 92.766 208.87c-46.92 65.494-76.93 139.785-88.27 218.475C.49 454.817 0 462.929 0 500.171c0 37.246.489 45.358 4.497 72.825C31.672 760.779 165.298 918.55 346.53 977.004c32.453 10.458 66.667 17.596 105.57 21.896 15.154 1.66 80.646 1.66 95.8 0 67.154-7.429 124.046-24.046 180.154-52.687 8.604-4.4 10.263-5.571 9.092-6.55-.784-.588-37.438-49.755-81.429-109.188l-79.959-108.017-100.196-148.287c-55.133-81.525-100.489-148.192-100.879-148.192-.392-.1-.783 65.788-.978 146.234-.293 140.862-.391 146.533-2.151 149.854-2.541 4.791-4.497 6.746-8.602 8.896-3.128 1.566-5.865 1.858-20.625 1.858h-16.912l-4.496-2.834a18.292 18.292 0 0 1-6.549-7.137l-2.053-4.4.195-195.992.293-196.089 3.031-3.812c1.564-2.053 4.887-4.692 7.234-5.963 4.007-1.955 5.571-2.151 22.482-2.151 19.942 0 23.265.782 28.446 6.452 1.466 1.564 55.719 83.284 120.627 181.722 64.904 98.433 153.663 232.841 197.263 298.825l79.179 119.941 4.008-2.637c35.483-23.071 73.021-55.917 102.733-90.129 63.246-72.629 104.009-161.192 117.696-255.621 4.009-27.467 4.496-35.579 4.496-72.825 0-37.242-.487-45.354-4.496-72.825C968.329 239.565 834.7 81.794 653.471 23.339c-31.967-10.362-65.983-17.498-104.104-21.8-9.388-.977-74-2.052-82.113-1.27Zm204.692 302.443c4.692 2.346 8.504 6.842 9.871 11.535.783 2.541.979 56.891.783 179.373l-.292 175.758-30.987-47.508-31.088-47.504V446.604c0-82.601.392-129.033.98-131.281 1.562-5.474 4.983-9.775 9.675-12.317 4.008-2.053 5.474-2.248 20.825-2.248 14.466 0 17.008.195 20.233 1.955Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="next-js_svg__a">
        <path fill="#fff" d="M0 0h1000v1000H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgNextJs;
