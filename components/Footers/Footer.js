import{  EmailIcon} from 'react-share';
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn } from "mdbreact";
export default function DarkFooter() {
  return (
    <MDBFooter>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol className="logoCenter" md="3">
          <a
              href="https://www.finanzasdigital.com/"
              target="_blank"
            >
              <div className="finanzasDigital" />
            </a>
            <a
              href="https://www.glratings.com"
              target="_blank"
            >
              <div className="globalRatings" />
            </a>
          </MDBCol>
          <MDBCol className="col-footer" md="5">
          <h4> <b>GlobalScope</b></h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start"
              }}
            >
              <p>
              Somos una empresa de consultoría que ofrece una variedad de
              productos y servicios en las áreas de finanzas, economía y
              sistemas de información financiera nacional e internacional, así
              como publicaciones de carácter económico y financiero.
              </p>
              <p style={{"margin":0}}>GlobalScope, C.A. RIF: J-40718199-8. Todos los derechos reservados
          © {new Date().getFullYear()}.</p>
            <div className="links"> 
             <a alt = "" href = {require("../../assets/pdf/TÉRMINOS Y CONDICIONES DE USO GLOBALSCOPEC.A..pdf")} target = "_blank" > Términos y Condiciones | </a> 
               <a alt="" href={require("../../assets/pdf/POLITICA DE PRIVACIDAD GLOBALSCOPE.pdf")} target="_blank"> Politica y privacidad</a>
               </div>
            </div>
          </MDBCol>
          <MDBCol className="col-footer" md="2">
          <h4> <b>Contacto</b> </h4>

<p>
  +58 (212) 263.4393
</p>
<MDBBtn className="buttonEmail text-center" tag={Link}   to={{
      pathname: `/contactanos`
      }}>
<i class="far fa-envelope"
    ></i>
</MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}