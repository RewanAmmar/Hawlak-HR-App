import React from 'react'
import { useTranslation } from 'react-i18next';
import "./TableHead.scss"

export default function TableHead({ tableHeaders = [] }) {
    const { t } = useTranslation();
  return (
    <thead className="tickets-table-head">
    <tr className="table-head-row">
      {tableHeaders.map((tableHeader) => {
        return <th className="table-head-cell">{t(tableHeader)}</th>;
      })}
    
    </tr>
  </thead>
  )
};

