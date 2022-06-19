import * as React from "react";

const SvgEa = ({ title, titleId, ...props }) => (
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
      d="m693.125 256.75-247 390.708H176.667l62.833-95.833h167.667l61.416-97.292H94.333l-61.416 97.292h89.833L0 743.333h503l190.125-302.458 68.833 110.833h-58.375L642.208 647.5h181.125l61.375 95.833H1000L693.125 256.75Zm-477.542 4.458L154.167 358.5l396.666-1.458 61.417-95.834H215.583Z"
      fill="#000"
    />
  </svg>
);

export default SvgEa;
