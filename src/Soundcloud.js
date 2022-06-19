import * as React from "react";

const SvgSoundcloud = ({ title, titleId, ...props }) => (
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
      d="M748.612.396H250.595C112.609.396 0 113.006 0 250.991v498.811c0 137.192 112.609 249.801 250.595 249.801h498.81c137.986 0 250.595-112.609 250.595-250.594V250.991C999.207 113.006 886.598.396 748.612.396ZM197.462 604.68c0 1.586-1.586 2.379-2.379 2.379-1.586 0-2.379-.793-2.379-2.379l-4.758-36.479 4.758-37.272c0-1.586 1.586-2.379 2.379-2.379 1.586 0 2.379.793 2.379 2.379l5.551 37.272-5.551 36.479Zm22.998 22.204c0 1.586-1.586 2.379-2.379 2.379-1.586 0-2.379-.793-2.379-2.379l-6.344-58.683 6.344-60.27c0-1.586 1.586-2.379 2.379-2.379 1.586 0 2.379.793 2.379 2.379l7.137 60.27-7.137 58.683Zm25.377 10.31c0 1.586-1.586 3.172-3.172 3.172s-3.173-1.586-3.173-3.172l-5.551-68.993 5.551-71.372c0-1.586 1.587-3.172 3.173-3.172s3.172 1.586 3.172 3.172l6.344 71.372-6.344 68.993Zm25.376 2.379c0 2.379-1.586 3.965-3.965 3.965-2.379 0-3.172-1.586-3.965-3.965l-5.551-70.579 5.551-72.958c0-2.379 1.586-3.965 3.965-3.965 2.379 0 3.172 1.586 3.965 3.965l6.344 72.958-6.344 70.579Zm25.377.793c0 2.379-1.586 4.758-3.965 4.758-2.379 0-3.965-1.586-3.965-4.758l-5.551-71.372 5.551-68.2c0-2.379 1.586-4.758 3.965-4.758 2.379 0 3.965 1.586 3.965 4.758l5.551 68.2-5.551 71.372Zm28.549 0c0 3.172-3.965 4.758-6.344 4.758-2.379 0-5.552-2.379-5.552-4.758l-5.551-71.372 4.758-111.023c0-3.172 2.379-4.758 4.759-4.758 2.379 0 4.758 2.379 4.758 4.758l7.137 111.023-3.965 71.372Zm23.79-.793c0 3.172-3.172 5.551-5.551 5.551-3.172 0-5.551-2.379-5.551-5.551l-4.758-71.372 4.758-136.4c0-3.172 2.379-5.551 5.551-5.551s4.758 2.379 5.551 5.551l5.552 136.4-5.552 71.372Zm23.791-.793c0 3.172-2.379 6.344-5.551 6.344s-5.551-2.379-5.551-6.344l-3.965-70.579 3.965-147.502c0-3.172 2.379-6.344 5.551-6.344s5.551 2.379 5.551 6.344l3.965 147.502-3.965 70.579Zm26.963 0c0 3.965-3.172 6.344-6.344 6.344s-6.345-3.172-6.345-6.344l-3.965-69.786 3.965-152.26c0-3.965 3.173-6.344 6.345-6.344 3.172 0 6.344 3.172 6.344 6.344l4.758 151.467-4.758 70.579Zm26.963-.793a7.108 7.108 0 0 1-7.138 7.137c-3.965 0-6.344-3.172-7.137-7.137l-3.965-68.993 3.965-149.088a7.107 7.107 0 0 1 7.137-7.137 7.108 7.108 0 0 1 7.138 7.137l3.965 148.295-3.965 69.786Zm25.376-.793c0 3.965-3.172 7.93-7.137 7.93-3.965 0-7.137-3.172-7.137-7.93l-3.172-68.993 3.172-142.744c0-4.758 3.172-7.93 7.137-7.93 3.965 0 7.137 3.172 7.137 7.93l3.172 142.744-3.172 68.993Zm31.721 0c0 4.758-5.551 8.723-9.516 8.723s-8.723-3.965-8.723-8.723l-3.173-68.2 2.38-170.5c0-4.758 3.172-8.723 7.93-8.723 3.965 0 7.93 3.965 7.93 8.723l5.551 170.5-2.379 68.2Zm23.791-1.586c0 4.758-4.758 8.723-8.724 8.723-4.758 0-8.723-3.965-8.723-8.723l-3.172-67.407 3.172-185.567c0-4.758 3.965-8.723 8.723-8.723 4.759 0 8.724 3.965 8.724 8.723l3.965 185.567-3.965 67.407Zm226.804 9.516H522.601c-4.758-.793-7.137-4.758-7.137-9.516V373.91c0-4.759.793-7.138 6.344-9.517 15.068-6.344 31.721-9.516 48.374-9.516 70.579 0 128.47 57.891 134.814 132.435 8.723-3.965 19.033-6.345 29.342-6.345 42.03 0 76.923 37.272 76.923 82.475 0 45.202-34.1 81.681-76.923 81.681Z"
      fill="#000"
    />
  </svg>
);

export default SvgSoundcloud;