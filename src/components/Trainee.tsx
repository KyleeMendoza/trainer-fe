import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";

import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid/components";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    headerClassName: "bg-md-blue text-white border-r-2 border-black",
  },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    headerClassName: "bg-md-blue text-white border-r-2 border-black",
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
    headerClassName: "bg-md-blue text-white border-r-2 border-black",
  },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    width: 200,
    headerClassName: "bg-md-blue text-white border-r-2 border-black",
  },
];

const data = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "123-456-7890",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phoneNumber: "987-654-3210",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    phoneNumber: "555-123-4567",
  },
  {
    id: 4,
    name: "Bob Anderson",
    email: "bob@example.com",
    phoneNumber: "777-888-9999",
  },
  {
    id: 5,
    name: "Eva Williams",
    email: "eva@example.com",
    phoneNumber: "111-222-3333",
  },
  {
    id: 6,
    name: "Michael Brown",
    email: "michael@example.com",
    phoneNumber: "444-555-6666",
  },
  {
    id: 7,
    name: "Sophia Davis",
    email: "sophia@example.com",
    phoneNumber: "666-777-8888",
  },
  {
    id: 8,
    name: "Matthew Miller",
    email: "matthew@example.com",
    phoneNumber: "888-999-0000",
  },
  {
    id: 9,
    name: "Olivia Wilson",
    email: "olivia@example.com",
    phoneNumber: "222-333-4444",
  },
  {
    id: 10,
    name: "Daniel Lee",
    email: "daniel@example.com",
    phoneNumber: "333-444-5555",
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

export default function Trainee() {
  //   const { data } = useDemoData({
  //     dataSet: "Employee",
  //     visibleFields: VISIBLE_FIELDS,
  //     rowLength: 100,
  //   });

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
