import React, { useState, useEffect } from "react";
import { initGA } from "./helpers/initGA.js.js";
import ShareFriend from "../components/Others/shareFriends.js";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import Header from "../components/Headers/headersViews/Header";
import ImgHeader from "../assets/img/Header/Banner_consultoria.jpg";
export default function Consultoria() {
    React.useEffect(() => {
        initGA();
      }, []);

    return (
        <>
          <Header urlImage={ImgHeader} />
          <div className="page-consultoria">
            <MDBContainer>
              <MDBRow >
                <h1 className="upper" > Consultoría </h1>{" "}
                <ul>
                  <li>Estudios de factibilidad económica.</li>
                  <li>Análisis sectoriales y de entorno.</li>
                  <li>Análisis de mercado.</li>
                  <li>Valoración de empresas.</li>
                  <li>Análisis de riesgo del negocio.</li>
                  <li>Planificación estratégica.</li>
                  <li>Outsorcing en gerencia de crédito.</li>
                  <li>Gestión integral de riesgo.</li>
                  <li>Análisis del sistema financiero.</li>
                </ul>
              </MDBRow>
            </MDBContainer>
            <ShareFriend
          subject={`Global Scope – Consultoria`}
          message="Somos una empresa de consultoría con una variedad de productos y servicios en las áreas de finanzas, economía, sistemas de información y publicaciones de carácter económico y financiero. Nos caracterizamos por brindarles a nuestros clientes un servicio de calidad, con el objeto de satisfacer, orientar e incrementar el éxito de sus negocios.
          Conoce más sobre nosotros visitando nuestra página web:"
        />
          </div>
        </>
      );
}