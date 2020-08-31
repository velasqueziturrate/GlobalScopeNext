import React from 'react';
import { MDBBtn, MDBContainer, MDBSpinner, MDBCarousel, MDBCarouselInner, MDBRow, MDBCol, MDBCarouselItem } from 'mdbreact';
import { Link } from "react-router-dom";

export default function SaifGaleria() {
    return (
        <section className="saifBanner">
           <MDBContainer fluid >
               <MDBRow > 
               <MDBCol sm="6" className="col-img">
                  <img className="img-banner" alt="" src={require("../../assets/img/Header/macBook.png")}/>
                
               </MDBCol>
               <MDBCol sm="5"  className="text-right">
               <h1><b>SAIF</b></h1>
           <h2 > Sistema Automatizado de Informacion Financiera</h2> 
           <p>Ofrecemos nuestros servicios basados en esta herramienta que permite el análisis para la evaluación de instituciones que componen el mercado financiero, de capitales y de seguro, local y de los países de Iberoamérica.</p>
         < MDBRow className="row-button"> 
             <MDBBtn className="btn-round btn-color-primary borderRadius"
                         tag={Link}
                         to={{
                         pathname: `/saif`
                         }}
             > Saber más 
             </MDBBtn>
         </MDBRow>
               </MDBCol >
           </MDBRow>
              
            </MDBContainer>
          
   
        </section>
    )
}