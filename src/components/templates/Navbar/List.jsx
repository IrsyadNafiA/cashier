import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const List = ({ href, style }) => {
  return (
    <li>
      <Link to={`/${href}`} className={`capitalize ${style}`}>
        {href}
      </Link>
    </li>
  );
};

List.propTypes = {
  href: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};

export default List;
