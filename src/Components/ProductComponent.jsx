import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  // const { id, title } = products[0];

  return (
    <div className="four column wide" style={{display: "flex", margin: "50px"}}>
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zwhySGCEBxRRFYIcQgvOLOpRGqrT3d7Qng&s" className="card-img-top" alt="image" />
          </div>
          <div className="content">
            {/* <div className="header">{title}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
