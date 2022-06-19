import * as React from "react";

const SvgMortalKombat = ({ title, titleId, ...props }) => (
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
      d="M498.516 40c-253.66 0-460 206.36-460 460s206.34 460 460 460c7.927 0 15.803-.188 23.632-.586 62.633-3.185 122.01-18.97 175.625-44.844 26.799-12.932 52.168-28.425 75.782-46.093a464.128 464.128 0 0 0 34.101-28.125c92.627-84.208 150.86-205.606 150.86-340.352 0-142.662-65.278-270.403-167.539-354.844-.008-.006-.032.007-.039 0a464.275 464.275 0 0 0-17.344-13.633c-.009-.006-.031.007-.039 0C696.785 74.074 601.557 40 498.516 40Zm-9.649 40.234c9.81-.03 20.54.035 32.11.391C742.163 92.329 918.516 275.93 918.516 500c0 55.349-10.851 108.169-30.391 156.602-2.415 5.542-4.832 10.997-7.305 16.328-3.113 6.854-6.339 13.659-9.804 20.312-1.293 2.582-2.642 5.404-3.868 7.774-14.405 26.312-31.759 50.679-51.25 73.203 2.075-6.354 8.325-25.851 11.133-44.571 3.3-22.02-2.77-64.94-17.07-90.82-14.32-25.86-50.05-73.794-97.93-96.914-47.88-23.12-96.902-17.577-164.062-12.617-67.14 4.96-113.895 4.333-151.875-8.867-37.98-13.22-52.871-55.629-54.532-73.789-1.66-18.16 2.808-26.325 10.508-38.985 7.7-12.66 1.66-15.97-1.64-17.07-3.3-1.1-7.182-8.811-8.282-22.031-1.1-13.2 1.055-35.743 1.055-35.743s4.441 8.75 6.641 37.93 39.058 39.61 51.718 39.61c12.661 0 35.815 1.681 67.735-22.54 31.92-24.22 62.138.575 75.898 4.415 13.76 3.86 53.359 31.855 80.899 64.335 27.52 32.481 37.478 23.679 58.398 25.899 20.92 2.2 19.296 8.835 43.516 9.375 24.22.56 37.969-20.898 37.969-20.898s15.893 69.855 21.953 91.874c6.06 22.021 35.828 72.15 72.148 73.79 36.32 1.66 41.797-36.329 41.797-36.329s-15.949 17.539-37.969 15.899c-22.02-1.64-31.367-24.18-31.367-24.18s21.48 6.641 29.18 6.641c7.7 0 23.115-4.97 36.875-15.43 13.76-10.46 26.974-54.006 6.054-67.226-20.92-13.2-33.593-5.469-33.593-5.469s6.59 1.726 13.75 7.226 9.922 6.534 9.922 23.594c0 17.06-4.96 34.675-29.18 35.234-24.22.56-44.56-9.34-53.359-32.46-8.8-23.12-14.853-48.926-25.313-76.446-10.46-27.52-34.102-44.609-34.102-44.609s4.867.469 19.727.469 13.281 24.882 13.281 24.882 12.625-3.341 16.485-8.281c3.86-4.94 1.64-23.711 1.64-23.711s3.849 1.646 7.149-6.054-9.302-10.413 1.718-20.313c11-9.9 6.6-7.711 0-18.711-6.6-11-3.304-5.586 7.696-5.586s9.859-3.247-6.641-26.367c-16.52-23.12-29.742-15.377-40.742-10.977-11 4.4-29.691-4.383-46.211-13.203s-14.26-8.834-24.18-7.734c-9.9 1.1-19.82-1.128-30.82-8.828-11-7.7-5.577-3.26-24.297-24.18s31.992-18.711 31.992-18.711-6.645-29.763-29.765-47.383-52.774-10.976-52.774-10.976-3.361-23.166-9.961-29.766c-6.6-6.6-23.155-7.734-41.875-7.734h-39.609c-27.52 0-15.422-6.526-9.922-16.445 5.5-9.92-10.966-9.95-23.086 8.75-12.1 18.72-19.787 2.284-29.687-4.336-9.9-6.6-8.887 9.871-36.407-12.149-27.52-22.02.005-47.292 23.125-49.492 23.12-2.2 27.539 25.234 27.539 25.234s7.735-14.253 4.414-21.953c-1.776-4.146-3.1-6.267-4.062-7.46 10.339-1.007 20.825-1.558 31.367-1.798ZM367.93 101.602s-9.814 20.881 5.586 34.101a2839.619 2839.619 0 0 0 28.593 24.18s-40.739-7.65-58.359-8.75c-17.58-1.1-39.639-4.417-27.539-17.617 12.1-13.2 13.244-14.375 19.844-14.375 6.6 0 19.843 7.695 19.843 7.695s1.061-11.003-3.359-13.203c-3.978-1.989-8.02-3.553-8.906-3.906 2.578-1.027 5.131-2.109 7.734-3.086l16.563-5.039Zm-81.407 37.382s-3.321 18.687 20.899 26.407c24.22 7.7 41.836 15.39 41.836 15.39s-73.794 1.163-96.914 16.563c-23.12 15.42-40.685 29.697-47.305 41.797-6.6 12.1-15.425 33.073-23.125 35.273-7.7 2.2-13.23 5.539-15.43-3.281-1.275-5.142-5.551-10.265-8.906-9.727 10.98-15.48 23.246-30.444 39.766-49.804 38.52-45.14 89.179-72.618 89.179-72.618Zm228.125 93.672c1.28-.1 2.528-.06 3.868 0 21.46.82 20.947 8.173 38.007 17.813 17.06 9.64 28.633 17.929 28.633 17.929s-19.313 4.1-35.273-3.32c-15.96-7.44-28.622-13.476-36.602-13.476-7.98 0-29.453.781-29.453.781s11.68-18.147 30.82-19.727ZM157.5 261.445c-1.189 1.687-2.346 3.451-3.516 5.157-.38 1.74-.703 3.84-.703 6.64 0 19.82 17.657 34.219 17.657 34.219s-18.732 20.836-25.352 35.156c-6.6 14.32-14.375 64.988-14.375 101.328s-2.177 74.821-10.977 85.821-6.609 16.589-15.429 18.789l-17.618 4.336s14.354 17.617 35.274 17.617 37.383-21.953 37.383-21.953 11.005 34.053 23.125 52.773c12.1 18.72 31.953 49.531 31.953 49.531s-2.2 34.159 0 55.079c2.2 20.919-2.193 42.94-25.313 30.82-23.12-12.12-22.001 3.238-6.601 14.258 15.42 11 34.163 14.406 47.383 5.586 13.2-8.8 16.472-22.107 18.671-36.407 2.2-14.32 1.168-15.326 8.868-19.726 7.7-4.4 26.361 7.7 27.461 30.82 1.1 23.12 3.34 21.994 6.64 28.594 3.3 6.6 2.219 10.964-3.281 16.484-5.5 5.52-.011 14.334 8.789 4.414 8.8-9.9 13.236-14.325 14.336-23.125 1.1-8.8 6.563-16.484 6.563-16.484s25.329 10.931 46.25 12.031c20.92 1.1 57.259 23.202 58.359 47.422 1.08 24.22-19.859 33.016-58.399 38.516-38.52 5.5-84.669-2.179-122.109-20.899-27.57-13.785-70.632-50.95-101.562-98.984-1.47-2.388-2.952-4.768-4.375-7.188-3.934-6.509-7.741-13.116-11.133-19.961-.358-.691-.662-1.415-1.016-2.109-4.084-8.434-7.788-17.064-10.82-25.898-25.32-73.76-32.975-128.801-31.875-150.821 1.1-22.02 2.155-114.499 31.875-175.039 15.58-31.72 27.251-52.5 40.351-71.64.728-3.304 1.992-4.857 3.516-5.157Zm391.836 53.789c9.7-.08 20.8 2.098 33.32 7.618 57.24 25.32 50.093 46.723 85.313 68.203 35.24 21.48 47.89 23.711 47.89 23.711l1.641 38.515s-42.393-1.127-88.633-33.047c-46.24-31.92-54.438-46.786-74.258-55.586-19.82-8.8-56.718-20.898-56.718-20.898s16.805-28.236 51.445-28.516Zm157.383 22.852c16.12-.52 24.531 15 24.531 15s-14.325.521-23.125 3.281c-8.8 2.76-14.844 6.641-14.844 6.641s-14.884-17.072 6.016-23.672c2.62-.82 5.122-1.17 7.422-1.25Zm35.82 96.875c.48-.04.945-.02 1.445 0 2.4.06 4.925.671 7.305 2.031 6.34 3.62 9.149 10.683 6.289 15.703-2.86 5.02-10.36 6.12-16.68 2.5-6.34-3.62-9.11-10.566-6.25-15.586 1.56-2.74 4.511-4.368 7.891-4.648Z"
      fill="#000"
    />
  </svg>
);

export default SvgMortalKombat;