import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { PropagateLoader } from "react-spinners";

// Global Filter Component
const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  return (
    <span>
      <input
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value || undefined)}
        placeholder="Search..."
        className="px-4 py-1.5 border border-primary rounded-md"
      />
    </span>
  );
};

// Reusable Table Component
const Table = ({ columns, apiEndPoint }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(apiEndPoint);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiEndPoint]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page, // Instead of using 'rows', use 'page' for pagination
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    // setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  if (loading) {
    return (
      <div className="w-full flex justify-center">
        <PropagateLoader
          color="#102C57"
          loading={loading}
          size={10}
          speedMultiplier={1}
        />
      </div>
    );
  }

  return (
    <div className="overflow-x-auto w-full">
      <div className="w-full flex justify-between mb-4">
        <button className="px-4 py-1.5 bg-primary text-secondary rounded-md">
          Add
        </button>
        <GlobalFilter
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>
      <table
        {...getTableProps()}
        className="divide-y divide-gray-200 table-fixed w-full border-y border-gray-200"
      >
        <thead className="bg-gray-50">
          {headerGroups.map((headerGroup) => {
            const { key, ...headerGroupProps } =
              headerGroup.getHeaderGroupProps();
            return (
              <tr key={key || headerGroup.id} {...headerGroupProps}>
                {headerGroup.headers.map((column) => {
                  const { key, ...columnProps } = column.getHeaderProps(
                    column.getSortByToggleProps()
                  );
                  return (
                    <th
                      key={key || column.id}
                      {...columnProps}
                      style={column.style}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    >
                      <div className="w-full h-full flex items-center gap-1">
                        {column.render("Header")}
                        <span>
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <FaAngleDown />
                            ) : (
                              <FaAngleUp />
                            )
                          ) : (
                            ""
                          )}
                        </span>
                      </div>
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className="bg-white divide-y divide-gray-200"
        >
          {page.map((row) => {
            prepareRow(row);
            const { key, ...rowProps } = row.getRowProps();
            return (
              <tr
                key={key || row.id}
                {...rowProps}
                className="hover:bg-gray-100"
              >
                {row.cells.map((cell) => {
                  const { key, ...cellProps } = cell.getCellProps();
                  return (
                    <td
                      key={key || cell.column.id}
                      {...cellProps}
                      style={cell.column.style}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4 text-primary">
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <div className="flex items-center">
          <button
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            className="px-4 py-2 border rounded mr-2"
          >
            {"<<"}
          </button>
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="px-4 py-2 border rounded mr-2"
          >
            {"<"}
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="px-4 py-2 border rounded mr-2"
          >
            {">"}
          </button>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
            className="px-4 py-2 border rounded"
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
