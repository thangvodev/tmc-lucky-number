import React from "react";

const EditIcon = ({ className = "" }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V9.75"
        stroke="currentColor"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0324 2.26495L6.12235 8.17495C5.89735 8.39995 5.67235 8.84245 5.62735 9.16495L5.30485 11.4224C5.18485 12.2399 5.76235 12.8099 6.57985 12.6974L8.83735 12.3749C9.15235 12.3299 9.59485 12.1049 9.82735 11.8799L15.7374 5.96995C16.7574 4.94995 17.2374 3.76495 15.7374 2.26495C14.2374 0.764945 13.0524 1.24495 12.0324 2.26495Z"
        stroke="currentColor"
        strokeWidth="1.125"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.1836 3.1123C11.6861 4.9048 13.0886 6.3073 14.8886 6.8173"
        stroke="currentColor"
        strokeWidth="1.125"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EditIcon;
