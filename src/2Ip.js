import * as React from "react";

const Svg2Ip = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1000 887"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <mask
      id="2ip_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={18}
      width={300}
      height={261}
    >
      <path d="M0 18.868h299.698v259.434H0V18.868Z" fill="#fff" />
    </mask>
    <g mask="url(#2ip_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M214 221.51H92.17v-35.095c68.189-48.075 74.66-53.66 74.66-64.849 0-7.151-7.585-11.603-17.207-11.603-15.868 0-27.944 5.792-39.34 15.415L85.698 95.415c17.208-18.302 42.245-25.264 63.019-25.264 38.679 0 63.943 21.472 63.943 51.415 0 20.34-11.622 37.113-47.169 60.585h48.49v39.34l.019.019Zm10.226-202.642H0V202.83a75.472 75.472 0 0 0 75.472 75.472h224.226V94.34a75.47 75.47 0 0 0-75.472-75.472Z"
        fill="#000"
      />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M759.849 481.736h-72.792v74.906h72.792c24.076 0 41.887-13.641 41.887-37.208 0-24.075-17.811-37.698-41.887-37.698Z"
      fill="#000"
    />
    <mask
      id="2ip_svg__b"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={299}
      y={278}
      width={693}
      height={600}
    >
      <path d="M299.698 278.302h692v599.056h-692V278.302Z" fill="#fff" />
    </mask>
    <g mask="url(#2ip_svg__b)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M771.887 635.17h-84.811v117.302h-90.095V403.207h174.906c78.547 0 121.491 52.887 121.491 116.246 0 62.849-42.944 115.736-121.51 115.736l.019-.019ZM435.774 752.472h90.075V403.207h-90.094V752.49l.019-.018Zm461.585-474.151H299.698v504.698a94.34 94.34 0 0 0 94.34 94.339h597.66V372.641a94.34 94.34 0 0 0-94.339-94.339v.019Z"
        fill="#000"
      />
    </g>
  </svg>
);

export default Svg2Ip;
