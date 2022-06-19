import * as React from "react";

const SvgGooglePlay = ({ title, titleId, ...props }) => (
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
      d="M932.736 463.831 750.575 358.717 600.757 503.538l136.924 132.358 195.053-112.581c10.746-6.198 17.167-17.322 17.167-29.733.002-12.414-6.419-23.538-17.165-29.751ZM719.655 340.853 519.196 225.13 79.872 0 576.07 479.667l143.585-138.814ZM87.167 1000 519.95 761.6l186.813-107.844L576.07 527.408 87.167 1000ZM50.562 19.416l-.465 968.689 501.281-484.577L50.562 19.416Z"
      fill="#000"
    />
  </svg>
);

export default SvgGooglePlay;
