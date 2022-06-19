import * as React from "react";

const SvgLinkedin = ({ title, titleId, ...props }) => (
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
      d="M748.612.396H250.595C112.609.396 0 113.006 0 250.991v498.811c0 137.192 112.609 249.801 250.595 249.801h498.81c137.986 0 250.595-112.609 250.595-250.594V250.991C999.207 113.006 886.598.396 748.612.396ZM333.069 809.278H190.325V396.907h142.744v412.371Zm-72.165-475.813c-40.444 0-72.958-32.513-72.958-72.957 0-40.445 32.514-72.958 72.958-72.958 40.444 0 72.958 32.513 72.958 72.958-.793 40.444-33.307 72.957-72.958 72.957Zm548.771 475.813H689.929V609.437c0-48.374-6.345-110.23-72.165-110.23-67.407 0-78.509 52.339-78.509 107.058v203.013H420.301V396.907h111.023v55.512h3.172c17.447-31.721 57.891-56.305 121.333-56.305 130.848 0 153.846 75.337 153.846 187.153v226.011Z"
      fill="#000"
    />
  </svg>
);

export default SvgLinkedin;