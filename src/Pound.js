import * as React from "react";

const SvgPound = ({ title, titleId, ...props }) => (
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
      d="M500 55.556A444.443 444.443 0 0 0 64.095 586.707a444.45 444.45 0 0 0 349.198 349.198A444.442 444.442 0 0 0 869.542 746.92a444.447 444.447 0 0 0-55.272-561.19A444.448 444.448 0 0 0 500 55.556Zm180.556 720H326.111A34.722 34.722 0 0 1 320 706.667c4.167 0 47.778-13.611 47.778-98.334v-80.555h-69.445A27.781 27.781 0 0 1 270.555 500a27.781 27.781 0 0 1 27.778-27.778h69.445V330a162.496 162.496 0 0 1 158.889-166.667 156.39 156.39 0 0 1 116.944 53.889 35.033 35.033 0 0 1 7.006 11.726 35.021 35.021 0 0 1-1.354 26.759 35.003 35.003 0 0 1-46.637 16.612 34.987 34.987 0 0 1-10.959-8.152 85.561 85.561 0 0 0-63.889-30.278A93.057 93.057 0 0 0 438.333 330v142.222h83.334a27.777 27.777 0 0 1 0 55.556h-83.334v80.555a212.499 212.499 0 0 1-21.666 97.778h263.889a34.722 34.722 0 0 1 0 69.445Z"
      fill="#000"
    />
  </svg>
);

export default SvgPound;