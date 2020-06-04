import React from "react";

export const Tab = (props) => {  
  
  const onClick = () => {
    const { label, onClick } = props;
    onClick(label);
  }
  const { activeTab, label } = props

  let className = 'Help-tab-list-item';

  if (activeTab === label) {
    className += ' active';
  }

  return (
    <li className={className} onClick={onClick}>
      {label}
    </li>
  );
};
