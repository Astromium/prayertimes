import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Wilaya(props) {
  const { name, id, frName } = props;
  const path = `/times/${frName}/${name}`;
  return (
    <div className="wilaya">
      <Link to={path}>
        <button type="button" className="btn btn-primary">
          {name} .{id}
        </button>
      </Link>
    </div>
  );
}

Wilaya.propTypes = {
  name: PropTypes.string.isRequired,
  frName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Wilaya;
