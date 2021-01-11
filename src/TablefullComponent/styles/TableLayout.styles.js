import styled from "styled-components";


export const TableLayoutStyled = styled.div`
  button {
    color: #FFF;
  }
  caption {
    margin-bottom: 15px;
    button {
      margin-top: 5px;
    }
  }
  table {
    width: 100%;
    border-spacing: 0;
    tr, td {
      &.selected {
        background-color: grey;
      }
    }
    td, th {
      padding: 1.2rem 1.5rem;
      border: 0.1rem solid #e1e1e1;

      &.alignright {
        text-align: right;
      }
      &.current_filter {
        background: grey;
      }
    }
    .dragelement{
      cursor: move;
      span {
        display: none;
      }
    }
    .dragcolumn {
      background-color: gray;
      //opacity: 0.3;
    }
   
    td span.editicon {
      float: right;
      cursor: pointer;
    }
    input, select {
      padding: 5px;
      max-width: 100%;
    }
  }
  
  /* collapse column */
  table {
    table-layout: fixed;
  }
  th {
    width: 150px;
    transition: all 0.1s;
  }
  thead tr th.collapsed {
    width: 50px;
  }
  .expanded svg {
    cursor: pointer;
  }

  /* Tooltip container */
  .tooltip {
    cursor: pointer;
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black; 
  }
  
  /* Tooltip text */
  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: #555;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
  
    /* Position the tooltip text */
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
  
    /* Fade in tooltip */
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  /* Tooltip arrow */
  .tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
  
  /* Show the tooltip text when you mouse over the tooltip container */
  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }

  /* Pagination */
  ul#page-numbers {
    margin: 0px;
    li {
      list-style: none;
      display: inline-block;
      padding: 10px;
      cursor: pointer;
    }
  }
  &.freezetable {
    overflow-x: scroll;
    width: 1000px;
    table {
      table-layout: fixed;
    }
    td, th {
      width: 200px;
    }
    td:first-child, th:first-child {
      padding: 1.2rem 1.5rem;
    }
    .freeze {
      position: sticky !important;
      z-index: 999;
      background-color: gray;
    }
    .freeze_0 {
      left: 0px;
    }
    .freeze_1 {
      left: 200px;
    }
    .freeze_2 {
      left: 400px;
    }
    .freeze_3 {
      left: 600px;
    }
    .freeze_4 {
      left: 800px;
    }
  }
  &.fixed_headers {
    table-layout: fixed;
    table {
      width: 100%;
      table-layout: fixed;
      border-collapse: collapse;
      th {
        width: 200px;
      }
      tr {
        display: table;
        width: 100%;
        table-layout: fixed;
      }
      thead {
        display: table;
        width: calc(100% - 18px);
      }
      tbody{
        height: 300px;
        overflow: auto;
        overflow-x: hidden;
        display: block;
        width: 100%;
      }
    }
  }
`;
