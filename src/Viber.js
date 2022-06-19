import * as React from "react";

const SvgViber = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#viber_svg__a)">
      <path
        d="M862.083 97.375C837.292 74.667 736.875 1.667 513.25.708c0 0-263.875-15.791-392.417 102.167-71.5 71.5-96.541 176.208-99.416 306.083-2.875 129.875-6.084 373.292 228.541 439.459h.209l-.209 100.791s-1.541 40.834 25.292 49.042c32.417 10.17 51.583-20.917 82.625-54.333 17-18.375 40.417-45.292 58.208-65.834 25 2.459 54 3.834 83.375 3.834 76.125 0 150.084-9.375 220.75-27.042l-6.25 1.333c32.417-10.541 215.834-34 245.5-277.375 31-251.25-14.75-409.75-97.375-481.458ZM889.25 560.5c-25.292 203.125-173.875 216.042-201.208 224.792-59.667 15.166-128.167 23.833-198.709 23.833-20.25 0-40.333-.708-60.208-2.125l2.667.167S330.208 929.625 298.583 961.458c-10.333 10.334-21.708 9.5-21.5-11.125 0-13.458.792-167.416.792-167.416C79.25 727.833 90.75 520.5 93.083 412.208c2.334-108.291 22.667-197.291 83.209-257.041 108.833-98.625 332.875-84 332.875-84 189.291.791 279.916 57.833 301 76.958 69.75 59.792 105.291 202.792 79.083 412.333v.042ZM617.958 402.667v.583c0 7-5.666 12.667-12.666 12.667-6.792 0-12.334-5.334-12.625-12.042v-.042c.166-1.75.291-3.833.291-5.875 0-33.375-27.041-60.416-60.416-60.416-1.25 0-2.5.041-3.709.125H529c-6.708-.375-12-5.875-12-12.625 0-7 5.667-12.667 12.667-12.667h.708-.042c.834-.042 1.875-.042 2.875-.042 46.917 0 84.917 38 84.917 84.917 0 1.917-.083 3.833-.208 5.708v-.25l.041-.041Zm39.625 22.125c1.959-82.834-49.791-147.667-148.041-154.917-6.625-.458-11.792-5.958-11.792-12.625 0-7 5.667-12.667 12.667-12.667.291 0 .625 0 .916.042h-.041.708c94.458 0 171.083 76.583 171.083 171.083 0 3.375-.083 6.75-.291 10.084l.041-.459a12.61 12.61 0 0 1-12.625 12.334c-7 0-12.666-5.667-12.666-12.667v-.333l.041.125ZM749.25 451v.083c0 7-5.667 12.667-12.667 12.667a12.6 12.6 0 0 1-12.625-12.542c-1-159.25-107.208-245.958-235.916-246.875-7 0-12.625-5.666-12.625-12.625 0-6.958 5.666-12.625 12.625-12.625 144.125 1 259.958 100.459 261.125 271.875l.083.042Zm-21.875 191.583v.375c-21.083 37.125-60.542 78.125-101.167 65.042l-.375-.583c-76.333-28.5-142.333-65.75-201.291-111.625l1.708 1.25c-30.958-24.667-58.167-51.875-82.042-81.792l-.791-1.042c-21.209-26.583-41.084-56.333-58.417-87.75l-1.667-3.291c-19.041-31.084-36.25-67-49.708-104.709l-1.25-4.083c-13.083-40.625 27.708-80.083 65.042-101.167h.375a35.459 35.459 0 0 1 19.083-5.541c11.125 0 21.042 5.125 27.583 13.083l.042.083s24.208 28.875 34.583 43.167c9.75 13.292 22.875 34.583 29.667 46.458 3.917 6.125 6.208 13.625 6.208 21.667 0 12-5.166 22.792-13.416 30.25l-.042.042-23.417 18.75c-6.458 6.25-10.458 15-10.458 24.666 0 .959.042 1.875.125 2.792v-.125c24.125 79.292 85.333 140.5 162.917 164.208l1.75.459c.791.083 1.75.125 2.666.125 9.667 0 18.417-4 24.667-10.417l18.75-23.417C586 531.167 596.792 526 608.792 526c8.041 0 15.5 2.333 21.833 6.333l-.167-.083c33.875 19.292 63.167 40.5 89.875 64.542l-.458-.417c8 6.417 13.042 16.208 13.042 27.167a34.51 34.51 0 0 1-5.709 19.083l.084-.125.083.083Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="viber_svg__a">
        <path fill="#fff" d="M0 0h1000v1000H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgViber;
