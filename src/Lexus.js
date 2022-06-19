import * as React from "react";

const SvgLexus = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M508.659 293.335c-18.578 22.909-71.567 96.873-77.606 106.45-11.626 18.35-12.653 27.242-12.996 33.167-.337 5.815-.337 16.3 9.121 24.85 15.843 14.131 38.063 11.849 57.782 11.849h162.408c6.952 0 9.006-2.055 12.767-7.066 12.991-19.833 18.806-41.374 18.806-60.636 0-41.26-26.78-93.227-94.596-116.708l-7.642 10.942c53.794 25.524 76.024 58.919 76.024 105.646.342 12.539-2.968 26.101-11.175 38.64H483.586c-9.458 0-10.828-10.713-7.409-16.757a630.28 630.28 0 0 1 45.244-69.404c15.958-21.312 31.683-41.259 48.211-62.115 4.446-5.81 1.479-11.398-7.408-13.219-18.464-3.875-37.721-6.609-61.088-6.609-129.578 0-176.996 74.421-176.996 129.584 0 59.837 47.755 129.246 177.339 129.246 71.914 0 118.99-23.143 146.226-52.886h-27.47c-23.823 21.997-64.74 37.618-118.756 37.618-109.756 0-150.211-61.664-150.211-114.777.794-47.413 44.217-112.832 152.95-114.995 4.104-.115 7.299 3.647 4.441 7.18Zm389.783 341.566c6.495.913 11.512 6.039 11.512 12.088 0 6.827-6.153 12.301-13.681 12.301H757.009v-91.064h-41.036v91.297h-75.448c-20.399 0-24.611-12.425-24.611-23.823v-68.039h-68.04c-6.729 4.56-13.224 9.577-20.176 13.789l-40.346 24.845-52.424-38.292h-81.606v22.91h29.514v-12.544l69.409 49.814-47.412 29.737h-51.516v22.91h59.604c6.381-4.327 12.425-8.887 19.035-12.877l41.482-25.187 52.652 37.612h59.957l-79.22-59.609 40.694-26.546c8.664-5.707 17.784-10.485 26.671-15.725v59.947c0 25.301 6.496 42.852 57.441 42.852l287.778-.68c22.22.332 36.466-15.045 36.466-33.618 0-18.474-16.415-33.628-36.466-33.628h-103.94c1.37-12.648 12.301-23.241 23.356-23.241h105.196l-.332-21.997H832.109c-35.335 0-63.593 29.291-64.392 63.37-.109 2.392 1.478 3.87 4.103 3.87l126.622-.472Zm-545.12-.337v-23.366h20.285v23.366h-20.285Zm0-66.561h-77.045c-20.856 0-36.928 5.473-48.777 14.812-21.312 16.871-28.149 34.644-27.921 42.629h27.807c-12.197 9.12-20.404 20.051-24.731 32.709h-91.182c-16.41 0-27.014-11.621-27.014-22.909v-68.04H44.118v70.665c0 25.41 24.165 42.961 62.909 42.961h246.295v-22.91h-97.786c.456-11.621 12.876-23.356 24.16-23.356h73.626v-23.366h-98.928c-1.364-6.838 11.398-20.285 21.198-20.285h77.73v-22.91Z"
      fill="#000"
    />
    <g clipPath="url(#lexus_svg__a)">
      <path
        d="M537.269 612.225h-.522v-.343h2.072v.343h-.516v1.55h.479c.443 0 .734-.292.734-.69h.342v1.038h-3.11v-.347h.522l-.001-1.551Zm2.533.001h-.515v-.344h2.248v.344h-.544l.758 1.383.749-1.383h-.448v-.344h1.55v.344h-.516l-1.027 1.9-1.21-.001-1.045-1.899Zm5.181-.392c1.041 0 1.6.52 1.6 1.171 0 .66-.527 1.187-1.594 1.187-1.067 0-1.599-.526-1.599-1.187 0-.651.553-1.17 1.593-1.17v-.001Zm-13.202 1.776.748-1.383h-.447v-.344h1.548v.344h-.515l-1.028 1.9-1.21-.001-1.045-1.899h-.514v-.344h2.247v.344h-.543l.759 1.383Zm3.237-1.775c1.041 0 1.6.52 1.6 1.171 0 .66-.527 1.187-1.594 1.187-1.067 0-1.599-.526-1.599-1.187 0-.651.552-1.17 1.593-1.17v-.001Zm-.551 1.157c.007-.432.214-.809.57-.803.356.007.544.39.537.823-.008.407-.176.831-.567.824-.38-.007-.547-.427-.54-.844Zm9.965 0c.007-.432.214-.809.57-.803.356.007.544.39.537.823-.008.407-.176.831-.567.824-.38-.007-.547-.427-.54-.844Zm-15.206-2.162c.972-3.943 4.531-6.867 8.774-6.867 4.243 0 7.802 2.924 8.774 6.866l-17.548.001Zm17.548 4.342c-.972 3.942-4.531 6.866-8.774 6.866-4.243 0-7.802-2.924-8.774-6.866h17.548Zm.849-9.341.568-.569c.404.532.769 1.096 1.087 1.688h.449v-5.667h-5.667v.444c.589.317 1.15.68 1.678 1.082l-.569.568A11.944 11.944 0 0 0 538 601c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-2.688-.884-5.17-2.377-7.17v.001Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="lexus_svg__a">
        <path fill="#fff" transform="translate(526 601)" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgLexus;
