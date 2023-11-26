import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";

import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid/components";
import { Box } from "@mui/material";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    headerClassName: "bg-md-blue text-white border-r-2 border-black",
  },
  {
    field: "sessions",
    headerName: "Sessions",
    width: 200,
    headerClassName: "bg-md-blue text-white border-r-2 border-black",
  },
  {
    field: "date",
    headerName: "Date",
    width: 200,
    headerClassName: "bg-md-blue text-white border-r-2 border-black",
  },
  {
    field: "time",
    headerName: "Time",
    width: 200,
    headerClassName: "bg-md-blue text-white border-r-2 border-black",
  },
  {
    field: "location",
    headerName: "Location",
    width: 950,
    headerClassName: "bg-md-blue text-white border-r-2 border-black w-full ",
  },
];

const Sesdata = [
  {
    id: 1,
    sessions: "Session 1",
    date: "12/5/2023",
    time: "07:30 AM",
    location:
      "Office 113-114, Iridium Building, Al Barsha 1,Dubai, PO Box: 47518 United Arab Emirates, https://g.page/SaveFast?share   ",
  },
  {
    id: 2,
    sessions: "Session 2",
    date: "12/6/2023",
    time: "04:30 PM",
    location:
      "Office 113-114, Iridium Building, Al Barsha 1,Dubai, PO Box: 47518 United Arab Emirates, https://g.page/SaveFast?share   ",
  },
  {
    id: 3,
    sessions: "Session 3",
    date: "12/7/2023",
    time: "07:30 AM",
    location:
      "Office 113-114, Iridium Building, Al Barsha 1,Dubai, PO Box: 47518 United Arab Emirates, https://g.page/SaveFast?share   ",
  },
  {
    id: 4,
    sessions: "Session 4",
    date: "12/9/2023",
    time: "10:30 AM",
    location:
      "Office 113-114, Iridium Building, Al Barsha 1,Dubai, PO Box: 47518 United Arab Emirates, https://g.page/SaveFast?share   ",
  },
  {
    id: 5,
    sessions: "Session 5",
    date: "12/10/2023",
    time: "01:30 PM",
    location:
      "Office 113-114, Iridium Building, Al Barsha 1,Dubai, PO Box: 47518 United Arab Emirates, https://g.page/SaveFast?share   ",
  },
  {
    id: 6,
    sessions: "Session 6",
    date: "12/11/2023",
    time: "07:30 AM",
    location:
      "Office 113-114, Iridium Building, Al Barsha 1,Dubai, PO Box: 47518 United Arab Emirates, https://g.page/SaveFast?share   ",
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

const Sessions = () => {
  return (
    <div
      style={{
        height: 600,
        width: "100%",
        padding: "1.5rem",
      }}
    >
      <DataGrid
        rows={Sesdata}
        columns={columns}
        slots={{ toolbar: CustomToolbar }}
      />
    </div>
  );
};

export default Sessions;
