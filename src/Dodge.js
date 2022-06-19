import * as React from "react";

const SvgDodge = ({ title, titleId, ...props }) => (
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
      d="m917.542 722.404-.009.014c-16.254 26.364-47.848 53.629-84.787 79.57-37.389 26.256-81.979 52.32-126.025 75.936-88.123 47.249-175.214 85.303-200.764 96.198l-5.99 2.554-5.956-2.632c-25.01-11.051-109.453-49.201-196.491-96.643-43.51-23.715-87.903-49.879-125.933-76.254-37.706-26.151-70.402-53.345-89.364-79.343-5.868-8.013-9.97-20.816-13.256-34.749-3.46-14.672-6.543-33.105-9.307-54.252-5.533-42.341-9.928-96.71-13.342-156.019-6.832-118.681-9.787-258.137-9.902-362.887v-.131c.134-17.52 4.423-33.025 16.51-45.14C64.392 57.137 81 50.666 101.125 46.274c19.301-4.367 76.531-10.112 149.354-14.774 73.502-4.706 164.364-8.393 251.705-8.372l415.359 699.276Zm0 0 .008-.013m-.008.013.008-.013m0 0c5.61-9.144 9.682-24.289 13.039-41.394 3.503-17.852 6.638-40.239 9.453-65.601 5.634-50.768 10.085-114.436 13.516-179.615 6.863-130.357 9.691-267.665 9.65-321.889.043-17.533-4.139-33.073-16.169-45.224-11.408-11.522-27.992-18.002-48.017-22.394M917.55 722.39 899.022 46.274m0 0c-19.374-4.36-76.215-10.108-148.336-14.774-72.758-4.706-162.509-8.393-248.496-8.372l396.832 23.146Z"
      stroke="#000"
      strokeWidth={30}
    />
    <path
      d="M515.433 263.775c5.169-17.85 44.238-43.61 50.328-38.128-.231-6.592 28.187-32.624 38.671-28.083-2.532-7.889 36.433-32.268 45.556-25.425 2.26-9.898 58.719-17.369 69.915-7.952 6.445-7.22 56.521 4.918 57.735 17.494 9.229-8.056 60.31 45.933 60.393 73.095 0 10.61-48.046-32.226-78.389-22.788-50.014 15.234-113.797 68.554-168.979 148.848-15.423 21.826-54.911 29.799-63.574-5.818 0 .021-17.034-93.289-11.656-111.243Z"
      fill="#000"
    />
    <path
      d="M511.206 761.693c-8.036-13.33-5.545-29.297 1.046-35.491 9.333-8.978 36.056-1.737 38.149-10.066 5.273-19.064-8.287-25.802-5.818-52.441.67-9.228 18.269-76.611 22.768-82.637 3.725-4.939 26.22-12.786 32.31-15.339 3.704-4.206 6.32-9.292 6.362-18.018-29.213-9.165-37.103 18.185-41.309 16.971-4.227-.879 2.156-29.778 5.818-32.833 3.683-3.243 38.169-10.902 41.852-16.971 4.29-6.424 20.194-67.905 0-68.847 1.8.251-.837-4.164.523-3.725C654.425 451.88 682.361 254.107 784 254.797c101.157.9 95.884 147.237 90.045 152.552-11.593 10.275-28.334 6.529-29.129 15.883-5.022 89.502-85.002 185.281-109.109 176.931-14.565-5.106-2.177-50.578 4.771-51.394-6.424-2.888-.105-49.7 7.408-50.851-5.943-4.123-.691-47.272 6.885-47.67-3.788-3.39-3.39-32.938-11.112-47.67-5.671-11.258-30.72-17.327-32.31 10.066 15.339-7.262 16.385 42.229 10.065 50.85-6.299 8.224-46.812 27.162-59.326 37.605.921 21.114-19.063 102.14-33.9 125.557-14.627 22.914-29.359 36.6-37.604 57.735-8.601 20.947-3.202 56.836-22.245 73.095-8.517 7.115-53.78 10.296-57.233 4.207Z"
      fill="#000"
    />
    <path
      d="M858.141 430.117c4.897-8.057 24.317-11.258 31.264-7.408 8.287 4.646 14.376 68.994 5.818 70.982 7.491 3.85-1.842 52.671-11.133 52.964 7.366 2.93-7.889 50.809-16.95 49.26 5.357 7.345-19.357 46.268-25.949 43.987-2.344 40.178-122.941 59.284-120.242 25.425 1.319-16.238 19.357 7.68 100.655-118.651 35.658-56.082 29.632-104.485 36.537-116.559ZM485.237 264.319c-8.329-18.583-42.899-43.297-48.738-37.605 0-6.801-28.417-32.833-38.671-28.083 2.302-8.119-36.684-32.498-46.08-25.425-1.967-10.107-58.426-17.578-69.391-7.952-6.675-7.429-56.752 4.709-57.735 17.474-9.459-8.266-60.54 45.723-60.393 73.116-.23 10.4 47.816-32.457 77.866-23.312 50.307 15.527 114.09 68.868 169.502 148.848 15.193 22.161 53.822 30.113 62.507-5.839.021 0 19.65-92.975 11.133-111.222Z"
      fill="#000"
    />
    <path
      d="M489.464 762.237c7.805-14.063 6.382-29.527-.524-36.014-9.019-8.664-35.218-.9-37.604-8.999-4.98-19.294 8.601-26.032 6.362-52.441-.9-9.458-18.499-76.82-22.768-82.637-3.976-5.169-26.451-13.016-32.31-15.36-3.934-4.416-6.529-9.522-6.885-18.541 29.527-8.872 37.416 18.499 41.853 17.495 3.976-1.109-2.386-30.009-5.818-33.378-3.934-2.95-37.897-11.111-42.375-16.427-4.625-6.194-19.901-68.114 0-69.37-1.507.565 1.13-3.871-.524-3.725-41.224 9.898-69.161-187.896-171.092-186.975-100.864.669-95.591 147.006-89.522 152.551 11.342 10.066 28.104 6.32 28.606 15.883 5.294 89.293 85.295 185.072 109.653 176.387 14.334-4.792 1.946-50.243-4.771-51.373 6.194-2.553-.105-49.386-7.408-50.307 5.713-4.353.439-47.502-6.906-48.214 3.537-3.076 3.16-32.645 10.589-47.147 5.943-11.488 31.013-17.557 32.31 10.066-15.025-7.471-16.092 41.999-9.521 50.306 6.068 8.517 46.581 27.456 59.304 38.128-1.151 20.905 18.834 101.931 33.378 125.013 14.92 23.228 29.652 36.935 38.127 57.756 8.433 21.45 12.368 63.448 22.768 73.095 9.333 8.496 51.604 10.736 55.078 4.228Zm11.676 40.785c-31.682.586-59.388-21.91-54.031-28.083 11.07-11.468 29.966 5.524 52.441-4.227 22.266 9.228 40.681-7.199 55.078 3.704 8.266 5.943-22.035 28.166-53.488 28.606Z"
      fill="#000"
    />
    <path
      d="M143.596 431.163c-4.604-8.286-24.003-9.354-31.264-5.294-7.994 4.395-14.083 66.65-5.818 68.847-7.198 3.641 2.135 52.462 11.656 52.462-7.575 3.223 7.68 51.102 16.427 49.784-5.064 7.115 19.65 46.058 26.493 43.966 2.134 39.989 122.711 59.074 120.242 25.446-1.549-16.469-19.587 7.45-100.634-119.175-35.931-55.768-29.883-104.15-37.102-116.036Z"
      fill="#000"
    />
  </svg>
);

export default SvgDodge;