import React from "react";
import TableHead from "./TableHead/TableHead";
import "./TableData.scss";
import Pagination from "react-js-pagination";


export default function TableData({
  tableRows = [],
  tableHeaders = [],
  showPagination = false,
  activePage,
  itemsCount,
  handlePageChange = () => {},
  handleRowClick = () => {},
}) {
 


  return (
    <div className="data-table-container">
      <div className="table-responsive">
        <table className="card-table records-table" cellSpacing="0">
          <TableHead tableRows={tableRows} tableHeaders={tableHeaders} />
          <tbody className="tickets-table-body">
            {tableRows.map((tableRow) => {
              return (
                <tr
                  className="table-body-row "
                  key={tableRow.id}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleRowClick(tableRow)}
                >
                  {tableHeaders.map((tableHeader) => {
                    return (
                      <td className="tickets-table-data-cell">
                        {tableRow[tableHeader]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    {showPagination && (
        <div className="table-pagination">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={8}
            totalItemsCount={itemsCount}
            pageRangeDisplayed={Math.ceil(itemsCount / 8)} 
            onChange={(pageNumber) => handlePageChange(pageNumber)}
          />
        </div>
      )}  
    </div>
  );
}