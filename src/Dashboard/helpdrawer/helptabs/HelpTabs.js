import React, { useState } from "react";
import { Tab } from './Tab'

export const HelpTabs = (props) => {
  const [activeTab, setActiveTab] = useState(props.children[0].props.label)
  
  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  }
  const { children } = props
  return (
    <div className="Help-tabs">
        <ol className="Help-tab-list">
          {children.map((child) => {
            const { label } = child.props;
            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="Help-tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
    </div>
  );
};
