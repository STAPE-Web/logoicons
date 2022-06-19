import * as React from "react";

const SvgVirusTotal = ({ title, titleId, ...props }) => (
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
      d="m104.917 145.833 358 355.938-357.354 352.395h790.27l-.645-708.333H104.917Zm707.437 625h-514l280.104-270.521-276.354-271.146H812.5l-.146 541.667Z"
      fill="#000"
    />
    <path
      d="m104.917 145.833 358 355.938-357.354 352.395h790.27l-.645-708.333H104.917Zm707.437 625h-514l280.104-270.521-276.354-271.146H812.5l-.146 541.667Z"
      fill="#000"
    />
  </svg>
);

export default SvgVirusTotal;
