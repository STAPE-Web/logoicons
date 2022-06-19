import * as React from "react";

const SvgAcer = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1000 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M925 158c-3-4-6-7-21-8-4 0-16-1-37-1-55 0-93 17-112 50 5-33-27-50-97-50-82 0-134 33-155 100-8 25-8 45-2 61h-20c-15 1-35 2-48 2-30 0-49-5-56-15-6-9-6-26 2-51 13-41 44-59 94-59 26 0 51 3 51 3 3 0 5-4 5-7l-1-3-2-14c-1-9-8-14-20-16-11-1-20-1-32-1h-1c-65 0-111 22-136 64 9-43-21-64-90-64-39 0-67 1-83 3-13 2-21 7-24 16l-6 18c-1 3 1 5 5 5 3 0 15-2 35-3 27-2 46-3 59-3 38 0 55 10 49 29-1 4-4 7-9 8-36 6-65 10-86 13-60 8-95 26-104 56-13 41 19 61 96 61 38 0 71-2 97-7 15-3 23-6 26-16l14-46c-1 46 30 69 96 69 28 0 55-1 68-3s20-5 23-15l3-14c14 22 45 33 92 33 50 0 79-1 87-4 7-2 11-6 13-11 0-1 0-2 1-3l6-19c1-3-1-5-5-5l-32 2c-21 1-38 2-50 2-23 0-38-2-47-5-13-5-19-14-18-29l101-13c45-6 76-20 91-42l-35 117c-1 2 0 4 1 5s3 2 7 2h42c7 0 10-4 11-7l37-129c5-17 20-25 48-25 25 0 43 0 55 1h1c2 0 6-1 9-6l6-18c0-3 0-6-2-8ZM251 312c-13 2-32 3-56 3-43 0-61-9-56-26 4-12 15-20 33-22l97-13-18 58Zm447-104c-4 13-23 22-57 27l-81 11 2-7c7-22 16-36 28-44s32-12 60-12c37 1 53 9 48 25Z"
      fill="#000"
    />
  </svg>
);

export default SvgAcer;