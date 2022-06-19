import * as React from "react";

const SvgKwork = ({ title, titleId, ...props }) => (
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
      d="M283.951 765.432V592.593l271.605-345.679h148.148v37.037L524.691 487.654l191.358 216.05v55.555H574.074L432.099 567.901v197.531H283.951ZM222.222 246.914v92.592h55.556v166.667l141.975-166.667v-92.592H222.222Z"
      fill="#15191F"
    />
  </svg>
);

export default SvgKwork;
