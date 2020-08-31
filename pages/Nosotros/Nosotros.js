import React, { useState, useEffect } from "react";
import { initGA } from "./helpers/initGA.js";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import Header from "../components/Headers/headersViews/Header";
import ImgHeader from "../assets/img/Header/Banner_nosotros.jpg";
export default function Nosotros() {
    React.useEffect(() => {
        initGA();
      }, []);

    return (
        <>
          <Header urlImage={ImgHeader} />
          <div className="page-nosotros">
            <MDBContainer >
              <MDBRow className="upper" >
                <h1> Nosotros </h1>
              </MDBRow>
              <MDBRow className="row">
              
                  <p>
                  Somos una empresa de consultoría con una variedad de productos y servicios en las áreas de finanzas, economía, sistemas de información y publicaciones de carácter económico y financiero. Nos caracterizamos por brindarles a nuestros clientes un servicio de calidad, con el objeto de satisfacer, orientar e incrementar el éxito de sus negocios.
                  </p>
    
                  <p>
                  GlobalScope nace en 2015 como resultado de la división de la sociedad de SOFTline Consultores, C.A., firma venezolana de consultoría integral con experiencia en el mercado latinoamericano, que desde el año 1989 ofrece servicios de adiestramiento y asesoría en las áreas de finanzas, economía e información financiera. Nuestros productos: SAIF (Sistema Automatizado de Información Financiera) y el portal www.finanzasdigital.com son el resultado de la aplicación de la tecnología en conjunción con información especializada.
                  </p>
              </MDBRow>
                <MDBRow className="row">
                <MDBCol sm="6" className="col-nosotros col">
             
                      <h2>Misión</h2>
              
                    <p>
                    Ser la Empresa de consultoría integral líder en los mercados de Latinoamérica, ofreciendo servicios y productos gerenciales que mejoren las oportunidades de negocio de nuestros clientes. Ser el mejor aliado estratégico en materia de información económica – financiera.
                    </p> 
                   
                </MDBCol>
                 <MDBCol sm="6" className="col-nosotros">
                 
                      <h2>Visión</h2>
      
                    <p>
                    Impulsar el desarrollo y crecimiento financiero de nuestros clientes, garantizando su éxito y permanencia en el mercado a través de la orientación en la toma de decisiones y manejo de información adaptada a sus necesidades.
                    </p>
                 </MDBCol>
                 </MDBRow>
                  <MDBRow className="row">
                  
                      <h2>Valores</h2>
             
                    <ul>
                      <li>
                        <p>
                          <span><b>Compromiso </b></span>
                          | Satisfacer las necesidades de nuestros clientes de manera consistente y oportuna.
                        </p>
                      </li>
                      <li>
                        <p>
                        <span><b>Confidencialidad </b></span>
                          | Garantizamos el manejo de información de su organización de forma prudente y para fines exclusivos de orientación y asesoría de sus negocios.
                        </p>
                      </li>
                      <li>
                        <p>
                        <span><b>Adaptación </b></span>
                          | Actuamos oportunamente ante los cambios del entorno, siempre guiados por nuestra visión, misión y valores.
                        </p>
                      </li>
                      <li>
                        <p>
                        <span><b>Calidad de Servicio </b></span>
                          | Buscamos el beneficio común en nuestras relaciones de negocios a través de la cordialidad, responsabilidad, honestidad, rapidez y eficiencia de nuestro trabajo.
                        </p>
                      </li>
                      <li>
                        <p>
                        <span><b>Innovación </b></span>
                          | Proactivos en la creación de nuevos productos y servicios que permitan dar un valor agregado a las organizaciones aliadas.
                        </p>
                      </li>
                      <li>
                        <p>
                        <span><b>Trabajo en Equipo </b></span>
                          | Motivamos a nuestro personal a trabajar como equipos de alto desempeño con el propósito de alcanzar objetivos comunes.
                        </p>
                      </li>
                    </ul>
                  </MDBRow>
            </MDBContainer>
          </div>
        </>
      );
}