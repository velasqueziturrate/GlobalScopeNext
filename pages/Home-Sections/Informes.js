import React, { useState } from "react";
import { initGA } from "./../helpers/initGA.js";
import Informe from "./../../components/Cards/CardInforme.js";
import Link from 'next/link';
import {
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBContainer
} from "mdbreact";

export default function InformesFinancieros({ informes }) {
  React.useEffect(() => {
    initGA();
  }, []);

  const NNoticias = () =>
    informes.map(noticia => (
      <MDBCol key={noticia.id} sm="12" md="6" lg="4">
        <Informe {...noticia} />{" "}
      </MDBCol>
    ));

  return (
    <section className="informes">
      <MDBContainer>
       
        <h2> Notas de Prensa </h2>
      </MDBContainer>

      <MDBContainer className="space">
        {!informes ? (
          <div className="container-load-posts">
            <div className="spinner-border" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
          </div>
        ) : (
          <MDBRow>
            <NNoticias />
          </MDBRow>
        )}
        <MDBRow className="row-button">
        <Link href="/informes">
          <MDBBtn
            className="btn-round btn-color-primary"
          >
            {" "}
            Ver más
          </MDBBtn>
        </Link>
        </MDBRow>
        <MDBRow></MDBRow>
      </MDBContainer>
    </section>
  );
}