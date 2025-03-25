import { FC } from "react";

interface IconProps {
  className?: string;
  rotate?: number;
}

export const IconLikeOutline: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="46"
      height="42"
      viewBox="0 0 46 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.9865 39.6556L4.93652 21.9008C0.134034 16.8999 0.436457 8.69997 5.59312 4.09729C10.7089 -0.468914 18.4658 0.417773 22.5085 6.03087L23.1881 6.97452L23.8678 6.03087C27.9106 0.417773 35.6673 -0.468914 40.7832 4.09729C45.9399 8.69997 46.2423 16.8999 41.4397 21.9008L24.3898 39.6556C23.7261 40.3465 22.6502 40.3465 21.9865 39.6556Z"
        stroke="#111111"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconLikeFilled: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="46"
      height="42"
      viewBox="0 0 46 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.9865 39.6556L4.93652 21.9008C0.134034 16.8999 0.436457 8.69997 5.59312 4.09729C10.7089 -0.468914 18.4658 0.417773 22.5085 6.03087L23.1881 6.97452L23.8678 6.03087C27.9106 0.417773 35.6673 -0.468914 40.7832 4.09729C45.9399 8.69997 46.2423 16.8999 41.4397 21.9008L24.3898 39.6556C23.7261 40.3465 22.6502 40.3465 21.9865 39.6556Z"
        fill="#111111"
        stroke="#111111"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconDelete: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="800px"
      height="800px"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#000000"
        d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
      />
    </svg>
  );
};

export const IconArrowSelect: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="25"
      height="25"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.70723 9.99527C8.31671 10.3858 7.68354 10.3858 7.29302 9.99527L4.58221 7.28446C4.38822 7.09047 4.38822 6.77595 4.58221 6.58196C4.7762 6.38797 5.09072 6.38797 5.28471 6.58196L8.00012 9.29738L10.7155 6.58196C10.9095 6.38797 11.2241 6.38797 11.418 6.58196C11.612 6.77595 11.612 7.09047 11.418 7.28446L8.70723 9.99527Z"
        fill="#1A171C"
        fillOpacity="0.45"
      />
    </svg>
  );
};

export const IconAdd: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.25 12.75V18H12.75V12.75H18V11.25H12.75V6H11.25V11.25H6V12.75H11.25Z"
        fill="#fff"
      />
    </svg>
  );
};

export const IconArrowBack: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      fill="#fff"
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M5.828 7l2.536 2.536L6.95 10.95 2 6l4.95-4.95 1.414 1.414L5.828 5H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H5.828z" />
      </g>
    </svg>
  );
};

export const IconArrow: FC<IconProps> = ({ className, rotate = 0 }) => {
  return (
    <svg
      className={className}
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ transform: `rotate(${rotate}deg)` }}  // Поворот иконки
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m4 9l8 8l8-8"
      />
    </svg>
  );
};
