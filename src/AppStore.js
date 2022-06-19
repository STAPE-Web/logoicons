import * as React from "react";

const SvgAppStore = ({ title, titleId, ...props }) => (
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
      d="M500 83.334c230.125 0 416.667 186.541 416.667 416.666S730.125 916.667 500 916.667C269.875 916.667 83.333 730.125 83.333 500 83.333 269.875 269.875 83.334 500 83.334ZM367.625 639.291c-16.458-19.875-36.917-26.959-61.625-21.209l-6.25 1.709-24.583 42.333a34.292 34.292 0 0 0 56.916 38.167l2.584-3.875 32.916-57.125h.042Zm182.792-278.459c-20.334 16.834-40.834 66.542-12.084 116.125L665 696.375a34.333 34.333 0 0 0 61.5-30.083l-2.042-4.167-33.416-58h49.583a34.164 34.164 0 0 0 31.677-21.159 34.172 34.172 0 0 0 2.573-13.133 34.168 34.168 0 0 0-30-34l-4.292-.25h-89.166L560 377.375l-9.583-16.5v-.042ZM562 234a34.373 34.373 0 0 0-44.292 8.75l-2.583 3.833-15.292 26.375-14.958-26.375a34.335 34.335 0 0 0-61.614 5.031 34.335 34.335 0 0 0 .114 25.053l2.042 4.166 34.916 60.709-111.875 193.875h-87.375a34.157 34.157 0 0 0-24.243 10.007 34.167 34.167 0 0 0-10.007 24.243c0 17.541 13 31.916 29.959 34.041l4.291.25H572.75c14.167-26.666-2.5-64.541-33.75-68.25l-5.042-.291H427.583l147-254.584A34.292 34.292 0 0 0 562 234Z"
      fill="#000"
    />
  </svg>
);

export default SvgAppStore;