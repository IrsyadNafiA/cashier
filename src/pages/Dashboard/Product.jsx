import { useParams } from "react-router-dom";
import {
  CartTable,
  StockTable,
} from "../../components/utilities/Table/ExportTable";
const Product = () => {
  const { pID } = useParams();

  const renderTable = () => {
    switch (pID) {
      case "stock":
        return <StockTable />;
      case "cart":
        return <CartTable />;
      default:
        return <p>Invalid Product Type</p>;
    }
  };

  return (
    <div>
      {/* <p className="breadcrumb">
        Product / <span className="capitalize">{pID}</span>
      </p> */}
      <h1 className="capitalize text-3xl font-medium mb-2">{pID} Product</h1>
      <div className="w-full h-full bg-white shadow-md p-4 rounded-md">
        {renderTable()}
      </div>
    </div>
  );
};

export default Product;
