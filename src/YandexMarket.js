import * as React from "react";

const SvgYandexMarket = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1000 681"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M291.489 195.747 10.639 563.832l74.467 85.106 208.511-276.596-21.277 151.064 117.022 40.426 142.553-227.66c-6.383 42.553-17.021 140.426 76.596 170.213 146.808 44.681 274.468-219.149 334.042-353.191l-85.106-44.681c-65.958 138.298-168.085 291.489-208.511 280.851-40.425-10.639-4.255-140.426 19.149-223.404v-2.128l-129.787-44.681-155.319 253.191 21.276-138.297-112.766-38.298Z"
      fill="#000"
    />
  </svg>
);

export default SvgYandexMarket;
