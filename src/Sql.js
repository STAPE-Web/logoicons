import * as React from "react";

const SvgSql = ({ title, titleId, ...props }) => (
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
      d="M750 656.25v-375h-62.5v437.5h250v-62.5H750ZM562.5 281.25h-125a62.5 62.5 0 0 0-62.5 62.5v312.5a62.5 62.5 0 0 0 62.5 62.5h31.25v62.5a62.5 62.5 0 0 0 62.5 62.5h62.5v-62.5h-62.5v-62.5h31.25a62.5 62.5 0 0 0 62.5-62.5v-312.5a62.5 62.5 0 0 0-62.5-62.5Zm-125 375v-312.5h125v312.5h-125ZM250 718.75H62.5v-62.5H250v-125H125a62.5 62.5 0 0 1-62.5-62.5v-125a62.5 62.5 0 0 1 62.5-62.5h187.5v62.5H125v125h125a62.5 62.5 0 0 1 62.5 62.5v125a62.5 62.5 0 0 1-62.5 62.5Z"
      fill="#000"
    />
  </svg>
);

export default SvgSql;
