import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const List = ({ href, className }) => {
  return (
    <li>
      <Link to={`/${href}`} className={`capitalize ${className}`}>
        {href}
      </Link>
    </li>
  );
};

List.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default List;
