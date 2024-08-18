import React from "react";
import '.././App.css';

function Pagenation({pageno,prevpage,nextpage}) {
  return (
    <div className="pagenation-strip">
      <i onClick={prevpage}  className="fa-solid fa-arrow-left"></i>
      <p>{pageno}</p>
      <i onClick={nextpage}  className="fa-solid fa-arrow-right"></i>
    </div>
  );
}

export default Pagenation;
