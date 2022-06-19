import * as React from "react";

const SvgCodepen = ({ title, titleId, ...props }) => (
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
      d="M500 80 80 346.875v306.172L500 920l420-266.875v-306.25L500 80Zm0 503.672-118.672-82.266L500 420.469l118.672 80.937L500 583.672Zm40-231.563V198.984l268.594 170.704-120.391 83.437L540 352.109Zm-80 0L311.797 453.125l-120.391-83.437L460 198.984v153.125Zm-218.125 148.75L160 556.641V444.062l81.875 56.797Zm69.531 48.203L460 652.109v148.907L191.797 630.547l119.609-81.485ZM540 652.109l148.594-103.047 119.609 81.485L540 801.016V652.109Zm218.125-151.25L840 444.062v112.579l-81.875-55.782Z"
      fill="#000"
    />
  </svg>
);

export default SvgCodepen;
