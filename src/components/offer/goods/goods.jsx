import React from "react";
import PropTypes from "prop-types";


const Goods = (props) =>{
  const {goods} = props;
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {goods.map((it, index)=>{
          return (
            <li key={`${it}-${index}`} className="property__inside-item">
              {it}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Goods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string),
};
export default Goods;
