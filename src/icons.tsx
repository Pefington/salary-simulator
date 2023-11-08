/*
Font Awesome Free 6.4.2 by @fontawesome
https://fontawesome.com
License https://fontawesome.com/license (Commercial License)
Copyright 2023 Fonticons, Inc.
*/

interface EditIconProps {
  height?: string;
  className?: string;
  title?: string;
  onClick?: () => void;
}

export const BullsEyeIcon = ({ height, className, title, onClick }: EditIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height || "20px"}
      className={className}
      viewBox="0 0 512 512"
      onClick={onClick}
    >
      <title>{title}</title>
      <path d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </svg>
  );
};
