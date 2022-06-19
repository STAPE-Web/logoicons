import * as React from "react";

const SvgUtorrent = ({ title, titleId, ...props }) => (
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
      d="M1000 500.311C1000 224.2 776.111.363 500 .363 223.837.363 0 224.252 0 500.311 0 713.144 133.254 894.466 320.65 966.57l-94.373-438.642-26.682-123.962-47.238-219.269 182.984-39.4 67.639 314.524c18.272 84.926 56.79 130.503 120.224 116.799 50.197-10.798 71.48-51.651 77.19-82.901 2.544-11.836.675-26.474-2.439-40.802l-74.907-348.058L705.98 65.563l85.444 397.165c34.365 159.728 127.388 184.178 127.388 184.178s-125.571 27.045-178.208 38.31c-52.533 11.368-87.936-82.589-87.936-82.589l-3.634.778c-14.95 40.75-31.821 106.935-162.323 135.071-9.552 2.024-18.895 3.322-28.135 4.308l55.232 256.853C783.43 992.317 1000 771.75 1000 500.311Z"
      fill="#030104"
    />
  </svg>
);

export default SvgUtorrent;
