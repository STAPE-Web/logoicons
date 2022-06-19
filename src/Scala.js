import * as React from "react";

const SvgScala = ({ title, titleId, ...props }) => (
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
      d="M191.25 1000c188.969 0 575.344-63.156 617.5-125V636.219c-39.875 58.75-428.562 121.406-617.5 121.406V1000Zm0-318.188c188.969 0 575.344-63.156 617.5-125V318.219c-39.875 58.593-428.562 121.25-617.5 121.25v242.343Zm0-318.031c188.969 0 575.344-63.156 617.5-125V0c-39.875 58.594-428.562 121.25-617.5 121.25v242.531Z"
      fill="#000"
    />
  </svg>
);

export default SvgScala;
