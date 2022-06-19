import * as React from "react";

const SvgAlfaRomeo = ({ title, titleId, ...props }) => (
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
      d="M500 60C257.232 60 60 257.232 60 500s197.232 440 440 440 440-197.232 440-440S742.768 60 500 60Zm0 40c221.151 0 400 178.849 400 400S721.151 900 500 900 100 721.151 100 500s178.849-400 400-400Zm-24.766 20v81.055h24.961V173.75l20.157 27.305 32.851 4.765-28.476-36.406c6.26-1.28 17.968-7.841 17.968-21.641 0-20.7-18.844-27.343-30.664-27.343l-36.797-.43Zm31.563 17.773c6.8 0 11.616 4.552 11.836 9.532.22 4.98-3.278 10.39-10.938 10.39h-7.929l-.43-19.492 7.461-.43Zm116.328 4.61c-21.52.44-39.762 13.372-44.102 34.492-4.34 21.02 14.955 45.892 38.555 51.172 25.6 5.76 49.464-6.275 54.844-33.555 4.6-23.38-12.756-46.351-38.516-51.211-3.16-.6-6.314-.878-9.414-.898-.44 0-.927-.02-1.367 0Zm-300.742 21.406-22.344 11.68 10.508 91.484 23.711-17.344-3.086-13.867 25.859-15.195 11.797 8.711 27.188-10.86-73.633-54.609Zm302.656 1.016c1.5 0 3.049.149 4.609.429 12.44 2.34 20.324 12.978 18.164 24.258-2.179 11.26-13.614 18.922-26.054 16.602-12.44-2.34-18.586-14.267-16.406-25.547 1.9-9.86 9.027-15.782 19.687-15.742Zm-301.797 28.007 18.828 14.336-13.554 7.774-5.274-22.11Zm416.602 11.719-70.117 48.125 20.585 16.016 33.75-26.016-17.109 42.032 8.75 8.242 42.969-17.344-25.86 34.687 15.782 22.071 49.492-70.196-15.781-18.632-40.274 16.054 16.211-40.312-18.398-14.727ZM500 220c-154.521 0-280 125.479-280 280 0 154.521 125.479 280 280 280 154.521 0 280-125.479 280-280 0-154.521-125.479-280-280-280Zm-262.617 4.023-34.18 38.985 59.57 52.461 16.68-19.063-22.812-19.961 16.64-17.773-14.453-13.008-16.64 18.242-8.321-7.812 17.969-19.532-14.453-12.539ZM500 240c143.712 0 260 116.288 260 260S643.712 760 500 760V240Zm-20 1.016V460h-80V259.961c24.921-10.381 51.85-16.802 80-18.945Zm-140 54.257V460h-96.641c10.31-66.724 45.797-124.95 96.641-164.727Zm239.102 7.032c-4.24 0-7.657 3.398-7.657 7.578s3.437 7.578 7.657 7.578c4.22 0 7.695-3.398 7.695-7.578 0-4.2-3.455-7.578-7.695-7.578Zm19.609 0c-4.24 0-7.695 3.398-7.695 7.578s3.475 7.578 7.695 7.578c4.24 0 7.656-3.398 7.656-7.578 0-4.2-3.396-7.578-7.656-7.578Zm19.531 0c-4.24 0-7.656 3.398-7.656 7.578s3.436 7.578 7.656 7.578c4.24 0 7.696-3.398 7.696-7.578s-3.436-7.578-7.696-7.578Zm19.61 0c-4.24 0-7.696 3.398-7.696 7.578s3.476 7.578 7.696 7.578c4.24 0 7.656-3.398 7.656-7.578s-3.416-7.578-7.656-7.578Zm19.57 0c-4.24 0-7.695 3.398-7.695 7.578s3.475 7.578 7.695 7.578c4.22 0 7.695-3.398 7.695-7.578s-3.455-7.578-7.695-7.578Zm-83.828 19.843v12.305h89.336v-12.305h-89.336Zm263.476 4.61-74.453 29.883 21.016 48.554 19.687-8.242-10.937-24.726 9.219-4.297 10.507 23.828 17.969-7.383L820 361.406l8.75-3.867 10.508 24.688 18.398-7.383-20.586-48.086Zm-680.312 9.101-10.469 22.969 72.656 33.36 23.243-46.836-17.93-9.102-14.024 24.297-53.476-24.688Zm416.836 2.852v12.305h89.336v-12.305h-89.336Zm-33.477 14.336c-.28.02-.541.037-.781.117-1 .24-1.996.972-2.656 1.992-1.34 2.04-1.907 4.37 1.953 7.11l.039.039.078.078 8.477 6.367c2.9 2.06 7.109 5.583 7.109 11.523v.079l-.234 13.515c0 2.88-1.044 6.257-4.024 8.477-2.96 2.22-7.19 2.472-11.25 1.172-2.88-.92-4.769-1.92-6.289-2.5-1.52-.58-2.825-.899-5.625-.899-3.9 0-6.325 1.436-8.125 3.516-1.8 2.08-2.734 4.975-2.734 6.875v1.015c0 1.9.914 4.835 2.734 6.915 1.8 2.079 4.225 3.515 8.125 3.515 2.78 0 4.125-.318 5.625-.898 1.5-.56 3.389-1.56 6.289-2.5 4.04-1.3 8.27-1.048 11.25 1.172 2.98 2.22 4.024 5.498 4.024 8.398l.234 13.594v.078c0 5.92-4.072 9.346-6.992 11.406l-8.594 6.485-.039.039-.078.078c-3.86 2.74-3.254 5.089-1.914 7.109.68 1.02 1.636 1.713 2.656 1.953 1 .24 2.049.261 3.789-.859l17.852-11.953c2.24-1.62 3.867-4.671 3.867-7.071l-.195-16.679v-.039c0-6.56 3.355-12.116 7.695-16.016 2.56-2.3 5.513-4.134 8.633-5.234-3.14-1.12-6.073-2.935-8.633-5.235-4.34-3.9-7.695-9.475-7.695-16.015v-.039l.195-16.641c0-2.4-1.471-5.372-3.711-6.992l-17.969-12.032c-1.3-.859-2.266-1.055-3.086-1.015Zm156.094 11.406c-4.7 4.24-11.286 7.013-18.906 6.953h-29.18v4.375c0 3.5-1.956 6.266-4.336 8.086a14.42 14.42 0 0 1-8.711 2.891h-60l-.039 2.969c0 3 1.657 6.057 4.297 8.437 2.66 2.38 6.218 3.75 8.398 3.75h49.141c1.9 0 3.804.42 5.664 1.68 2.52 2.12 3.555 3.903 3.555 7.383 0 3.38-1.695 6.063-3.555 7.343-1.86 1.28-3.764 1.719-5.664 1.719h-49.141c-2.2 0-5.758 1.331-8.398 3.711-2.64 2.38-4.297 5.398-4.297 8.398l.039 4.883h87.734c4.5 0 8.575 2.002 11.055 4.922 2.46 2.92 3.536 6.519 3.516 10.039-.02 3.54-1.134 7.139-3.594 10.039-2.46 2.9-6.497 4.883-10.977 4.883h-82.226c-28.72 0-48.125 24.041-48.125 47.461 0 28.04 20.07 46.602 45.43 46.602h90.742c2.44 0 4.868 1.132 6.328 2.812a8.656 8.656 0 0 1 2.109 5.625c.02 1.94-.551 3.964-2.031 5.664-1.48 1.7-3.986 2.813-6.406 2.813H579.57c-20.34 0-33.789 18.368-33.789 33.828 0 17.36 12.84 33.437 35.86 33.437h59.843c1.74 0 3.38.251 5 1.211 1.58.96 3.282 2.988 3.282 5.508 0 2.5-1.662 4.528-3.282 5.508-1.6.98-3.28 1.25-5 1.25h-38.203c-4.2 0-9.899 1.926-14.179 5.586-4.3 3.66-7.305 8.719-7.305 15.859 0 7.76 3.002 13.153 7.422 16.953 4.44 3.8 10.4 5.821 15.82 5.821h15.547c2.82 0 6.125 1.897 7.305 4.257.98 2.02.96 3.697.82 5.157 2.9-.24 5.042-1.16 6.562-2.5 2.36-2.08 3.672-5.366 3.672-8.946 0-2.86-1.239-6.443-3.359-9.023-2.14-2.56-4.817-4.141-8.477-4.141h-25.898c-1.56 0-3.208-.347-4.649-1.367-1.44-1.02-2.674-2.88-2.734-5-.08-2.14 1.156-4.154 2.656-5.234 1.5-1.08 3.167-1.407 4.727-1.407h39.062c11.18 0 17.794-3.198 21.954-7.578 4.16-4.4 6.054-10.433 6.054-16.953 0-12.88-11.917-26.367-25.937-26.367h-65.117c-2.12 0-4.363-.961-5.743-2.461-1.36-1.5-1.933-3.298-1.953-5.078 0-1.78.573-3.616 1.953-5.156 1.38-1.5 3.623-2.461 5.743-2.461h87.5c29.7 0 46.601-21.001 46.601-43.321 0-22.9-16.277-42.304-46.797-42.304h-84.922c-2.48 0-4.984-1.113-6.484-2.813-1.54-1.7-2.168-3.742-2.187-5.742-.02-2 .589-4.08 2.109-5.82 1.54-1.72 4.043-2.852 6.523-2.852h86.992c36 0 73.438-31.768 73.438-71.328 0-21.06-6.409-35.345-15.469-46.445-8.06-9.9-18.38-17.116-28.32-23.516Zm-487.734 58.516-85.43 27.734L120 475.859l81.055 43.321-.469-29.024-12.227-5.625 1.836-29.843 14.336-3.555 3.946-28.164Zm628.164 2.578c-28.58 0-42.93 23.187-42.93 46.367 0 23.18 16.97 46.367 42.93 46.367S880 497.274 880 471.914c0-24.92-15.219-46.367-43.359-46.367Zm.547 25.156c12.619 0 19.96 11.67 19.96 21.25 0 9.36-7.64 21.211-19.96 21.211-12.321 0-19.532-10.271-19.532-21.211 0-10.94 6.912-21.25 19.532-21.25Zm-666.25 8.711-1.016 16.641-23.203-10.625 24.219-6.016ZM241.016 520H340v184.727c-55.874-43.711-93.269-109.68-98.984-184.727ZM400 520h80v238.984c-28.15-2.143-55.079-8.565-80-18.945V520Z"
      fill="#000"
    />
  </svg>
);

export default SvgAlfaRomeo;
