import * as React from "react";

const SvgCsgo = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#csgo_svg__a)" fill="#231F20">
      <path d="M498.918 293.488c6.617-2.293 13.845-.379 19.91 2.612 4.237 2.728 8.474 5.485 13.219 7.27.363.682 1.118 2.031 1.48 2.699-.188.45-.551 1.378-.74 1.828 3.382 7.691 5.544 16.804 2.264 24.885-2.235 2.729-6.124 3.151-9.273 4.207-.014 3.904.61 7.765.944 11.64 6.733 1.088 12.433-3.599 19.094-3.135.899-3.729 1.61-7.519 2.803-11.175 1.379 2.424 1.435 5.211 1.451 7.939 1.742.494 3.512.944 5.294 1.377.017.669.03 2.004.03 2.672 29.197.174 58.377-.132 87.575.16-.072.998-.214 3.002-.272 4.005.754 0 2.292.014 3.059.014-.029-5.31 0-10.637-.015-15.946.74-.031 2.191-.074 2.917-.089.017 4.179.03 8.359.074 12.539.637.784 1.914 2.35 2.555 3.133.479-.567 1.435-1.681 1.913-2.249 2.22 2.077.958 4.921.859 7.472 8.17-.089 16.424.463 24.567-.205.61-.45 1.829-1.335 2.438-1.783 1.119.434 2.25.871 3.367 1.32 3.671-.09 7.357-.101 11.043-.116-.076 1.901-.134 3.801-.206 5.703-4.745-.074-9.505-.174-14.178.637-3.018-2.596-7.067-1.772-10.709-1.87-5.601.261-11.38-.726-16.804 1.058-3.224.899-6.762.683-9.606-1.147-.685 1.698.363 5.5-2.499 5.353-11.261.147-22.507-.1-33.753.074a171.438 171.438 0 0 1-4.626 2.335c-1.626 4.847-6.284 8.082-10.248 11.042-.494 7.444 2.452 14.395 3.599 21.62-2.221.637-4.455 1.293-6.646 2.019-3.149 7.429-1.219 17.571-8.504 22.755-5.587 3.249-9.284 10.316-16.819 9.2 3.831 3.192-1.044 2.191-.536-.363-13.626-1.204-25.105-9.2-36.946-15.293-.551 3.336-1.421 6.617-2.322 9.882 4.499.856 8.214 4.164 9.012 8.779 1.436 10.058-1.437 20.043-1.393 30.127.319 5.92-2.221 11.346-5.384 16.178-2.772 3.135-7.14-.088-10.463-.551a249.026 249.026 0 0 0-2.22 4.411c.943 3.946 1.35 8.052 2.67 11.912 7.415 8.199 14.163 17.082 19.344 26.877a355.261 355.261 0 0 1 14.237 34.041c.404 2.251 2.523 3.059 4.383 3.875.247 2.322.494 4.641.726 6.993a349.336 349.336 0 0 0 2.22 3.191c.45 14.309-1.306 28.558-3.529 42.677-1.376 6.372 2.351 12.596.842 19.01.174 3.284-2.087 5.764-3.149 8.666-.203 6.777-.537 13.639.206 20.404.519 4.963 4.716 8.154 7.56 11.856 3.106 3.295 5.703 7.72 10.405 8.894a49.006 49.006 0 0 1 12.549 5.748c1.19 2.944.972 6.067.406 9.126-8.503 1.567-17.181.785-25.772.917-6.62.347-12.523-3.208-18.954-3.95-6.225-.157-13.815 2.933-18.601-2.64 2.029-7.731 2.192-16.034 5.904-23.248 1.19-8.168-1.071-16.456-.595-24.698-.708-.595-2.133-1.785-2.845-2.383.511-5.382-2.146-10.172-3.032-15.322-.578-7.521-1.263-15.035-2.133-22.523-.683-3.642 1.204-6.978 3.772-9.402.233-4.208.801-8.374 1.205-12.552-.624-2.715-2.786-4.731-4.179-7.052-4.658 1.961-10.942 1.031-13.713-3.528-6.573-9.779-13.133-19.56-19.779-29.284-2.612-.172-5.369.102-7.807-.943-2.813-2.886-4.281-6.732-6.078-10.243-2.569 2.887-2.382 7.312-5.427 9.94-6.443 6.183-8.155 15.267-11.522 23.189-2.58 5.135-1.129 11.332-4.005 16.339-1.538 2.698-5.398 3.235-6.414 6.314-1.335 3.32-2.902 6.761-6.022 8.781-3.381 2.217-4.279 6.428-5.787 9.908-1.378 3.209.668 6.574.189 9.869-2.148 10.464-8.809 19.213-11.609 29.459-1.277 4.615-3.107 9.81-8.476 10.795-6.109 10.913-9.475 24.264-6.021 36.551 2.119 3.86 2.003 8.199 1.35 12.451-9.707.756-19.663 2.06-29.195-.652-2.235-4.427-1.916-9.637-1.452-14.421 2.945-12.584 6.85-24.946 9.243-37.658-2.99-2.656-2.292-6.717-2.235-10.274-.1-6.632 4.411-11.943 7.546-17.384 1.177-5.587.625-11.591 3.511-16.717 3.398-6.414 6.269-13.349 11.509-18.531 1-4.571 4.37-8.023 5.731-12.425 1.451-3.889-1.089-7.836-.578-11.81 1.247-12.062 3.439-24.003 5.34-35.975-3.597-3.004-2.438-7.777-3.584-11.827a27.61 27.61 0 0 1 2.133-4.6c-.899-.827-1.783-1.669-2.684-2.494.87-4.256.624-11.875 7.154-10.492.406-14.09-4.484-27.731-2.845-41.837.871 1.014 1.726 2.046 2.598 3.076l-.464-4.774c2.728-1.451 5.63-2.568 8.677-3.134-4.963-.652-9.795-1.914-14.659-3.048-1.175-3.092-.519-6.385-.087-9.548 1.887-10.68 2.583-21.506 2.975-32.331 5.5-1.913 11.565-.289 16.934-2.844-1.665-13.539-2.086-27.672 2.729-40.661 3.874-11.058 11.276-21.724 22.826-25.612 5.456-1.304 12.32-2.771 16.177 2.525 1.059-.972 2.118-1.973 3.178-2.946-8.807-17.491 1.713-43.046 21.698-46.644Zm70.48 75.864c-2.322 1.422-4.6 3.049-2.16 5.632a98.303 98.303 0 0 1-3.587 2.045c-1.886 1.451-6.123 2.276-5.63 5.211a70.708 70.708 0 0 1 5.458 10.693c4.627-3.801 8.313-8.911 10.809-14.321.522-.537 1.583-1.611 2.104-2.135-.232-2.481-.784-4.906-1.756-7.197-1.741.03-3.497.058-5.238.072Z" />
      <path d="M611.975 499.256c6.645-8.386 17.383-13.031 28.033-12.856 32.403.03 64.821-.015 97.225.014 15.805.334 31.215 12.684 33.043 28.735-44.854-.149-89.696.131-134.533-.149-.044 30.01-.102 60.034 0 90.059 34.42-.057 68.838-.116 103.262.029-.133-10.753.04-21.506-.102-32.257-17.02.097-34.043.131-51.065 0-13.653-.524-23.811-12.32-26.886-24.887 36.597-.13 73.18-.145 109.774.015-.157 18.386.09 36.787-.131 55.173-.435 15.483-13.755 29.111-29.022 30.664-35.306 0-70.626-.015-105.932-.015-10.549-.075-19.88-6.736-25.83-15.05-4.063-5.878-4.978-13.176-5.557-20.099-.059-24.669.029-49.353-.031-74.022.134-8.941 1.715-18.387 7.752-25.354Zm214.082-11.842c3.646-.987 7.445-1.058 11.206-1.014 29.951.09 59.917-.101 89.868.072 16.978.726 31.894 15.385 32.548 32.418.031 27.529.031 55.07 0 82.615-.304 16.875-15.251 32.605-32.386 32.317-32.94-.145-65.881.101-98.824-.116-16.427-1.829-29.037-17.514-29.153-33.753-.232-25.106.029-50.24-.131-75.343-.13-7.4 1.205-15.004 5.123-21.389 4.598-8.026 12.841-13.644 21.749-15.807Zm5.168 26.79c.058 30.967-.131 61.947.087 92.914 32.171.089 64.36-.014 96.53.041.098-30.993.014-61.991.04-93.002-32.213-.012-64.442-.069-96.657.047ZM.051 521.576c.683-16.789 14.743-32.564 31.852-33.217 31.967-.031 63.95-.031 95.919.014 17.268-.173 31.652 15.427 32.955 32.158-2.307.19-4.615.333-6.922.363-38.063-.042-76.126.015-114.175-.03-.017 27.049-.159 54.096.072 81.146 40.4-.059 80.785-.088 121.184.016-1.146 17.338-15.746 32.724-33.345 33.405-28.964.408-57.928.014-86.894.19-7.212.247-14.642-.654-21.142-3.948C8.353 625.942.428 614.259.04 601.576c-.032-26.671-.075-53.33.012-80Zm191.49-13.147c5.325-11.625 17.515-20.258 30.489-20.099 31.925.03 63.864 0 95.804.014 16.672.102 31.358 14.698 32.535 31.172-42.113.595-84.254.085-126.378.246-.191 8.475-.102 16.949-.117 25.437 31.316.1 62.645.029 93.96.029 9.286.363 19.039 3.339 25.365 10.521 7.109 6.357 10.114 16.036 10.346 25.352.158 9.302.158 18.648-1.351 27.86-3.454 14.919-17.718 26.035-32.939 26.514-30.443.288-60.905.029-91.348.145-7.181.146-14.611-.886-20.983-4.383-10.1-5.269-17.355-15.865-18.355-27.239 42.866.206 85.746.131 128.612.031.102-9.029.044-18.054.044-27.078-31.722-.218-63.457-.031-95.195-.09-18.239.146-34.376-16.615-33.885-34.797.638-11.202-1.943-23.23 3.396-33.635Zm778.048-17.08c4.034-.101 8.112-.261 12.131.349a24.444 24.444 0 0 1-5.688.754c-.247 4.369-.276 8.737-.218 13.102-.421 0-1.246 0-1.654.015.029-4.484.073-8.968.014-13.438-1.131.09-3.381.292-4.498.378l-.087-1.16Zm14.394-.162c.857.045 2.597.132 3.471.175 1.233 3.931 2.684 7.791 4.484 11.521 1.683-3.759 2.786-7.765 4.643-11.419.813-.116 2.438-.363 3.248-.479-.45 5.34 1.391 11.246-1.492 16.108-.522-4.731-.305-9.492-.611-14.237-2.207 4.427-3.249 9.403-6.137 13.496-2.207-4.206-3.149-8.998-5.79-12.97-.172 4.238-.087 8.489-.145 12.738l-1.552-.175c-.002-4.917-.074-9.837-.119-14.758Z" />
    </g>
    <defs>
      <clipPath id="csgo_svg__a">
        <path fill="#fff" d="M0 0h1000v1000H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCsgo;
