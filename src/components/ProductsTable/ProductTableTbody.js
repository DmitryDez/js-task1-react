import React  from 'react';
import ProductTableRow from './ProductTableRow.js';
import EmptyTr from './EmptyTr.js';

function ProductTableTbody(props){
  let rowListLength  = props.rowListLength;
  let rowList        = props.rowList;

  let tbodyList = [];

  for(let i = 0; i < rowListLength; i++){
    tbodyList.push(<ProductTableRow
       key={i}
       productData={rowList[i]}
       toAddProductF={props.toAddProductF} />);
  }

  let content = tbodyList;

  if(rowListLength === 0){
    tbodyList = [];

    tbodyList.push(<EmptyTr key="1" />);
    tbodyList.push(<EmptyTr key="2" />);

    content = tbodyList;
  }

  return(
    <tbody id="tbody" className="products-table-tbody">
      {content}
    </tbody>
  );
}

export default ProductTableTbody;
