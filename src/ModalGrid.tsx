import React from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { ColDef } from "@ag-grid-community/core";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

interface ModalGridProps {
  modalData: any;
  onClose: () => void;
}

const ModalGrid: React.FC<ModalGridProps> = ({ modalData, onClose }) => {
  const modalColumnDefs: ColDef[] = [
    { headerName: "Status", field: "status" },
    { headerName: "Date", field: "date" },
    { headerName: "Name", field: "name" },
    { headerName: "Number", field: "number" },
    { headerName: "Amount", field: "amount" },
    { headerName: "Email", field: "email" },
  ];

  return (
    <>
      {/* Thiis is Modal */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          width: "80vw",
          height: "80vh",
          padding: "10px",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          overflowY: "auto", 
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute", 
            top: "10px", 
            right: "10px", 
            padding: "8px 12px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            zIndex: 100, 
          }}
        >
          Close
        </button>

        <h2>Details for {modalData.name}</h2>

        <div
          className="section1"
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <h3>Name: {modalData.name}</h3>
          <h3>Number: {modalData.number}</h3>
          <h3>Date: {modalData.date}</h3>
          <h3>Status: {modalData.status}</h3>
          <h3>Email: {modalData.email}</h3>
        </div>

        <div
          className="ag-theme-alpine"
          style={{
            flex: 1,
            width: "100%",
          }}
        >
          <div className="section2-title">
            <h3>Section 2</h3>
          </div>
          <AgGridReact
            rowData={[modalData]} 
            columnDefs={modalColumnDefs}
            defaultColDef={{ sortable: true, filter: true, resizable: true }}
            domLayout="autoHeight"
          />
        </div>

        <div
          className="ag-theme-alpine"
          style={{
            flex: 1,
            width: "100%",
          }}
        >
          <div className="section3-title">
            <div
              className="section2"
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <h3>Name: {modalData.date}</h3>
              <h3>Number: {modalData.status}</h3>
              <h3>Date: {modalData.email}</h3>
              <h3>Status: {modalData.number}</h3>
            </div>
          </div>
          <AgGridReact
            rowData={[modalData]} 
            columnDefs={modalColumnDefs}
            defaultColDef={{ sortable: true, filter: true, resizable: true }}
            domLayout="autoHeight"
          />
        </div>

        <div
          className="ag-theme-alpine"
          style={{
            flex: 1,
            width: "100%",
          }}
        >
          <div className="section4-title">
            <h3>Section 4</h3>
          </div>
          <AgGridReact
            rowData={[modalData]} 
            columnDefs={modalColumnDefs}
            defaultColDef={{ sortable: true, filter: true, resizable: true }}
            domLayout="autoHeight"
          />
        </div>
      </div>

      <div
        onClick={onClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 999,
        }}
      ></div>
    </>
  );
};

export default ModalGrid;
