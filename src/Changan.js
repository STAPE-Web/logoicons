import * as React from "react";

const SvgChangan = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1000 870"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#changan_svg__a)">
      <path
        d="M470.396.077C357.707 2.222 222.005 21.791 143.19 69.087 92.37 99.895 29.884 162.627 10.708 259.206c-19.175 96.579-10.311 190.642 8.6 287.32 18.913 96.678 56.793 204.905 161.728 260.653 104.935 55.747 175.313 62.361 319.132 61.946 143.82.415 214.198-6.199 319.133-61.946 104.935-55.748 142.815-163.975 161.727-260.653 18.912-96.678 27.772-190.741 8.6-287.32-19.175-96.579-81.662-159.31-132.482-190.117C754.748 12.76 642.09 1.956 529.94.077c-20.426.136-40.63-.228-59.544 0Zm146.743 25.998c41.612 3.97 145.734 12.04 223.662 58.502 77.929 46.462 112.762 105.546 127.316 177.206 14.553 71.66 13.286 162.289-6.878 276.997-20.165 114.709-76.59 210.148-153.127 250.341-76.537 40.194-173.703 61.464-307.944 59.391-134.241 2.073-231.406-19.197-307.943-59.391C115.688 748.928 59.263 653.489 39.098 538.78 18.933 424.072 17.667 333.443 32.22 261.783c14.553-71.66 49.387-130.744 127.315-177.206 77.928-46.461 182.051-54.532 223.663-58.502 77.712-6.45 157.204-6.956 233.941 0ZM474.356 46.018c-63.878.797-132.261 8.614-179.059 18.67-53.483 11.495-71.77 15.553-117.892 43.145-46.123 27.592-102.837 83.771-120.24 170.273-17.403 86.502-9.353 170.76 7.81 257.351 17.165 86.59 51.54 183.527 146.776 233.458 158.279 82.436 422.527 79.154 576.834 0 95.236-49.931 129.612-146.868 146.776-233.458 17.164-86.591 25.214-170.849 7.81-257.351-17.403-86.502-74.117-142.681-120.239-170.273-46.123-27.592-64.409-31.65-117.892-43.144-46.798-10.057-115.181-17.874-179.06-18.67-17.711.134-35.223-.194-51.624 0Zm125.637 41.598c17.367 1.629 47.383 4.114 81.319 10.651 5.024 1.035 7.851 2.66 6.746 7.438-54.573 132.365-112.865 264.783-173.673 397.149-8.197 17.554-18.554 18.23-26.942 3.247-61.348-133.448-120.145-266.948-175.165-400.396-1.104-4.778 1.723-6.403 6.747-7.438 33.935-6.537 63.951-9.022 81.318-10.651 66.319-5.457 134.383-5.826 199.65 0ZM264.154 112.66c3.107-.079 4.147 1.973 4.037 5.858l.044-.121v222.73c0 70.297 11.493 103.268 42.584 160.587L459.821 776.1c5.088 9.696-3.165 9.062-12.132 9.16-88.845-3.815-156.872-21.09-212.298-49.704-66.112-34.131-114.855-115.166-132.273-212.572-17.419-97.406-18.517-174.363-5.946-235.214s42.658-111.03 109.972-150.483c16.784-9.838 34.979-17.647 53.39-23.881 1.427-.462 2.635-.721 3.62-.746Zm472.029 0c.984.025 2.193.284 3.62.746 18.41 6.234 36.605 14.043 53.39 23.881 67.313 39.453 97.401 89.632 109.972 150.483 12.571 60.851 11.472 137.808-5.946 235.214s-66.162 178.441-132.274 212.572c-55.425 28.614-123.453 45.889-212.297 49.704-8.968-.098-17.221.536-12.133-9.16l149.002-274.386c31.092-57.319 42.585-90.29 42.585-160.587v-222.73l.044.121c-.111-3.885.929-5.937 4.037-5.858Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="changan_svg__a">
        <path fill="#fff" d="M0 0h1000v869.863H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgChangan;