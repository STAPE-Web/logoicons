import * as React from "react";

const SvgBluestacks = ({ title, titleId, ...props }) => (
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
      d="M493.744 109.436a171.937 171.937 0 0 0-97.137 33.05L80.933 355.682a15.87 15.87 0 0 0-.489.336c-27.583 20.159-24.236 63.772 6.104 79.467l8.24 4.273-13.855 9.369c-.165.109-.328.221-.489.335-27.547 20.202-24.201 63.765 6.073 79.59l.03.031 8.363 4.333-13.977 9.461c-.165.109-.328.221-.489.335-27.547 20.202-24.201 63.765 6.073 79.59l.03.031 8.363 4.333-13.977 9.461a15.87 15.87 0 0 0-.489.336c-27.547 20.201-24.201 63.764 6.073 79.589l.03.031 277.65 144.043.03.03c93.104 48.129 206.049 36.984 288.025-28.564.082-.06.164-.121.244-.183l262.818-218.445.122-.092c29.912-25.425 27.566-70.721 1.007-94.726 28.775-25.587 26.236-70.037 0-93.75 28.814-25.495 26.36-69.95.091-93.72 35.609-31.513 23.124-91.981-22.644-106.353a.892.892 0 0 0-.03-.031L547.974 116.79l-.122-.03a171.534 171.534 0 0 0-39.276-7.05 171.58 171.58 0 0 0-14.832-.274Zm-3.265 31.402a140.459 140.459 0 0 1 48.278 5.829h.031l345.734 107.971c24.341 7.644 30.261 37.357 10.711 53.742l-13.824 11.505a15.619 15.619 0 0 0-3.571 2.96L632.66 526.733c-72.311 57.848-171.793 67.699-254.059 25.177l-.03-.031-242.493-125.885a15.642 15.642 0 0 0-6.683-3.479l-28.443-14.77a.892.892 0 0 1-.03-.031c-10.876-5.617-11.943-19.209-2.075-26.458L414.58 168.029c.155-.099.307-.2.458-.305a140.676 140.676 0 0 1 59.418-25.116c5.296-.9 10.651-1.482 16.022-1.77ZM892.09 351.623c17.722 10.888 20.387 35.823 3.143 50.385l-13.855 11.535a15.647 15.647 0 0 0-4.089 3.388L632.66 620.239c-72.383 57.821-171.888 67.61-254.059 25.146h-.03L134.949 518.951a15.636 15.636 0 0 0-4.456-2.289l-29.51-15.32c-10.966-5.732-11.97-19.338-2.045-26.641v-.031l27.435-18.524L364.197 579.62l.03.03c93.165 48.176 206.066 36.985 287.964-28.533l.214-.184 239.685-199.31Zm-.122 93.75c17.717 10.804 20.513 35.728 3.235 50.415l-13.825 11.475a15.623 15.623 0 0 0-4.089 3.418L632.66 713.989c-72.383 57.821-171.888 67.61-254.059 25.146h-.03L134.949 612.701a15.636 15.636 0 0 0-4.456-2.289l-29.51-15.32c-10.976-5.737-11.997-19.374-2.045-26.672l27.527-18.616 237.732 123.322.03.03c93.104 48.129 206.049 36.984 288.025-28.564.082-.06.164-.121.244-.183l239.472-199.036Zm0 93.75c17.717 10.804 20.513 35.728 3.235 50.415L632.66 807.739c-72.383 57.821-171.888 67.61-254.059 25.146h-.03L100.983 688.842c-10.976-5.737-11.997-19.373-2.045-26.672l27.527-18.616 237.732 123.322.03.03c93.104 48.129 206.049 36.984 288.025-28.564.082-.06.164-.121.244-.183l239.472-199.036Z"
      fill="#1A1A1A"
    />
  </svg>
);

export default SvgBluestacks;
