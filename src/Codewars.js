import * as React from "react";

const SvgCodewars = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#codewars_svg__a)">
      <path
        d="m31.667 508.333-3.334-1.667c-7.5-4.166-13.333-10.416-17.5-18.333C5 477.5 2.5 467.5 2.5 457.083l.833-5.417c0-8.333 2.084-15.833 5.834-22.916l3.333-6.25c1.667-3.334 4.167-6.25 6.25-9.167 2.5-2.917 2.917-6.667 2.083-10l-2.083-6.667c-2.5-8.333-4.167-16.666-4.167-25l-1.25-5c0-9.166 2.5-18.333 8.334-25l4.166-5.416c2.917-4.167 7.5-6.667 12.5-8.334 4.167-1.25 7.084-5.416 7.5-10.416l.834-14.167c0-11.25 5.416-21.667 13.75-29.167l10-7.5c2.083-2.083 4.166-4.166 5.833-7.5 2.083-2.5 2.5-5.833 2.083-8.333-.833-4.167 0-5.417 2.084-5.833 6.666 2.5 10.833 1.666 13.75-1.667l5.416-7.083 15-16.667c4.167-4.167 5.834-11.667 3.334-17.5l-5-10.833c-.834-2.5 0-5.417 2.083-6.25 5.417 0 9.167 2.083 10.833 5.416l1.667 2.917c2.5 5 8.333 7.5 12.5 5.417 9.167-3.334 16.667-4.167 23.75-4.167h13.333c9.167 0 16.667-6.25 18.334-15.833 1.666-11.667 5.833-20.834 11.666-27.084 6.25-7.083 13.334-12.5 21.667-16.666 10.833-5.834 17.5-14.167 19.583-25 2.917-13.334 10-22.917 19.584-29.167l31.666-17.917 9.167-5.416c5.417-3.334 10.417-7.5 14.583-12.5l8.334-10c4.166-4.167 8.333-7.084 13.333-8.334 4.167-1.25 10-2.083 15-1.666l16.667 1.25c8.333 0 15 2.083 21.666 5l4.167 2.083c4.167 1.667 8.333.833 10.417-2.083l3.75-2.084 17.916-18.75c4.167-4.166 9.167-5.833 14.584-5C454.583 6.25 460 8.333 465 10.833c7.5 4.167 13.75 5.833 20.833 5.833H490c9.167 0 18.333 1.25 27.5 3.334l6.25 1.666c6.25 1.667 12.5-.833 16.667-5.833 1.25-2.083 4.166-2.5 5.833-.833 1.25.833 1.667 1.666 2.083 2.916.834 8.334 5.834 14.584 12.5 16.667l6.667 2.083c7.083 2.084 13.333 6.667 17.5 12.5 4.167 6.25 9.167 12.5 15 16.667L604.167 70c4.166 4.166 10 5.833 15.833 5.416h24.583c10 0 19.584 1.667 29.167 5.834 9.167 4.166 18.75 5 27.5 1.666C710.417 80 720 78.75 729.583 80l17.917 2.916c8.333.834 16.667 5 21.667 11.25l2.083 2.084c4.167 4.166 8.333 9.583 12.5 15.416 2.5 5.417 8.333 8.334 14.167 8.334h25.833c6.25 0 12.5 1.25 17.5 4.166 5.417 4.167 10 8.334 14.167 12.5l4.166 5.417c5 5.833 7.5 13.75 7.084 22.083 0 6.667 5 12.5 11.666 12.5l8.334.834c5.833 0 10.833 4.166 13.75 9.583l4.166 8.333 10.834 24.167c1.666 4.167 2.083 8.333 1.666 11.667 0 4.166 1.25 7.5 4.167 9.166l4.167 2.917c5.416 4.167 8.333 10.417 7.5 17.5L930 280.416l-.833 8.334c-.834 4.166 1.25 9.583 5 12.5 6.25 4.166 9.166 9.583 9.583 15.833v8.333c0 4.167-.833 9.167-4.167 12.5-2.5 3.334-4.166 7.5-4.166 12.5l1.25 9.584c0 6.666 4.166 12.5 8.333 16.666 5.833 4.167 9.167 10.834 10 17.5 1.667 10.417 2.083 18.75 2.083 27.084v9.583c0 3.333 0 6.667 1.25 10 .834 2.917 2.917 5.833 5.417 7.5l8.333 6.25c8.334 5.417 14.167 12.5 17.5 22.083C993.75 485.833 995 495.416 995 505v3.333c0 7.5-.833 15.417-3.333 22.5-2.084 7.5-1.667 14.583 1.25 20.833 3.333 5.834 5.416 12.5 6.25 19.584 1.663 8.333.833 16.666-2.084 23.333l-.833 2.917c-2.083 5-5.417 9.583-9.583 13.333-4.167 4.167-8.334 6.667-10.834 9.583-2.5 2.5-4.166 6.667-2.916 10.417l1.25 5.833c2.083 8.334 2.083 16.667 0 24.167v3.333c-1.667 6.25-4.167 11.667-6.667 16.667-2.917 5.417-7.083 9.583-12.5 12.5l-6.25 4.167c-2.917 1.666-5 5.416-5 9.166 0 4.167-1.667 8.334-4.167 10.834l-6.25 8.333c-4.166 5.417-9.583 10-15.416 12.5-5.834 4.167-10.834 8.333-14.584 12.5-4.166 5-7.5 10.833-9.166 16.667-1.667 7.5-7.5 11.666-13.75 11.666h-22.5c-5.834 0-11.25 4.167-13.75 9.167-2.917 6.667-5.834 11.25-9.584 15.417-4.166 4.166-6.666 9.166-8.333 15-.833 5-5 8.333-9.167 6.666-5.416-2.5-10.833 0-13.333 4.167-5 8.333-10 14.583-15.417 20l-2.916 2.5c-5.417 4.167-12.5 7.5-18.75 7.5-7.5 0-11.25 3.333-12.5 8.333-1.25 4.167-2.084 9.584-2.5 14.167-.834 5-2.5 9.583-4.167 13.75l-2.083 2.5c-4.167 6.25-7.5 12.5-11.667 17.917l-1.667 2.5c-5.416 7.083-12.5 12.5-20.833 14.583-10 3.333-18.75 4.167-27.5 4.167h-5.833c-4.167 0-8.334 2.5-11.25 6.666l-2.5 4.167-2.5 5-5.417 9.167c-4.167 7.5-10.417 12.5-18.75 15-8.333 2.083-17.917 2.916-26.667 2.5l-6.666-.834c-5.834 0-11.25-1.666-16.667-4.166-4.167-1.667-10 0-12.5 4.166-4.167 5.834-9.167 9.167-14.583 10.834l-12.5 4.166c-8.334 2.084-17.5 2.084-26.25 0L515 992.083c-4.167 0-8.333-2.083-11.667-4.167-4.166-2.083-8.333-2.916-12.5-2.5l-5.416.834c-8.334.833-15.834 0-23.334-2.084l-11.25-2.5c-5-1.666-9.583-5-12.5-9.583-2.083-4.167-6.666-7.5-12.5-8.333H412.5c-8.333-1.25-15.833-4.167-20.833-10.417L375 937.5l-5.833-5-9.167-6.667-5.417-4.167c-6.25-4.166-13.75-7.5-21.666-8.333l-25-4.167c-2.5 0-4.167-.833-6.667-1.25l-9.583-2.083c-4.167-.833-8.334-4.167-11.25-8.333-2.5-4.167-7.084-5.834-11.25-4.167-8.334 3.333-15 4.167-21.667 5.417h-5.833c-10.834.833-20.834-.834-30.834-5.417-10-4.167-16.666-10.417-22.916-18.333-5-7.084-12.5-12.5-21.667-14.167l-11.667-2.5a67.716 67.716 0 0 1-24.166-10c-8.334-5.833-12.5-11.25-15.834-17.917a50.186 50.186 0 0 1-5.833-20.833v-3.333c-.833-8.334-6.667-15.834-14.583-17.917-9.584-2.917-16.667-7.083-22.917-12.5-5.833-5.417-9.167-13.333-9.167-21.667l.834-18.333c0-7.083-2.084-13.333-7.084-17.917-5-5-8.333-11.25-8.333-17.916l-1.25-15c-.833-10.834-2.917-21.667-5.417-32.5-2.5-9.584 1.25-19.167 9.167-23.75l2.917-2.084c4.166-2.916 5.833-8.333 3.333-13.333l-3.333-4.167c-4.167-4.166-8.334-7.083-12.5-8.333-3.334-.833-4.167-4.167-4.167-6.25l4.167-5c2.5-2.917 2.083-7.5 0-10-3.334-3.333-5-7.5-5.417-11.667l-.833-29.166c0-5.834.833-11.667 2.5-17.5 1.666-5 0-10.834-5-13.334v.417Zm412.5-55c2.916-2.917 2.5-8.333 0-10.417-4.167-3.333-7.084-7.083-9.584-11.25L430.417 425c-2.917-5.417-6.667-10-10.834-14.167l-.833-.833c-4.167-3.334-7.083-7.5-9.583-12.5-2.084-4.167-2.084-8.334 0-12.5l2.5-4.167c2.5-4.167 4.166-10 4.166-15v-1.667c0-4.166-1.666-8.333-4.166-12.5-1.667-3.333-3.334-7.5-4.167-11.666v-2.5c-1.25-5 0-10.417 3.333-14.584 3.334-5.416 5.834-10.416 7.084-16.666v-.834c1.666-4.166.833-9.583-1.667-13.75-2.5-4.166-3.333-8.333-1.667-13.333L417.5 270c2.5-7.5 6.25-14.167 11.25-20l5.833-6.25 4.167-5 2.5-2.5c2.5-2.5 2.917-6.667.833-10-2.083-4.167-3.333-8.334-2.5-12.5l.834-5.834c1.25-8.333 4.166-16.666 9.583-23.333l1.667-1.667c6.25-8.333 14.166-13.75 23.333-16.666l11.25-4.167c5-1.667 8.333-7.083 8.333-12.5 0-6.667 2.084-12.5 5.834-17.917l2.083-2.083c4.167-7.083 9.167-14.167 12.5-21.667l2.917-5.416c.833-1.25 1.25-2.917 1.25-4.167 0-7.083-4.167-13.333-10.834-13.75L490 83.333c-10.417-.833-20.833 0-30.833 0L423.75 87.5c-5.417 0-9.583 4.166-10 10 0 5.833-4.167 10.833-9.167 12.5l-15 4.166-4.166 1.25-12.5 4.167c-9.167 2.917-16.667 9.583-20.834 18.75l-3.333 5.417c-4.167 9.166-11.25 16.666-20 22.083-8.333 5.417-12.5 14.167-13.333 24.167v4.166c-.834 8.334-3.334 16.667-8.334 22.5L305 220c-3.333 4.166-4.167 9.583-2.083 14.166 2.083 5 3.333 10.417 2.916 15.834v22.083c0 5.833-4.166 10.833-8.333 12.5-5.833 2.083-9.583 6.667-11.25 12.5l-2.083 8.333c-1.667 8.334 1.25 16.667 8.333 21.667 6.667 5 10.833 12.5 12.5 21.667v7.5c1.25 8.333 5.833 16.666 13.333 20.833 7.5 5 13.334 12.5 16.667 20.833l2.083 6.667c3.334 9.167 10.834 14.583 19.167 15.417h2.5c7.5 0 14.167 4.166 18.333 10.833 4.167 6.667 10.834 11.25 18.334 12.5l11.666 3.333c7.084 2.084 13.75 5.834 19.167 11.25l.833.834c4.167 3.333 10.834 2.916 14.584-1.667l2.916-3.333-.416-.417Zm47.5-38.333c4.166 2.5 8.333 1.25 10-2.5l1.25-2.084c2.916-5.833 6.666-11.666 10.833-16.666l8.333-12.5c1.25 0 1.667-.834 2.084-1.667l10-13.333c4.166-4.167 9.166-7.084 15-7.084 5.416 0 10-2.916 12.5-8.333 1.666-5.833 4.166-11.25 9.166-15.833l2.084-2.5c4.166-4.167 8.333-6.25 12.5-8.334 5.416-.833 10.416-1.666 15.416-1.666h12.5c5 0 9.167-2.084 11.667-6.25 2.5-4.167 6.25-7.084 10.417-9.167l4.166-1.667c6.667-2.916 14.167-5 21.667-5.833l8.333-.833c5 0 10.417 0 15.417 2.916 4.167 2.917 9.583 2.5 13.75-.833l2.917-1.667c6.25-4.166 13.333-7.5 20.833-8.333h.833c8.334-1.667 15.834-1.667 24.167-1.25h4.167C760 290.833 767.083 293.75 772.5 300l1.25 1.666c4.167 4.167 10.833 7.5 16.667 7.5h7.083c2.083 0 4.167-.833 5.417-2.916 1.25-1.25 3.333-2.5 5.416-2.5h4.167c5.833 0 11.25 1.666 16.667 3.333L836.25 310c6.667 2.083 13.75 4.166 20.833 5h5c3.334 0 5.417-2.084 5.417-5 0-4.167-.833-8.334-2.917-11.667l-2.916-6.667c-3.334-5.416-5.834-11.25-8.334-16.666l-.833-2.084c-2.083-4.166-2.083-8.333 0-12.5v-2.083c.833-3.333-.833-7.083-4.167-8.333H845c-6.667-2.084-12.5-5.834-16.667-11.25l-4.166-4.167c-4.167-4.167-6.667-10.417-8.334-16.667-2.083-5.416-6.666-9.583-12.5-9.583h-17.5c-6.25-.833-11.666-4.167-15.416-9.167l-1.667-2.083c-2.917-4.167-5.417-9.167-7.083-14.167-2.084-4.166-6.667-6.666-10.834-5.416l-5 1.666c-8.333 2.917-16.666 4.167-25 3.334l-6.666-.834c-7.084 0-13.75-2.916-19.167-7.083l-4.167-2.917c-3.333-2.5-6.666-4.166-10.416-5.833-4.167-1.667-7.5-.833-10 2.083l-2.084 2.5c-4.166 4.167-10 7.5-15.833 8.334L630 180c-4.167 0-8.333 2.083-11.25 5-3.333 2.916-7.083 5-11.25 5.833h-.833c-4.167 0-8.334 2.917-12.5 5.833v.834c-4.167 4.166-9.584 6.25-15 6.25l-1.667.833c-5 0-10 0-15 1.25h-5c-7.083 1.25-12.5 7.083-14.167 14.583L541.667 230c-1.25 6.666-4.167 12.5-8.334 17.916-4.166 5-9.166 8.334-15.416 8.334h-7.084c-4.166.833-8.333 5.416-7.5 10.416.834 7.084 0 13.334-1.25 19.584l-1.666 7.083c-1.667 6.25-5.834 11.25-11.25 13.333l-2.5 1.25h-.834c-2.5 1.667-4.166 5.417-2.083 8.334 2.5 4.166 3.333 8.333 2.917 12.5l-1.25 13.333c0 5-2.084 9.583-4.167 13.75-2.5 4.167-2.5 8.333-.833 12.5l4.166 9.167c2.084 4.166 2.5 8.333 1.25 13.333-1.25 4.167-2.083 8.333-1.666 12.5 0 4.167 2.5 8.333 5.833 10l.833.833.834.834Zm329.166 301.25c4.167 4.166 10.417 5.833 15.417 2.5l8.333-5.417c4.167-2.917 7.5-7.083 9.167-12.5V700l4.167-12.5 2.5-4.167 1.666-4.167 1.667-2.916c1.667-3.334 4.167-5.834 8.333-7.084l1.667-.833c3.333-.833 5.417-4.167 5.417-7.5 0-4.167 2.083-7.5 4.166-10.417l3.334-2.916L895 636.666v-.833c2.5-3.333 4.167-7.083 5-11.25.833-4.167 0-8.333-1.667-12.5l-.833-1.667c-1.667-4.166-2.5-7.083-2.917-10.833l-1.25-11.667-1.25-12.5c0-4.166 1.667-8.333 4.167-12.5 2.917-3.333 5-7.5 6.667-11.666v-1.667l.833-.833c.833-4.167-1.25-8.334-5-8.334-4.167-2.083-8.333-5.416-9.583-10.416l-1.25-2.5c-2.084-7.5-3.334-15-3.334-22.5l.834-20.834v-1.25c0-7.083-5.834-12.5-12.5-12.5h-.834c-8.333 0-15-2.5-20.833-8.333l-3.333-4.167-8.334-9.583-10.833-12.5C824.583 430 820.417 425 815 420c-4.167-4.167-10.417-8.334-16.667-9.167l-8.333-1.25c-4.167-.833-9.583-2.917-14.167-5.833-3.333-2.5-8.333-1.667-11.666 1.666l-5.417 5.834-2.5 1.666c-2.917.834-5.833-.833-7.083-4.166-1.667-5-1.667-10.834.833-15.834v-2.5c0-2.916-2.5-5-5-4.166h-6.667c-7.5 0-15-.834-22.083-4.167l-4.167-1.667c-4.166-2.083-9.166-3.333-13.75-3.333-4.166 0-8.333.833-12.5 3.333l-1.666 1.25c-5 3.334-10.834 5-16.667 5.417h-13.75c-6.25 0-12.5 2.083-16.667 5.417-5.416 3.333-11.25 5.416-17.5 6.666l-11.25 1.667c-5 1.25-10.416 3.333-15 7.083-4.166 4.167-10 6.667-15.416 8.334l-2.084.833c-6.666 2.083-12.5 6.25-16.666 12.5l-5 5c-2.917 4.167-2.917 9.167 0 13.333 2.5 4.167 7.5 5.417 12.5 4.167l6.25-2.5c3.333-1.25 7.083 0 10 1.667 2.5 2.083 6.25 3.333 10 2.916l10.416-1.25c5.834 0 11.667 0 17.5 1.667 6.25 2.083 11.667 4.167 16.667 8.333 5 4.167 10.417 5.834 16.667 6.667 6.25.833 12.5 2.083 18.333 4.167l4.167.833c4.166 1.25 7.5 4.167 10 8.333 2.083 3.334 4.166 8.334 4.166 12.5v1.25c0 5 4.167 8.334 8.334 8.334h2.5c6.666 0 13.75.833 20.833 2.916l2.917 1.25c4.166 1.667 8.333 4.167 11.25 8.334 3.333 4.166 5.416 8.333 6.666 12.5l1.25 5.833c1.25 6.25 1.667 12.5 1.667 19.167v2.083c0 4.167 2.917 8.333 7.5 10 4.167.833 9.167 2.5 13.75 5l2.083.833c5.417 3.334 10.834 7.5 15 12.5l2.084 2.917c5.416 6.25 8.333 14.167 8.333 22.083v2.917c0 6.25-1.25 12.5-3.333 18.333-1.667 5 0 10.834 5.416 12.5L800 646.25c6.25 2.5 11.667 7.083 15.833 12.5 4.167 6.25 5.834 13.333 5.834 20.833v12.5c-.834 4.167-2.084 7.5-4.167 10.417-2.083 2.916-2.083 7.083 0 10l2.5 4.166.833-.416ZM554.167 502.916h-.834c-1.666 0-2.5 2.084-2.083 4.167l1.667 8.333c1.666 6.667 2.5 13.334 3.333 20 .833 6.667 4.167 12.5 9.167 16.667h1.666c6.25 5 10 12.5 10.417 20v20.833c-.833 4.167 0 8.334 2.5 11.667l2.083 2.083c4.167 5 5.834 10.834 6.25 16.667l1.25 22.917c0 5.416-3.333 10-8.333 10.833l-4.167.833c-2.916 0-4.166 3.334-4.166 6.25 0 3.334 1.25 7.084 2.5 10.417v.833c1.25 4.167 1.666 8.334 1.25 12.5L575 699.166c-1.667 8.334-4.167 15.834-8.333 23.334l-2.917 5c-2.083 4.166-5 6.666-8.333 8.333-4.167 1.667-7.084 5-8.334 9.167l-3.333 15c-2.083 8.333-5.833 16.666-10.833 25h-.834c-5 6.666-11.25 12.5-18.75 16.666l-5 3.334-12.5 6.25c-4.166 1.666-6.666 5.416-7.5 10L486.25 835c-1.25 8.333-4.167 15.416-10 20.833l-5.417 6.25-6.25 6.25-6.25 6.667c-5 5.833-12.5 8.333-20.833 7.083l-15-2.917-13.75-1.666H405c-1.667 1.666-2.083 4.166-.833 6.666 2.916 5 7.5 8.334 12.5 8.334l9.166 1.666c4.167 0 9.167 2.084 13.334 4.167 4.166 2.917 8.333 5 13.333 6.25h.833c5.417 2.083 11.25 2.5 16.667 2.083l6.25-.833c7.083-.833 13.75 0 19.583 2.5l5 1.667c2.084.833 5.417 0 7.5-2.084 2.5-2.5 5-4.166 8.334-5.416l3.333-.834c5.417-1.666 10.833-2.5 16.667-2.5H540c5 0 9.583.834 13.75 3.334l1.667.833c2.916 1.25 6.25 0 8.333-2.5 1.25-2.917 4.167-5.833 7.083-8.333l10.417-7.084 6.667-4.166 3.333-2.084c4.167-2.916 10-4.166 15-4.166l15-1.25c5.833-.834 10.833-5 12.5-10.834 1.667-6.25 4.167-12.5 8.333-17.916 4.167-5.417 8.334-10 12.5-14.167 5.417-4.167 10.834-6.25 16.667-6.667h3.333c6.667-1.25 11.667-7.5 11.25-14.166V782.083c.834-4.167 2.5-9.583 5-13.75l8.334-12.5 3.333-4.167c2.5-2.083 4.167-5 7.083-8.333l4.167-5.417c2.5-4.166 2.5-9.583-.833-13.333-4.167-4.167-6.25-10-7.084-15.833v-1.667c-.833-6.667-.833-13.75 1.25-20.833v-2.084c2.084-5.416 5-10.833 8.334-15.833 3.333-4.167 2.916-10-1.25-13.333l-7.084-6.25c-5.833-5-9.166-12.5-10-20l-.833-8.334c0-2.5 0-5.416-.833-8.333l-.834-6.25c-.833-7.083-5-12.5-10.833-16.667l-2.917-.833c-4.166-2.5-8.333-6.25-11.666-11.25-3.334-4.167-5-10-6.25-15.833l-1.25-7.084c0-2.5-1.667-4.166-4.167-5.416l-6.667-2.084L637.5 542.5c-4.167-.834-8.333-4.167-11.25-7.084h-.833c-2.5-3.333-6.667-3.333-9.167-.833l-4.167 4.167c-.833 1.25-1.666 1.666-2.916 1.25-2.5 0-4.167-2.084-3.334-4.167.834-6.667-1.666-13.333-7.083-17.5l-5.417-4.167-12.5-8.333c-3.333-1.25-8.333 0-10 4.167l-1.666 2.5c0 .833-1.25 1.25-1.667 1.666-1.667 0-4.167 0-4.167-2.083l-1.25-2.083c-1.25-2.5-4.166-4.167-6.666-5l-1.25-2.084Zm-50 41.667-2.084-2.083c-2.083-1.667-4.166-1.25-6.25.833-2.916 5-5.416 10.417-6.666 15.833V560c-1.25 5.416-6.25 9.166-11.25 8.333h-5c-5.834 0-10.417 5-10.417 10.833 0 7.5-2.5 15-7.083 20.834l-2.5 2.5c-4.167 5.416-10.417 9.166-16.667 11.25l-3.333.833c-4.167 1.25-7.5 4.167-8.334 9.167 0 4.166-2.5 8.333-5.833 11.666l-4.167 3.334c-5 5.416-12.5 8.333-20 9.166L373.75 650c-6.667 0-12.5 4.166-16.667 10.416-4.166 6.25-10.416 10.417-16.666 11.25l-9.167.834c-6.667.833-13.75.833-20.833-.834l-4.167-.833-11.25-2.917c-4.167-1.25-7.5 0-10 2.917l-4.167 5.417c-5.416 6.25-13.333 9.166-20.833 8.333l-27.083-3.333c-4.167 0-7.5-2.084-11.25-4.167-4.167-2.5-7.084-5.417-10-8.333l-10.417-12.5c-1.25-.834-3.333-1.25-5.417-.834l-5.833 2.5-23.333 5.834c-4.167 1.25-9.584 0-13.75-2.5-4.167-3.334-9.167-4.167-14.167-4.167h-5.417c-5 1.25-8.333 6.667-6.666 11.667l1.666 8.333c1.25 4.167.834 9.167-1.25 13.333-2.083 4.167-1.666 8.334 1.25 12.5l2.5 3.334c3.334 5 8.334 9.166 12.5 13.333 4.167 4.167 8.334 8.333 11.667 13.75l6.25 11.25c3.333 5.833 8.333 9.167 15 9.167 6.25 0 12.5 2.083 17.5 6.25l12.5 11.666c3.333 2.917 8.333 3.334 11.667.834l2.083-.834c2.5 0 4.167 1.667 4.167 4.167v2.083c0 5.417 4.166 10.417 9.583 12.5l18.75 4.167c6.667 2.083 13.333 4.167 19.583 8.333h3.334c3.333 0 6.25-2.916 5.833-6.666v-14.584c0-4.166 1.667-8.333 5-10l2.083-.833c2.084.833 4.167 2.5 3.334 4.167v7.083c0 5.417 1.666 10.417 5.416 14.167 4.167 4.166 9.584 5 14.167 3.333 5-2.083 10-2.5 15.417-2.083l15.416.833c7.5.833 14.584 0 20.834-2.917 7.5-2.5 13.75-5.833 19.583-10.416l2.5-1.667 12.5-11.25c4.167-4.167 9.583-6.25 14.583-6.25h16.667c8.333-.833 15.833-8.333 16.667-16.667l1.666-8.333c0-5.417 2.5-10.417 6.25-14.583 4.167-4.167 8.334-6.667 12.5-8.334l5-2.083c7.084-2.917 12.5-9.167 15-16.667l2.5-10c2.084-8.333 6.25-16.666 12.5-22.083l.834-.833c5-4.167 5.833-12.5 2.5-18.334l-1.25-2.916c-2.917-4.167-3.334-10.417-1.25-15.834 2.083-5.833 4.166-10.833 7.5-15.833l4.166-5.833c1.667-3.334 1.667-8.334-.833-11.25-2.5-3.334-4.167-7.5-4.167-11.667l-.833-5.833v-14.167c.833-4.167 0-9.583-1.25-13.75l-1.667-5-.416-1.25Zm-59.584-31.667v-1.25c0-4.166-2.5-6.666-5.833-6.666h-10.833c-4.167.833-8.334.833-11.667 0H397.5c-9.583 0-18.75-1.667-27.917-4.167l-10-2.5-8.333-2.5-18.75-6.25c-10-2.917-17.5-9.583-22.083-18.75l-2.084-4.167c-2.916-6.25-9.166-9.583-15.416-8.333-7.084 0-14.167 0-20.834-3.333l-5-2.084c-9.583-4.166-16.666-12.5-16.666-23.75l-1.667-11.25c-1.25-5.833-5-11.25-10-13.333-5.833-2.5-11.25-5.833-16.667-9.583L220 393.75c-6.25-5-11.667-11.667-14.583-19.584l-.834-2.5c-2.083-6.666-2.5-13.75-.833-20.833l.833-2.5c1.667-5.417 2.084-10.833 2.084-16.667 0-5-2.084-10-5.834-13.75L195 312.5c-6.667-5.417-10.833-13.334-11.25-22.084-.833-9.166-.833-17.916.833-26.666v-2.5c0-5-4.166-8.334-8.333-8.334H175c-5.417 0-10 3.334-12.5 8.334-2.083 5.833-5.417 10.416-9.167 15l-1.666 2.083-8.334 8.333-4.166 4.167C135 295 132.5 301.25 131.667 307.5c-.834 6.25-2.5 12.5-5 18.333l-.834 2.083c-2.083 5-5.416 9.584-9.583 12.5-4.167 3.334-7.083 8.334-7.083 13.334l-.834 19.166c0 8.334-1.25 16.667-4.166 25l-.834 3.334c-2.083 5.416 0 11.25 5 13.75l17.5 7.5 1.667.833c1.25 0 1.667.833 2.083 2.083 1.25 1.667 0 4.167-1.25 4.167l-4.166 2.083c-2.5.834-4.167 3.334-5 6.25l-.834 4.167v.833l-4.166 23.334c-.834 3.333-.834 7.083-.834 10.833 0 3.333 2.084 6.25 5 7.5l9.167 4.167c4.167 2.5 9.167 5.416 12.5 8.333l4.167 3.333c1.25 1.667 3.333 3.334 5 4.167l1.666 1.667c2.917 2.5 5 5.833 5.834 9.583l4.166 18.75c0 5 4.167 9.167 8.334 10.417l6.666 2.083s1.25 0 2.084.833l8.333 2.5c6.667 2.084 12.5 5.834 17.5 10.834 5 4.166 10 9.583 14.167 15.416l1.666 1.667c3.334 4.167 8.334 6.25 13.334 5s10.416-1.667 15.833-1.667H255c4.167 0 9.583 1.25 14.167 4.167 4.166 2.5 9.583 4.167 14.583 6.25H285c5 2.083 10.417 1.25 14.583-1.667 4.167-3.333 9.584-5 15-5l19.584 1.25c4.166 0 8.333-.833 10.416-4.166h.834l7.083-6.667 2.083-2.083c3.334-4.167 8.334-5.834 13.334-6.25h18.75c5 0 9.583-4.167 11.666-8.334 2.084-4.166 6.25-7.5 11.25-8.333l8.334-1.667c3.333 0 6.25-2.916 7.5-6.666 1.25-4.167 3.333-7.5 6.25-10l6.666-6.667c4.167-4.167 6.25-8.333 7.084-13.333l-.834.416Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="codewars_svg__a">
        <path fill="#fff" d="M0 0h1000v1000H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCodewars;