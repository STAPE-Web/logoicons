import * as React from "react";

const SvgAsus = ({ title, titleId, ...props }) => (
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
      d="M996 449.5v-52.75H802c-40.5 0-58.75 25-61.75 49.25v.75-50h-57v52.75H996Zm-256 19-57-3.25V526c0 19-9.5 24.75-42.5 24.75H595c-27.25 0-38.75-7.75-38.75-24.75v-66.5l-57.75-4.25v75.5h-1.25c-3.25-22-11.5-47.5-66.5-51.25L250 467.5c0 27.75 19.75 44.25 50.75 47.5l126 12.75c10 .75 17.25 3.75 17.25 12 0 9-7.5 10-19 10H247.75V467.5L190 463.75v139.5h235.25c52.5 0 69.25-27.25 71.75-50h1.25c6.5 36 38 50 91.25 50h58.75c62.25 0 91.75-19 91.75-63.5V468.5Zm183.25 10.75L742.5 468.5c0 27.75 18.25 46.25 49.25 48.75l128.75 10c10 .75 16 3.25 16 11.5 0 7.75-7 10.75-21.5 10.75H739.5v53.75h179.25c56.5 0 81.25-19.75 81.25-64.75 0-40.5-22.25-55.75-76.75-59.25Zm-424.75-82.5h57.75v52.75H498.5v-52.75Zm-340.25 64.5L95.5 455 0 603.25h70.25l88-142ZM488 396.75H311.75c-41 0-59 25.5-63.25 50v-50h-97.75C137 396.75 130.5 401 124 410.5l-27 39h391v-52.75Z"
      fill="#000"
    />
  </svg>
);

export default SvgAsus;
