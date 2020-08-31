import React from "react";
import Carousel from 'react-multi-carousel';
import Modal from "./ModalGallery"

export default function Gallery(props) {   
    const [urlImg, setUrlImg] = React.useState("");
    const [isOpen, setIsOpen] = React.useState(false);   
    const [title, setTitle] = React.useState(""); 

    const toggle = (urlImg, title) => {
     setUrlImg(urlImg); 
     setTitle(title);
     setIsOpen(!isOpen);
    }
            const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 3,
              partialVisibilityGutter: 40
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
              partialVisibilityGutter: 30
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              partialVisibilityGutter: 30
            },
          };
    return (
        <>
    <Carousel 
    additionalTransfrom={0}
    arrows={true}
    autoPlay
    autoPlaySpeed={2000}
    centerMode={true}
    className="carousel-container"
    containerClass="carousel-container"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite
    keyBoardControl
    minimumTouchDrag={80}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    responsive={responsive}
    showDots={false}
    sliderClass=""
    slidesToSlide={1}
    swipeable
  itemClass="item-gallery"
   >
     {/*              <div 
            onClick={() => toggle(require("../../assets/img/Banner/1.png"),"SAIF")}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/1.png")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/2.png"), "Análisis Comparativo de Estados Financieros")}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/2.png")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/3.png"), "Análisis Individual Compuesto de Estados Financieros")}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/3.png")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/4.png"), "Análisis de Mercado")}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/4.png")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/5.png"), "Análisis de Mercado y Saldos de Países")}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/5.png")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/6.png"), "Análisis por Serie")}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/6.png")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/7.png"), "Análisis Individual - Saldos")}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/7.png")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/8.png"), "Árbol de Rentabilidad")}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/8.png")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/9.png"), "Flujo de Fondos")}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/9.png")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/10.png"), "Gráfico Comparativo Horizontal")}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/10.png")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/11.png"), "Gráfico Comparativo Vertical")}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/11.png")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/12.png"), "Gráfico de Dispersión")}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/12.png")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/13.png"), "Gráfico Estructura de Serie")}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/13.png")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/14.png"), "Gráfico Pie de Estructura y Fecha")}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/14.png")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/15.png"), "Gráfico de Serie 1")}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/15.png")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/16.png"), "Gráfico de Serie 2")}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/16.png")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/17.png"), "Matríz de Análisis")}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/17.png")} /></div>
            <div 
            onClick={() => toggle(require("../../assets/img/Banner/18.png"), "Modelo de Riesgo")}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/18.png")} /></div> */}
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/1.jpg"))}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/1.jpg")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/2.jpg"))}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/2.jpg")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/3.jpg"))}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/3.jpg")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/4.jpg"))}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/4.jpg")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/5.jpg"))}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/5.jpg")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/6.jpg"))}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/6.jpg")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/7.jpg"))}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/7.jpg")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/8.jpg"))}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/8.jpg")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/9.jpg"))}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/9.jpg")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/10.jpg"))}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/10.jpg")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/11.jpg"))}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/11.jpg")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/12.jpg"))}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/12.jpg")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/13.jpg"))}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/13.jpg")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/14.jpg"))}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/14.jpg")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/15.jpg"))}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/15.jpg")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/16.jpg"))}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/16.jpg")} /></div>
             <div 
            onClick={() => toggle(require("../../assets/img/Banner/17.jpg"))}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/17.jpg")} /></div>
            <div 
            onClick={() => toggle(require("../../assets/img/Banner/18.jpg"))}> <img alt="" className="img-fluid" src={require("../../assets/img/Banner/18.jpg")} /></div>
          </Carousel>
            <Modal urlImg={urlImg} isOpen={isOpen} toggle={toggle} title={title} />
          </>
    );
  }