import React, { useState } from "react";
import styled from 'styled-components'
import { Tab } from './Tab'

export const HelpTabs = (props) => {
  const [activeTab, setActiveTab] = useState(props.children[0].props.label)
  
  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  }
  const { children } = props
  return (
    <HelpTabsStyle className="tabs">
        <ol className="tab-list">
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
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </HelpTabsStyle>
  );
};

const HelpTabsStyle = styled.div`
  .tab-list {
    border-bottom: 1px solid #ccc;
    padding-left: 0;
    margin: 0px;
  }
  .tab-content {
    padding: 15px;
  }
  .tab-list-item {
    display: inline-block;
    list-style: none;
    margin-bottom: -1px;
    padding: 0.5rem 0.75rem;
  }

  .tab-list-active {
    background-color: white;
    border: solid #ccc;
    border-width: 1px 1px 0 1px;
  }
`
