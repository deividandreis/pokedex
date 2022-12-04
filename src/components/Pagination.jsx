import React from "react";

const Pagination = (props) => {
  const { pages, totalPages, onLeftClick, onRightClick } = props;

  return (
    <div className="pagination-container">
      <button onClick={onLeftClick}>↜</button>

      <div className="">
        {pages} de {totalPages}
      </div>

      <button onClick={onRightClick}>↝</button>
    </div>
  );
};

export default Pagination;
