import * as React from "react";

const SvgFedex = ({ title, titleId, ...props }) => (
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
      d="M500 343.75v123.413h-2.502c-15-17.969-33.58-24.17-55.298-24.17-44.375 0-77.82 31.708-89.539 73.364-28.125-97.093-152.209-94.169-190.491-22.888v-39.551H76.538v-42.846h93.75v-67.139H0v301.331h76.538V518.616h76.416c-2.344 9.312-3.601 19.316-3.601 29.785 0 119.469 160.305 149.321 203.43 38.696H287.17c-22.968 34.156-71.533 14.542-71.533-23.865h133.606c5.781 49.844 42.779 93.018 93.872 93.018 22.032 0 42.222-11.271 54.566-30.396h.732v19.41h331.604l34.485-40.833 34.851 40.833H1000l-84.351-98.877 83.252-97.901h-97.473l-33.935 40.589-35.157-40.528H646.851v-26.184h87.707V343.75H500Zm72.021 14.587h148.438v49.317h-87.647v55.42h86.731v45.898h-87.646v73.12h87.646v48.34H572.021V358.337Zm163.453 95.276 79.223 93.14-79.223 93.14v-74.524h-87.647v-39.856h87.647v-71.9Zm28.564 9.461h62.073l41.565 47.851 39.978-47.851h60.18l-70.983 83.313 71.899 84.045h-63.293l-41.077-48.218-40.772 48.218h-59.57l71.289-83.679-71.289-83.679Zm-509.277 24.414c16.035.144 31.772 10.877 35.522 31.799h-72.632c4.766-21.5 21.075-31.944 37.11-31.799Zm202.575 9.094c50.938 0 53.907 102.661 0 102.661-54.062 0-53.125-102.661 0-102.661Z"
      fill="#000"
    />
  </svg>
);

export default SvgFedex;
