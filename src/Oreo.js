import * as React from "react";

const SvgOreo = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1000 356"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M839.208 29.684c42.053-1.236 81.014 14.224 102.041 38.343 12.987 15.46 26.592 37.724 15.461 64.317-21.645 53.185-122.449 37.724-157.7-1.855-13.605-15.461-30.302-45.146-21.026-70.502 6.803-19.17 30.303-29.684 61.224-30.303Zm-5.565 48.238c-3.711 19.172 12.986 35.869 24.118 43.29 17.316 11.132 49.475 11.132 53.185-9.895 4.948-27.83-31.539-56.277-58.75-50.092-9.277 1.855-17.316 7.42-18.553 16.697Zm-77.923-15.46c-12.987 1.236-27.211 1.855-41.434 3.092-14.224 1.236-28.447 0-39.579 4.947 1.237 7.421 3.71 13.605 8.657 17.316 22.882 0 42.671-5.566 66.172-3.092 6.184 7.42 9.895 17.934 12.368 29.066-16.697 8.04-48.855 1.855-67.408 10.513.619 8.04 3.092 13.606 7.421 18.553 28.448 0 54.422-8.04 81.632-5.566 7.422 5.566 11.751 20.408 12.369 29.685-8.04 6.184-22.263 4.947-36.487 6.803-37.105 4.329-80.396 12.368-118.12 14.223-9.277-8.658-10.514-22.882-14.224-34.632-11.132-35.25-25.355-72.974-36.487-109.462 17.934-6.802 40.817-5.566 62.462-6.802 29.684-1.856 60.606-4.33 89.672-3.093 8.04 4.948 12.986 17.935 12.986 28.448ZM559.678 125.54c15.461 16.079 32.158 29.685 48.856 44.527 5.565 4.329 12.988 9.276 13.606 17.316-10.513 6.184-25.356 6.184-39.58 8.658-14.224 2.474-30.303 8.04-40.198 5.566-7.421-1.237-14.842-11.75-21.026-18.553-19.171-20.408-40.816-41.435-56.895-61.843 16.697-5.566 44.526-2.474 47-19.171 1.236-8.658-5.566-18.553-15.461-20.408-12.369-1.856-45.764 3.092-48.238 9.894-2.474 7.421 5.567 21.027 7.422 29.685 8.658 32.159 15.461 56.895 21.026 87.817-1.855 7.421-11.75 6.803-18.552 7.421-19.79 3.092-43.91 9.895-65.555 8.658-7.421-24.737-14.222-51.33-20.407-77.922-6.184-26.593-12.369-53.803-16.079-79.777 6.802-7.421 21.026-6.803 33.394-8.658 34.632-4.33 80.397-11.132 113.792-13.606 43.909-3.092 76.067 6.185 83.488 35.87 6.803 23.5-9.895 37.723-26.593 44.526ZM226.346 80.396c44.527-1.237 85.342 10.513 106.987 33.395 9.895 10.513 21.646 31.54 22.883 57.514 1.237 19.79-4.329 38.961-12.369 51.948-28.447 46.382-106.369 75.448-173.16 77.922-54.421 2.474-101.422-12.987-119.357-50.093-21.026-43.908.618-94.001 24.118-117.501 15.461-15.461 38.962-27.83 64.318-37.725 25.355-8.658 55.04-14.224 86.58-15.46ZM145.95 161.41c-6.184 9.277-12.37 27.211-7.422 44.527 16.079 55.658 118.739 38.961 126.16-17.316 4.948-37.106-24.738-59.988-64.317-55.659-22.882 1.855-44.526 12.987-54.421 28.448Z"
      fill="#000"
    />
  </svg>
);

export default SvgOreo;
