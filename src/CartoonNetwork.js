import * as React from "react";

const SvgCartoonNetwork = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1000 599"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#cartoon-network_svg__a)" fill="#000">
      <path d="m457.981 139.498-124.182 71.041c-18.196-29.207-44.102-40.383-68.239-40.586-43.958-.368-81.866 34.921-81.842 79.936-.022 46.306 38.007 79.897 79.606 80.603 24.866.418 55.122-13.432 70.494-40.894l124.174 71.225c-45.141 77.81-122.527 112.942-194.839 112.816-114.66-.188-222.527-91.858-222.511-223.555-.004-131.006 108.298-224.268 222.943-223.53 74.351.483 150.153 35.462 194.399 112.941l-.003.003ZM57.183 536.118c7.854 2.208 14.458 7.705 18.726 14.588l-16.44 9.404c-2.867-3.993-7.587-6.859-12.653-6.1-5.004.486-9.389 4.292-10.704 9.132-2.028 8.59 4.119 15.723 11.636 16.092 4.205.125 8.69-1.73 11.72-6.21l16.44 9.491c-5.426 8.974-15.036 15.059-25.514 15.943-19.428.599-36.178-14.281-33.5-36.937 3.61-19.643 21.887-30.507 40.29-25.402v-.001ZM313.759 534.943c-6.13-.432-12.436.888-18.103 4.174-15.112 8.764-20.339 28.416-11.576 43.529 8.763 15.113 28.417 20.341 43.53 11.578 14.458-8.382 19.723-26.692 12.495-41.5a10.15 10.15 0 0 0-.91-2.016l-.006-.013-.004-.004a10.164 10.164 0 0 0-1.333-1.84c-5.632-8.264-14.599-13.24-24.094-13.909l.001.001Zm-1.317 20.197c3.665.235 7.112 2.26 9.141 5.759l.001.001.002.004c3.243 5.599 1.414 12.47-4.184 15.715-5.599 3.246-12.472 1.418-15.718-4.181-3.247-5.598-1.418-12.47 4.18-15.716v-.001c2.1-1.218 4.378-1.721 6.577-1.58l.001-.001ZM824.536 534.943c-6.131-.432-12.436.888-18.103 4.174-15.112 8.764-20.339 28.416-11.576 43.529 8.763 15.113 28.417 20.341 43.53 11.578 14.46-8.383 19.726-26.697 12.493-41.506a10.147 10.147 0 0 0-.907-2.01c0-.005 0-.008-.007-.013v-.004a10.154 10.154 0 0 0-1.335-1.842c-5.632-8.262-14.599-13.238-24.093-13.907l-.002.001Zm-1.317 20.197c3.665.235 7.112 2.26 9.141 5.759v.005c3.244 5.599 1.416 12.47-4.182 15.715-5.599 3.246-12.471 1.418-15.717-4.181-3.246-5.598-1.419-12.47 4.179-15.716v-.001c2.1-1.218 4.378-1.721 6.577-1.58l.002-.001ZM126.779 536.142h-30.49l-19.096 61.043h21.461l3.137-10.238h19.55l3.078 10.238h21.454l-19.094-61.043Zm-15.241 16.84 5.453 18.943h-10.918l5.465-18.943ZM152.028 536.142v61.043h20.218v-17.846h6.588l9.062 17.846h22.489l-11.784-20.023c9.076-5.819 12.183-13.029 11.841-20.276.007-10.942-9.849-20.438-20.626-20.744h-37.788Zm33.67 17.803c2.604.034 4.505 2.568 4.62 4.735.066 3.1-2.294 5.425-4.64 5.481l-13.432.02v-10.236h13.452ZM216.025 553.962V536.14h61.165v17.822h-19.138v43.221h-22.876v-43.221h-19.151ZM418.629 536.142h20.176l20.668 25.384v-25.384h20.19v61.043h-20.19l-20.668-25.439v25.439h-20.176v-61.043ZM520.959 536.142h20.174l20.668 25.384v-25.384h20.188v61.043h-20.188l-20.668-25.439v25.439h-20.174v-61.043ZM590.768 536.142h53.306v17.808h-33.117v6.25h27.885v14.26h-27.885v6.424h33.117l-.001 16.3h-53.306l.001-61.042ZM650.82 553.962V536.14h61.165v17.822h-19.138v43.221h-22.876v-43.221H650.82ZM717.092 536.142h20.519l5.153 26.764 10.112-24.581 10.298 24.526 5.153-26.709h20.331l-11.624 61.043h-16.919l-7.24-16.479-7.326 16.479h-16.637s-11.6-59.666-11.82-61.043ZM860.146 536.142v61.043h20.217l.039-17.846h6.55l9.059 17.846h22.492l-11.785-20.023c9.076-5.819 12.187-13.029 11.844-20.276.008-10.942-9.851-20.438-20.629-20.744h-37.787Zm33.669 17.803c2.605.034 4.504 2.568 4.618 4.735.067 3.1-2.291 5.425-4.637 5.481l-13.433.02v-10.236h13.452ZM925.092 597.181v-61.043h20.417v19.776l15.225-19.776h26.034l-23.626 29.102 23.626 31.941h-26.034l-15.225-22.717v22.717h-20.417ZM382.761 534.943c-6.13-.432-12.436.888-18.103 4.174-15.112 8.764-20.339 28.416-11.576 43.529 8.763 15.113 28.415 20.341 43.528 11.578 14.459-8.382 19.725-26.692 12.497-41.5a10.15 10.15 0 0 0-.91-2.016l-.006-.013-.004-.004a10.197 10.197 0 0 0-1.334-1.842c-5.632-8.262-14.599-13.238-24.092-13.907v.001Zm-1.317 20.197c3.666.235 7.11 2.26 9.14 5.759l.001.001.001.004c3.244 5.599 1.416 12.47-4.182 15.715-5.599 3.246-12.472 1.418-15.718-4.181-3.247-5.598-1.42-12.47 4.179-15.716v-.001c2.099-1.218 4.379-1.721 6.578-1.58l.001-.001ZM500.165.165h500.005v499.5h-35.663L964 36l-142.192.249v178.916L679.165 36.249h-143.1L536 464.178h142.5V285.5L821 464.178h177.435l.032 17.911L998.5 500H500.165V.165Z" />
    </g>
    <defs>
      <clipPath id="cartoon-network_svg__a">
        <path fill="#fff" d="M0 0h1000v598.479H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCartoonNetwork;