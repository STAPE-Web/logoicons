import * as React from "react";

const SvgIvi = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1000 539"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#ivi_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 352.192V202.885l136.096 74.653L0 352.192Zm0 186.27V389.135l136.096 74.673L0 538.462Zm7.962-167.789 136.096-74.654v149.327L7.962 370.673Zm984.076-93.135-136.096 74.654V202.885l136.096 74.653ZM855.962 538.462V389.135l136.096 74.673-136.116 74.654h.02Zm7.942-167.789L1000 296.019v149.327l-136.115-74.673h.019ZM511.75 385.404h157.115l-78.538 129.308-78.577-129.308Zm-196.038 0h157.115l-78.539 129.308-78.576-129.308Zm98 136.846 78.577-129.308 78.576 129.308H413.712ZM687.25 358l-78.577-129.308h157.154L687.25 358Zm-98.019-121.769 78.577 129.327H510.654l78.577-129.327ZM297.308 358l-78.577-129.308h157.154L297.308 358Zm98.019-121.769 78.577 129.327H316.75l78.577-129.327ZM0 0l135.481 74.346v.635L0 149.308V0Zm855.962 0 135.461 74.346V75l-135.461 74.308V0Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="ivi_svg__a">
        <path fill="#fff" d="M0 0h1000v538.462H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgIvi;
