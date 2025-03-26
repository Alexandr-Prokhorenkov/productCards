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
      style={{ transform: `rotate(${rotate}deg)` }} // Поворот иконки
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

export const IconEdit: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="m14 4l6 6zm8.294 1.294c.39.39.387 1.025-.008 1.42L9 20l-7 2l2-7L17.286 1.714a1 1 0 0 1 1.42-.008zM3 19l2 2m2-4l8-8"
      />
    </svg>
  );
};

export const IconSearch: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.66634 14.4999C3.89967 14.4999 0.833008 11.4333 0.833008 7.66659C0.833008 3.89992 3.89967 0.833252 7.66634 0.833252C11.433 0.833252 14.4997 3.89992 14.4997 7.66659C14.4997 11.4333 11.433 14.4999 7.66634 14.4999ZM7.66634 1.83325C4.44634 1.83325 1.83301 4.45325 1.83301 7.66659C1.83301 10.8799 4.44634 13.4999 7.66634 13.4999C10.8863 13.4999 13.4997 10.8799 13.4997 7.66659C13.4997 4.45325 10.8863 1.83325 7.66634 1.83325Z"
        fill="#1A171C"
        fillOpacity="0.45"
      />
      <path
        d="M14.6663 15.1666C14.5397 15.1666 14.413 15.1199 14.313 15.0199L12.9797 13.6866C12.7863 13.4933 12.7863 13.1733 12.9797 12.9799C13.173 12.7866 13.493 12.7866 13.6863 12.9799L15.0197 14.3133C15.213 14.5066 15.213 14.8266 15.0197 15.0199C14.9197 15.1199 14.793 15.1666 14.6663 15.1666Z"
        fill="#1A171C"
        fillOpacity="0.45"
      />
    </svg>
  );
};
