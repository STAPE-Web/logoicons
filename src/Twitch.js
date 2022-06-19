import * as React from "react";

const SvgTwitch = ({ title, titleId, ...props }) => (
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
      d="M87.094 0 21.813 174v695.469h239.125V1000h130.531l130.219-130.531h195.624l260.907-260.75V0H87.094ZM174 86.906h717.281v478.156L739.062 717.281H499.969L369.594 847.656V717.281H173.969L174 86.906Zm239.094 434.875H500V260.906h-86.906v260.875Zm238.906 0h86.906V260.906H652v260.875Z"
      fill="#000"
    />
  </svg>
);

export default SvgTwitch;
