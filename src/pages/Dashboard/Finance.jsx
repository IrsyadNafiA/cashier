import { useParams } from "react-router-dom";

const Finance = () => {
  const { fID } = useParams();

  return (
    <div>
      <p className="breadcrumb">
        Finance / <span className="capitalize">{fID}</span>
      </p>
    </div>
  );
};

export default Finance;
