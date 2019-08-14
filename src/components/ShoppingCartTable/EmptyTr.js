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
            <button type="button" className="shopping-cart-table_button-minus">
              -
            </button>
          </span>
        </td>
        <td>
          <span className="empty-td">
            <button type="button" className="shopping-cart-table_button-delete-all">
               Delete all
            </button>
          </span>
        </td>
    </tr>
  );
}

export default EmptyTr;
