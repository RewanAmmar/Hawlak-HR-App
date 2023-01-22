import React,{useState} from 'react'
import "./TableRow.scss"
export default function TableRow({ tableRow, slug, param }) {
    const [rowHovered, setRowHovered] = useState(false);  
    return (
      <tr
        className="table-row"        
        onMouseEnter={() => {
          setRowHovered(true);
        }}
        onMouseLeave={() => {
          setRowHovered(false);
        }}
      >
        {tableRow &&
          Object.values(tableRow).map((dataCell, i) => {
            let cellKey = Object.keys(tableRow)[i];
            return (
              <td className="table-data-cell" key={`${cellKey}-${i}`}>
                {dataCell}
              </td>
            );
          })}
      </tr>
    );
  }
  
