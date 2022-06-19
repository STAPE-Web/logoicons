import * as React from "react";

const SvgGmail = ({ title, titleId, ...props }) => (
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
      d="M240 468.06V207.78l-2.4-1.78h-.2l-54.6-40.4c-33.4-24.8-81-23.6-110.6 5.6C52.4 190.8 40 218 40 248.2v72.04l200 147.82Zm520-.26v.26l200-147.82V248.2c0-29.8-12-57-31.6-76.6-29.2-29.14-75.3-32.56-108.48-8.06L762.4 206l-2.4 1.78V467.8Zm-480 29.56L488.12 651.2a20.013 20.013 0 0 0 23.78 0L720 497.36V237.34L500 400 280 237.34v260.02Zm480 20.42V820c0 11.04 8.96 20 20 20h130c27.62 0 50-22.38 50-50V369.94L760 517.78Zm-520 0L40 369.94V790c0 27.62 22.38 50 50 50h130c11.04 0 20-8.96 20-20V517.78Z"
      fill="#1A1A1A"
    />
  </svg>
);

export default SvgGmail;
