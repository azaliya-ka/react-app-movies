import React from 'react';

const CloseButton = ({ classname }) => {
  return (
    <svg className={classname} width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.47099 1.15426L21.529 21.2122" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M21.529 1.15426L1.47103 21.2122" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

const DropdownArrow = ({ classname }) => {
  return (
    <svg className={classname} width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M1.17339 0C0.319169 0 -0.141788 1.00184 0.413939 1.65057L4.23746 6.11398C4.63642 6.57971 5.35674 6.57992 5.75597 6.11442L9.58401 1.65101C10.1403 1.0024 9.67943 0 8.82494 0H1.17339Z" fill="#F65261"/>
    </svg>
  );
}

export { CloseButton, DropdownArrow }