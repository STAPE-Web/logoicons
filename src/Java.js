import * as React from "react";

const SvgJava = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#java_svg__a)" fill="#000">
      <path d="M362.542 773.375s-38.25 22.25 27.208 29.75c23.958 3.542 51.625 5.583 79.708 5.583 45.167 0 89.084-5.208 131.209-15.125l-3.875.75c15.583 9.5 33.708 18.542 52.583 26l2.458.834c-195.75 83.916-443.041-4.875-289.25-47.834l-.041.042ZM338.625 663.875s-42.875 31.75 22.583 38.5c28.625 3.583 61.75 5.667 95.375 5.667 60.875 0 120.167-6.75 177.167-19.5l-5.375 1a118.423 118.423 0 0 0 40.333 24.833l.834.25c-236.667 69.208-500.334 5.458-330.917-50.75ZM540.25 478.125c48.25 55.542-12.667 105.5-12.667 105.5s122.459-63.333 66.25-142.417c-52.541-73.833-92.833-110.541 125.25-237 0 0-342.333 85.5-178.833 273.917Z" />
      <path d="M799.167 854.375s28.25 23.333-31.125 41.333c-113 34.25-470.292 44.584-569.584 1.375-35.666-15.541 31.25-37.083 52.25-41.583 9.667-2.458 20.792-3.875 32.25-3.875h2.375-.125c-39.666-27.958-256.458 54.917-110 78.583 399.125 64.75 727.584-29.166 624.084-75.833h-.125ZM380.917 550.417s-181.75 43.166-64.375 58.833c31.625 2.625 68.5 4.083 105.666 4.083 47.459 0 94.334-2.416 140.5-7.125l-5.791.5c75.208-6.333 150.75-20 150.75-20-17.709 7.75-32.709 15.917-46.917 25.209l1.208-.75c-184.583 48.541-541.083 25.958-438.458-23.709C268.75 564 322.333 550.25 379.083 550.25H381h-.083v.167ZM706.917 732.708c187.583-97.5 100.875-191.166 40.291-178.583-8.291 1.542-15.499 3.542-22.458 6.083l.959-.291c3.958-5.584 9.416-9.875 15.791-12.292l.25-.083c119.75-42.084 211.917 124.208-38.667 190 1.542-1.375 2.792-3 3.709-4.792l.042-.083.083.041ZM593.833 0S697.75 103.917 495.25 263.75c-162.333 128.208-37.042 201.292 0 284.833-94.75-85.5-164.292-160.75-117.667-230.833 68.5-102.833 258.209-152.667 216.25-317.792V0Z" />
      <path d="M399.375 996.875c180 11.545 456.667-6.417 463.333-91.583 0 0-12.583 32.291-148.833 57.958-75.25 13.583-161.875 21.333-250.333 21.333-72.459 0-143.667-5.208-213.375-15.25l7.958.959s23.042 19.083 141.375 26.666l-.125-.083Z" />
    </g>
    <defs>
      <clipPath id="java_svg__a">
        <path fill="#fff" d="M0 0h1000v1000H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgJava;