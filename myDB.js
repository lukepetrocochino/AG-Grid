var columnDefs = [
  {
    headerName: "Name",
    field: "name",
    sortable: true,
    resizable: true,
    filter: true,
  },
  {
    headerName: "Subcribed to channel",
    field: "subscribedToChannel",
    sortable: true,
    resizable: true,
    filter: true,
  },
  {
    headerName: "Date subscribed",
    field: "subscribeData",
    sortable: true,
    resizable: true,
    filter: true,
  },
];

var autoGroupColumnDef = {
  headerName: "Name",
  field: "name",
  sortable: true,
  resizable: true,
  filter: true,
};

var rowData = [];

var gridOptions = {
  columnDefs: columnDefs,
  autoGroupColumnDef: autoGroupColumnDef,
  rowSelection: "multiple",
  groupSelectsChildren: true,
  unSortIcon: true,
};

var eGridDiv = document.querySelector("#myGrid");

new agGrid.Grid(eGridDiv, gridOptions);

agGrid
  .simpleHttpRequest({ url: "http://localhost:3001/subscribers" })
  .then(function (data) {
    gridOptions.api.setRowData(data);
  });

// Refreshes the page:

function refreshPage() {
  console.log("test");
  agGrid
    .simpleHttpRequest({ url: "http://localhost:3001/subscribers" })
    .then(function (data) {
      gridOptions.api.setRowData(data);
    });
}

// Calls the refreshPage function every second, works, but is bad convention.
// Should use socket.io to make the grid update in realtime rather than refreshing the grid every second.
// but it works.

setInterval(refreshPage, 1000);

// localhost:3001/subscribers is hosted from REST_API project,
