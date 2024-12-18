import React, { useState } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { ModuleRegistry, ColDef } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import ModalGrid from "./ModalGrid";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const AccountGrid: React.FC = () => {
  const accountsData = [
    {
      section1: { number: 101, name: "Mahesh", date: "17-11-2024", email: "mahes@email" },
      section2: [{ status: "active", date: "17-11-2024", amount: 1000 }],
    },
    {
      section1: { number: 102, name: "Prakash", date: "17-11-2024", email: "prakash@email" },
      section2: [{ status: "inactive", date: "17-11-2024", amount: 2000 }],
    },
  ];

  const columnDefs: ColDef[] = [
    { headerName: "Number", field: "number" },
    {
      headerName: "Name",
      field: "name",
      cellRenderer: (params: any) => (
        <span
          style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
          onClick={() => openModal(params.data)}
        >
          {params.value}
        </span>
      ),
    },
    { headerName: "Date", field: "date" },
    { headerName: "Email", field: "email" },
    { headerName: "Status", field: "status" },
  ];

  const rowData = accountsData.map((account) => ({
    number: account.section1.number,
    name: account.section1.name,
    date: account.section1.date,
    email: account.section1.email,
    status: account.section2[0]?.status || "N/A",
    amount: account.section2[0]?.amount || "N/A",
  }));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<any>(null);

  const openModal = (data: any) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  return (
    <div>
      <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={{ sortable: true, filter: true, resizable: true }}
        />
      </div>

      {isModalOpen && <ModalGrid modalData={modalData} onClose={closeModal} />}
    </div>
  );
};

export default AccountGrid;
