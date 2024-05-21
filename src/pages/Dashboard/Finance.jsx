import { useParams } from "react-router-dom";

const Finance = () => {
  const { fID } = useParams();

  return (
    <div>
      <h1>
        Finance / <span className="capitalize">{fID}</span>
      </h1>
    </div>
  );
};

export default Finance;
