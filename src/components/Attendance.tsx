import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import Switch from "@mui/material/Switch";

import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid/components";

const label = { inputProps: { "aria-label": "Switch demo" } };

const CustomSwitch = ({ defaultChecked }) => (
  <Switch {...label} defaultChecked={defaultChecked} />
);

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    headerClassName: "bg-md-blue text-white border-r-2 border-black",
  },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    headerClassName: "bg-md-blue text-white border-r-2 border-black",
  },
  {
    field: "participantId",
    headerName: "Participant ID",
    width: 200,
    headerClassName: "bg-md-blue text-white border-r-2 border-black",
  },
  {
    field: "arrivalTime",
    headerName: "Arrival Time",
    width: 200,
    headerClassName: "bg-md-blue text-white border-r-2 border-black",
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    headerClassName: "bg-md-blue text-white border-r-2 border-black",
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    headerClassName: "bg-md-blue text-white border-r-2 border-black",
    renderCell: (params) => (
      <CustomSwitch {...label} defaultChecked={params.row.action} />
    ),
  },
];

const data = [
  {
    id: 1,
    name: "Sophia Miller",
    participantId: "435467",
    arrivalTime: "7:30AM (GMT +8)",
    status: "Present",
    action: true,
  },
  {
    id: 2,
    name: "Ethan Johnson",
    participantId: "987654",
    arrivalTime: "8:15AM (GMT +8)",
    status: "Absent",
    action: true,
  },
  {
    id: 3,
    name: "Olivia Davis",
    participantId: "123456",
    arrivalTime: "7:55AM (GMT +8)",
    status: "Present",
    action: true,
  },
  {
    id: 4,
    name: "Noah Smith",
    participantId: "567890",
    arrivalTime: "7:40AM (GMT +8)",
    status: "Present",
    action: true,
  },
  {
    id: 5,
    name: "Ava Wilson",
    participantId: "234567",
    arrivalTime: "8:00AM (GMT +8)",
    status: "Absent",
    action: true,
  },
  {
    id: 6,
    name: "Liam Brown",
    participantId: "876543",
    arrivalTime: "7:25AM (GMT +8)",
    status: "Present",
    action: true,
  },
  {
    id: 7,
    name: "Emma Lee",
    participantId: "345678",
    arrivalTime: "7:45AM (GMT +8)",
    status: "Absent",
    action: true,
  },
  {
    id: 8,
    name: "Jackson Wang",
    participantId: "654321",
    arrivalTime: "8:10AM (GMT +8)",
    status: "Present",
    action: true,
  },
  {
    id: 9,
    name: "Isabella Chen",
    participantId: "789012",
    arrivalTime: "8:20AM (GMT +8)",
    status: "Present",
    action: true,
  },
  {
    id: 10,
    name: "Lucas Kim",
    participantId: "210987",
    arrivalTime: "7:35AM (GMT +8)",
    status: "Absent",
    action: true,
  },
];

function CustomToolbar() {
  return (
    <GridToolbarContainer className="flex justify-end">
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function Attendance() {
  return (
    <div style={{ height: 550, width: "100%", padding: "1.5rem" }}>
      <DataGrid
        rows={data}
        columns={columns}
        slots={{ toolbar: CustomToolbar }}
      />
    </div>
  );
}
