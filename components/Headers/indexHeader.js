import React from "react";

// reactstrap components
// core components

import Header from "../../components/Headers/headersViews/Header";
import ImgHeader from "../../assets/img/Header/Banner_home.jpg";

function IndexHeader() {

  return (
    <>
      <div className="page-header">
        <div className="page-header-image">
        <Header urlImage={ImgHeader} />
        </div>
        <div className="page-header-mini-carousel">
        < h3 className = "h3-responsive" > Consultoría Integral e Información </h3>
        </div>
        
      </div>
    </>
  );
}

export default IndexHeader;