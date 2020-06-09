import React from "react";
import { IconUser } from "../../assets"

export const HelpUserHistory = (props) => {  

  return (
    <ul className="History-list-items">
      <li className="Item-created">
        <span><IconUser/></span>
        <h3>Austin Security Job...</h3>
        <button>created</button>
      </li>
      <li className="Item-edited">
        <span><IconUser/></span>
        <h3>Dallas police Job...</h3>
        <button>edited</button>
      </li>
      <li className="Item-edited">
        <span><IconUser/></span>
        <h3>Dallas police Job...</h3>
        <button>edited</button>
      </li>
      <li className="Item-deleted">
        <span><IconUser/></span>
        <h3>Dallas Fire Job...</h3>
        <button>deleted</button>
      </li>
      <li className="Item-created">
        <span><IconUser/></span>
        <h3>Boston Security Job...</h3>
        <button>created</button>
      </li>
      <li className="Item-created">
        <span><IconUser/></span>
        <h3>Boston Security Job...</h3>
        <button>created</button>
      </li>
      <li className="Item-created">
        <span><IconUser/></span>
        <h3>Boston Security Job...</h3>
        <button>created</button>
      </li>
      <li className="Item-deleted">
        <span><IconUser/></span>
        <h3>Dallas Fire Job...</h3>
        <button>deleted</button>
      </li>
    </ul>	
  );
};
