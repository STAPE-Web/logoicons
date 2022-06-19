import * as React from "react";

const SvgCPlusPlus = ({ title, titleId, ...props }) => (
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
      d="M253.25 500A246.999 246.999 0 0 1 500 253.25a247.745 247.745 0 0 1 213.708 123.292l-62.458 36.125L860.708 291.75a65.785 65.785 0 0 0-22.625-23.958L532.042 91.125c-17.667-10.208-46.5-10.208-64.125 0L161.875 267.792c-17.583 10.166-32 35.166-32 55.541v353.334c0 10.208 3.583 21.541 9.417 31.583l147.041-84.917A245.124 245.124 0 0 1 253.25 500Z"
      fill="#000"
    />
    <path
      d="M606.833 438.292A123.785 123.785 0 0 0 500 376.625a123.504 123.504 0 0 0-106.714 61.75 123.5 123.5 0 0 0-.119 123.292L500 500l106.833-61.708Z"
      fill="#000"
    />
    <path
      d="m860.708 291.75-210.25 121.375-43.583 25.208-.042-.041L500 500l-106.792 61.667A123.503 123.503 0 0 0 500 623.375a123.75 123.75 0 0 0 106.875-61.708l106.792 61.791A247.67 247.67 0 0 1 499.958 746.75a246.908 246.908 0 0 1-213.666-123.417L139.25 708.25c5.833 10.083 13.833 18.875 22.625 23.958l306.042 176.667c17.625 10.208 46.458 10.208 64.125 0l306.041-176.667c8.792-5.083 16.792-13.875 22.625-23.958 5.834-10.042 9.417-21.375 9.417-31.583V323.333c0-10.208-3.583-21.541-9.417-31.583ZM746.75 513.708h-27.417v27.417h-27.375v-27.417h-27.416v-27.416h27.416v-27.417h27.375v27.417h27.417v27.416Zm102.833 0h-27.416v27.417H794.75v-27.417h-27.375v-27.416h27.375v-27.417h27.417v27.417h27.416v27.416Z"
      fill="#000"
    />
  </svg>
);

export default SvgCPlusPlus;
