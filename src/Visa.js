import * as React from "react";

const SvgVisa = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#visa_svg__a)">
      <path
        d="M726.875 359.219c-16.094-6-41.344-12.531-72.594-12.531-79.906 0-136.375 40.374-136.719 98.156-.656 42.468 40.032 66.406 70.782 80.719 31.594 14.656 42.156 23.781 42 36.781-.156 20.031-25.25 28.969-48.344 28.969-32.094 0-49.5-4.375-76.344-15.625l-9.968-4.719-11.376 66.75c19.532 7.969 54.532 14.969 90.657 15.625 85.125 0 140.625-40.032 141.25-101.75.656-33.844-21.125-59.532-67.531-80.719-28-13.656-45.532-22.969-45.532-36.969 0-12.375 14.969-25.375 46.219-25.375 26.844-.5 45.75 5.375 60.531 11.219l7.656 3.406 11.219-64.281-1.906.344Zm207.719-7h-62.5c-19.532 0-34.032 5.218-42.656 24.593L709.312 649.094h84.969l17.125-44.594 103.656.156c2.594 10.407 9.907 44.407 9.907 44.407H1000l-65.406-296.844ZM402.5 349.781h80.906l-50.625 297h-80.906L402.5 349.625v.156ZM196.781 513.344l8.281 41.344 79.25-202.469h85.782L242.469 648.594h-85.407l-70-250.969c-1.468-4.375-3.25-7.344-7.656-9.906C55.812 375.344 29.281 365.25 0 358.25l.969-6.219H131.5c17.594.657 31.906 6.219 36.781 25.094l28.5 136.375v-.156Zm637.688 30.437 32.406-83.156c-.5.781 6.656-17.094 10.719-28.344l5.531 25.531 18.75 85.782h-67.406v.187Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="visa_svg__a">
        <path fill="#fff" d="M0 0h1000v1000H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgVisa;