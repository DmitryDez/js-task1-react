import React from 'react';

function EmptyTr (props){
  return(
    <tr>
        <td>
          <span className="empty-td"> x </span>
        </td>
        <td>
          <span className="empty-td"> x </span>
        </td>
        <td>
          <span className="empty-td"> x </span>
        </td>
        <td>
          <span className="empty-td">
            <button type="button" className="products-table-button-plus">
              +
            </button>
          </span>
        </td>
    </tr>
  );
}

export default EmptyTr;
