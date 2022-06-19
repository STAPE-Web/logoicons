import * as React from "react";

const SvgWikipedia = ({ title, titleId, ...props }) => (
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
      d="M500 0C223.867 0 0 223.867 0 500c0 276.133 223.867 500 500 500 276.133 0 500-223.867 500-500C1000 223.867 776.133 0 500 0Zm294.793 383.662c-28.43 64.246-115.386 267.734-173.412 400.369-.082.061-15.202-.031-15.243-.051l-91.509-215.54c-36.266 71.13-76.45 145.074-110.813 215.437-.205.358-16.624.164-16.645-.061-52.532-122.619-106.997-244.43-159.805-366.957-12.225-29.954-55.11-78.128-84.461-77.851 0-3.479-.163-11.243-.204-15.939l180.89-.02-.143 15.662c-21.238.982-57.944 14.537-48.43 37.985 25.494 55.048 115.765 268.307 140.164 322.445 17.023-33.32 64.562-122.138 84.143-159.683-15.345-31.489-66.056-149.054-81.259-178.66-11.468-19.304-40.245-21.668-62.404-22.005 0-4.941.256-8.747.164-15.53l159.008.491v14.445c-21.525.594-41.903 8.604-32.665 29.187 21.391 44.399 33.882 76.01 53.514 117.074 6.271-12.03 38.414-77.974 53.739-112.777 9.258-23.141-4.573-31.806-43.294-32.849.511-3.806.174-11.448.511-15.09l137.33.133.062 14.333c-25.238.982-51.366 14.424-65.003 35.294L552.9 510.65c7.253 18.138 70.834 159.386 77.525 175.048l136.716-315.57c-9.729-25.545-40.757-31.253-52.89-31.53.081-4.071.102-10.281.122-15.468l142.722.41.204.716-.235 14.261c-31.315.951-50.68 17.698-62.271 45.145Z"
      fill="#000"
    />
  </svg>
);

export default SvgWikipedia;