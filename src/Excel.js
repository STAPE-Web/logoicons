import * as React from "react";

const SvgExcel = ({ title, titleId, ...props }) => (
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
      d="M967.769 115.385H615.385v114.769h116.577v78.115H615.385v76.347h115.384v76.923H615.385v76.923h115.384v76.923H615.385v76.923h115.384v76.923H615.385v115.385h352.384c17.731 0 32.231-15.039 32.231-33.462V148.846c0-18.423-14.5-33.461-32.231-33.461Zm-44.692 653.846H769.231v-76.923h153.846v76.923Zm0-153.846H769.231v-76.923h153.846v76.923Zm0-153.846H769.231v-76.923h153.846v76.923Zm0-153.847H769.231v-76.923h153.846v76.923ZM0 111.115v777.808L576.923 1000V0L0 111.115Zm364.923 584.27L297.808 568.5c-2.539-4.731-5.154-13.423-7.885-26.077h-1.038c-1.27 5.962-4.27 15.039-9 27.192l-67.347 125.77H107.962l124.153-194.77-113.577-194.807h106.77L281 422.615c4.346 9.231 8.231 20.193 11.692 32.847h1.077c2.193-7.616 6.269-18.924 12.231-33.962l61.923-115.731h97.769L348.885 498.923l120.077 196.423-104.039.039Z"
      fill="#030104"
    />
  </svg>
);

export default SvgExcel;
