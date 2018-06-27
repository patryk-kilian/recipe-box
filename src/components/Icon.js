import React from "react";
import Icons from "../css/images/icons.svg";

const Icon = ({ name, color, size }) => (
  <svg className={`icon-${name}`} fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

// Icon.propTypes = {
//   name: React.PropTypes.string.isRequired,
//   color: React.PropTypes.string,
//   size: React.PropTypes.number
// };

export default Icon;
