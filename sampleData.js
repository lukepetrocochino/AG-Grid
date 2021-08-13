var columnDefs = [
  {
    headerName: "Make",
    field: "make",
    sortable: true,
    filter: true,
    rowGroup: false,
    resizable: true,
  },
  {
    headerName: "Model",
    field: "model",
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: "Price",
    field: "price",
    sortable: true,
    filter: true,
    resizable: true,
  },
];

var autoGroupColumnDef = {
  headerName: "Model",
  field: "model",
  cellRenderer: "agGroupCellRenderer",
  cellRendererParams: {
    checkbox: true,
  },
};

var rowData = [];

var gridOptions = {
  columnDefs: columnDefs,
  autoGroupColumnDef: autoGroupColumnDef,
  rowData: rowData,
  rowSelection: "multiple",
  groupSelectsChildren: true,
  unSortIcon: true,
};

var eGridDiv = document.querySelector("#myGrid");

new agGrid.Grid(eGridDiv, gridOptions);

agGrid
  .simpleHttpRequest({
    url: "https://www.ag-grid.com/example-assets/row-data.json",
  })
  .then(function (data) {
    gridOptions.api.setRowData(data);
  });

function onPriceFirst() {
  gridOptions.columnApi.moveColumns(["price", "make", "model"]);
}

function onMakeFirst() {
  gridOptions.columnApi.moveColumns(["make", "model", "price"]);
}

function onModelFirst() {
  gridOptions.columnApi.moveColumns(["model", "make", "price"]);
}

// Documentation:
// https://www.ag-grid.com/javascript-grid/getting-started/
