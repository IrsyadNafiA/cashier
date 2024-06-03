import { useMemo } from "react";
import Table from "./Table";
import { Link } from "react-router-dom";

const StockTable = () => {
  const columns = useMemo(
    () => [
      {
        Header: "No",
        accessor: "id",
        style: { width: "50px", whiteSpace: "nowrap" },
      },
      {
        Header: "Title",
        accessor: "title",
        style: {
          width: "200px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      },
      {
        Header: "Price",
        accessor: "price",
        style: { width: "100px" },
        Cell: ({ value }) => `$${value}`,
      },
      {
        Header: "Description",
        accessor: "description",
        style: {
          width: "300px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      },
      {
        Header: "Image",
        accessor: "image",
        style: { width: "150px" },
        Cell: ({ value }) => (
          <img src={value} alt="product" className="h-12 w-12 object-cover" />
        ),
      },
      {
        Header: "Action",
        // accessor: "image",
        style: { width: "150px" },
        Cell: (
          <div className="flex gap-2">
            <Link to={"#"} className="text-primary">
              Edit
            </Link>
            <Link to={"#"} className="text-red-600">
              Delete
            </Link>
          </div>
        ),
      },
    ],
    []
  );
  return (
    <Table columns={columns} apiEndPoint="https://fakestoreapi.com/products" />
  );
};

const CartTable = () => {
  const columns = useMemo(
    () => [
      { Header: "No", accessor: "id", style: { width: "50px" } },
      {
        Header: "User ID",
        accessor: "userId",
        style: { width: "100px" },
      },
      {
        Header: "Date",
        accessor: "date",
        style: { width: "200px" },
        Cell: ({ value }) => new Date(value).toLocaleDateString(),
      },
      {
        Header: "Products",
        accessor: "products",
        style: { width: "400px" },
        Cell: ({ value }) =>
          value.map((product, index) => (
            <div key={index}>
              Product ID: {product.productId}, Quantity: {product.quantity}
            </div>
          )),
      },
    ],
    []
  );

  return (
    <Table columns={columns} apiEndPoint="https://fakestoreapi.com/carts" />
  );
};

export { StockTable, CartTable };
