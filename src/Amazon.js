import * as React from "react";

const SvgAmazon = ({ title, titleId, ...props }) => (
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
      d="M805.664 750.879c-3.223-.879-7.129-.391-11.621 1.269-60.156 27.54-118.652 47.168-175.488 58.79-122.754 25-242.383 11.914-358.789-39.161C227.441 757.52 182.52 733.496 125 699.512a9.134 9.134 0 0 0-5.176-1.953c-1.953-.098-3.613.097-5.176.879-1.562.781-2.734 1.757-3.613 3.027-.879 1.269-1.074 3.027-.39 5.273.585 2.149 2.05 4.59 4.492 7.227 10.156 11.914 22.754 24.609 37.695 38.086 14.941 13.476 34.766 28.711 59.473 45.703a614.545 614.545 0 0 0 77.441 45.312c26.953 13.184 58.203 24.317 93.848 33.301 35.644 8.985 71.289 13.477 106.836 13.477 35.351 0 69.726-3.613 103.027-10.645 33.398-7.129 61.523-15.527 84.473-25.293 22.851-9.668 43.945-20.507 63.281-32.226 19.336-11.719 33.594-21.68 42.871-29.59 9.277-8.008 15.918-14.258 19.727-18.945 4.492-5.567 6.738-10.352 6.738-14.551.098-4.395-1.66-6.934-4.883-7.715ZM515.039 339.941c-14.844 1.27-32.715 4.004-53.711 8.106-20.996 4.004-40.43 9.082-58.398 15.039-17.969 5.957-36.328 14.258-54.981 24.805-18.75 10.547-34.668 22.656-47.851 36.132-13.184 13.477-23.926 30.372-32.325 50.782-8.398 20.312-12.597 42.675-12.597 67.09 0 26.464 4.59 50 13.965 70.8 9.277 20.801 21.679 37.11 37.304 49.219 15.528 12.109 33.203 21.582 52.735 28.516 19.531 6.933 40.234 10.058 61.718 9.179 21.485-.878 42.481-4.199 62.891-10.058 20.313-5.762 39.453-15.039 57.227-27.637 17.773-12.598 32.324-27.539 43.75-44.629 4.199 6.446 7.91 11.231 11.23 14.356l8.496 8.691c5.664 5.762 14.356 14.258 26.074 25.488 11.622 11.231 23.536 22.168 35.45 32.911l101.953-97.559-5.86-4.785c-4.199-3.223-9.179-7.813-14.843-13.965-5.664-6.055-11.328-12.793-16.797-20.02-5.567-7.226-10.352-15.722-14.356-25.293-4.004-9.57-6.054-18.847-6.054-27.832v-256.64c0-9.864-1.856-20.508-5.567-32.032-3.808-11.425-10.449-23.925-20.215-37.402-9.765-13.476-21.875-25.586-36.328-36.133-14.551-10.547-33.886-19.531-58.203-26.758-24.219-7.226-51.367-10.839-81.25-10.839-30.566 0-58.984 3.613-85.547 10.644-26.465 7.129-49.121 16.602-68.066 28.516-18.848 11.914-35.059 25.683-48.535 41.406-13.477 15.723-23.536 32.129-30.078 49.219-6.543 17.09-9.864 34.375-9.864 51.855l132.032 11.621c5.371-16.015 12.597-29.882 21.484-41.796 8.984-11.915 17.48-20.508 25.195-25.879a110.954 110.954 0 0 1 25.098-12.891c8.984-3.223 15.039-4.883 18.164-5.273 3.125-.293 5.566-.391 7.422-.391 26.074 0 44.14 7.715 54.297 23.047 6.347 9.277 9.472 23.34 9.472 42.285v55.273c-14.843.586-29.687 1.563-44.531 2.832Zm44.629 148.34c0 16.211-2.148 30.957-6.348 43.946-8.984 28.418-26.074 46.289-51.172 53.515-21.875 6.446-42.675 3.223-62.402-9.57-20.996-13.672-31.445-33.008-31.445-57.91 0-19.434 4.883-36.035 14.648-49.903 9.766-13.769 22.754-24.121 39.063-30.957 16.308-6.836 32.226-11.718 47.851-14.55 15.528-2.93 32.227-4.688 49.805-5.274v70.703Zm327.344 213.77c-4.2-5.274-15.528-8.692-34.082-10.449-18.555-1.758-34.668-1.661-48.535.39-14.942 1.758-30.372 6.055-46.192 13.086-15.918 6.934-22.851 12.793-21.094 17.383l.684 1.27.879.683 1.367.195h4.492c.781 0 1.758-.097 3.125-.195s2.637-.293 3.809-.391c1.172-.097 2.832-.292 4.98-.39 2.051-.098 4.004-.391 5.86-.684.293 0 3.613-.293 10.058-.879 6.446-.586 11.133-.976 13.965-1.269 2.832-.293 7.617-.586 14.16-.879 6.543-.293 11.817-.293 15.723 0 3.906.293 8.301.684 13.281 1.074 4.981.391 8.985 1.27 12.11 2.637 3.125 1.269 5.468 2.93 6.933 4.98 5.078 6.446 4.102 20.703-2.93 42.871-7.031 22.168-13.671 39.844-19.921 52.93-2.735 5.567-2.735 8.985 0 10.449 2.734 1.465 6.543.098 11.621-3.906 15.234-11.914 27.929-29.883 38.183-54.004a198.297 198.297 0 0 0 12.793-44.629c2.344-15.527 1.953-25.586-1.269-30.273Z"
      fill="#000"
    />
  </svg>
);

export default SvgAmazon;
