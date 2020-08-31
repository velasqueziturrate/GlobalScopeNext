import React from "react";
import Noticias from "./../../components/Cards/CardNoticias.js";

// md
import {
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBContainer
} from "mdbreact";
export default function NoticiasFinanzas({ noticias }) {
  const NNoticias = () =>
    noticias.map(noticia => (
      <MDBCol key={noticia.id} sm="6" md="4" lg="3">
        <Noticias {...noticia} />{" "}
      </MDBCol>
    ));

  return (
    <section className="noticias">
      <MDBContainer>
        <h2> Noticias </h2>
      </MDBContainer>

      <MDBContainer className="space">
        {!noticias ? (
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
          <MDBBtn
            className="btn-round btn-color-primary"
            href="https://www.finanzasdigital.com/"
            target="_blank"
          >
            {" "}
            Ver más
          </MDBBtn>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}