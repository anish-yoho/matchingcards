import React from "react";
import propTypes from "prop-types";

const Cardfront = ({ value, isflipped, onClick }) => {
  return (
    <div
      className={`card-front ${isflipped ? "flipped" : ""}`}
      onClick={onClick}
    >
      <h1>{isflipped ? value : "xx"}</h1>
    </div>
  );
};

Cardfront.propTypes = {
  id: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  isflipped: propTypes.func.isRequired,
  onClick: propTypes.func.isRequired,
};
export default Cardfront;
