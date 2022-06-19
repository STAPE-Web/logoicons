import * as React from "react";

const SvgTiktok = ({ title, titleId, ...props }) => (
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
      d="M522.125.844C576.656 0 630.875.5 685.031 0c3.281 63.781 26.219 128.75 72.907 173.844 46.593 46.218 112.5 67.375 176.624 74.531v167.781c-60.093-1.968-120.468-14.468-175-40.344-23.75-10.75-45.874-24.593-67.531-38.75-.281 121.75.5 243.344-.781 364.594-3.25 58.25-22.469 116.219-56.344 164.219-54.5 79.906-149.094 132-246.25 133.625-59.594 3.41-119.125-12.844-169.906-42.781-84.156-49.625-143.375-140.469-152-237.969-1-20.844-1.344-41.656-.5-62 7.5-79.281 46.719-155.125 107.594-206.719 69-60.093 165.656-88.719 256.156-71.781.844 61.719-1.625 123.375-1.625 185.094-41.344-13.375-89.656-9.625-125.781 15.468-26.375 17.094-46.407 43.282-56.844 72.907-8.625 21.125-6.156 44.593-5.656 67.031C250 787.125 315.75 844.594 385.938 838.375c46.531-.5 91.124-27.5 115.374-67.031 7.844-13.844 16.626-28 17.094-44.282 4.094-74.531 2.469-148.75 2.969-223.281.344-167.969-.5-335.469.781-502.906l-.031-.031Z"
      fill="#000"
    />
  </svg>
);

export default SvgTiktok;
