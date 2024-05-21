import { useParams } from "react-router-dom";

const Product = () => {
  const { pID } = useParams();

  return (
    <div>
      <h1>
        Product / <span className="capitalize">{pID}</span>
      </h1>
    </div>
  );
};

export default Product;
