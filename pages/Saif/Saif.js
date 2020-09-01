import React, { useState, useEffect } from "react";
import ShareFriend from "../components/Others/shareFriends.js";
import Gallery from './../components/Headers/Gallery';
import 'react-multi-carousel/lib/styles.css';
import { initGA } from "./helpers/initGA.js";
import { MDBRow, MDBCol, MDBContainer, MDBBtn, MDBCollapse, MDBSpinner, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBIcon} from "mdbreact";
import Header from "../components/Headers/headersViews/Header";
import Link from 'next/link';
import ImgHeader from "../assets/img/Header/Banner_saif.jpg";
export default function Saif() {
    React.useEffect(() => {
    }, []);

    const [collapseID, setCollapseID] = useState("");

    const toggleCollapse = (collapseiD) => {
        setCollapseID(collapseID !== collapseiD ? collapseiD : "");
    }

    return (
        <>
        <Header urlImage={ImgHeader} />
        <div className="page-saif">
 
          <MDBContainer style={{padding:0}} fluid>
           <MDBContainer fluid  className="banner">
            <MDBRow >               
            <MDBCol sm="5"  className="corner">
           <h1><b>SAIF</b></h1>
           <h2> Sistema Automatizado de Informacion Financiera</h2> 
           <p className="gray">Ofrecemos nuestros servicios basados en esta herramienta que permite el análisis para la evaluación de instituciones que componen el mercado financiero, de capitales y de seguro, local y de los países de Iberoamérica.</p>
           </MDBCol>
               <MDBCol sm="6" className="col-img">
               <img className="img-banner" alt="" src={require("../assets/img/Header/iMac.png")}/>
               </MDBCol>

           </MDBRow> 
       
            </MDBContainer>
            <MDBContainer fluid className="back">
            <MDBRow>
                    <h3 className="upper " >¿Qué es?</h3>
                    <p>
                    Es una herramienta de análisis para la evaluación de información de las instituciones que componen el sistema financiero, de capitales y de seguro, entre otros, de todos los países de Iberoamérica. 
                    </p>
                    <p>
                    El producto combina la calidad de una base de datos histórica de estados financieros e información económica, con la flexibilidad de un sistema desarrollado para lograr los mejores análisis y ejecuciones de sus estrategias de negocios.
                    </p>
                    <p>
                    La información se actualiza constantemente vía Internet tan pronto es publicada por las fuentes de cada país y la suscripción incluye cualquier mejora que se haga sobre el software. 
                    </p>
                    <p>
                    El sistema fue creado en el año 1990, y desde entonces, monitoreamos las necesidades de los analistas financieros, para mantener al SAIF como una herramienta que permite incrementar la competitividad de profesionales que requieren manejar información confiable y oportuna, gracias a un sistema altamente eficiente y amigable, dotado con una poderosa capacidad de análisis, y una gran cantidad de reportes estadísticos.
                    </p>

                </MDBRow>
                </MDBContainer>
                <MDBContainer fluid>
                     
                <MDBRow>
                <MDBContainer fluid className="back paddingBottom self-align-item-left">
               <h4>Galería</h4>
                </MDBContainer>
            <MDBContainer fluid className="gallery">
            <Gallery/>
                </MDBContainer>
                </MDBRow>
                    </MDBContainer>
                <MDBRow>
                <MDBRow className = "borderRadius"
                                onClick = { () => toggleCollapse("util")
                                    }>
                                    <h4> ¿Quiénes lo utilizan? </h4> <MDBIcon icon = {
                                        collapseID !== "util" ? "plus" : "minus"
                                    }/>
                                </MDBRow> <MDBCollapse id = "util"
                                isOpen = {
                                    collapseID
                                }>
                            < MDBContainer fluid className = "margin" >
                                    <p>
                                    SAIF es una herramienta creada para optimizar la competitividad de todos aquellos analistas y profesionales que necesiten contar con información de los mercados financieros, confiable, oportuna y constantemente actualizada. Nuestros clientes son principalmente:
                                    </p> 
                                    <MDBRow className="top">
                                    <ul className='d-block w-100'>
                            <li>Instituciones Financieras</li>
                            <li>Empresas de seguros</li>
                            <li>Fondos de pensiones</li>
                            <li>Casas de bolsa</li>
                            <li>Organismos de supervisión</li>
                            <li>Empresas corporativas</li>
                            <li>Evaluadores de riesgo</li>
                            <li>Consultores</li>
                            <li>Asesores</li>
                            <li>Auditores</li>
                            <li>Instituciones gubernamentales</li>
                            <li>Oficinas de representación de bancos extranjeros</li>
                            </ul>
                            </MDBRow>
                             </MDBContainer>
                    </MDBCollapse> 
                </MDBRow> 
                <MDBRow>
                <MDBRow className="borderRadius"
                        onClick={() => toggleCollapse("contenido")}>               
                <h4>¿Qué contiene?</h4>
                <MDBIcon icon={collapseID !== "contenido" ? "plus" : "minus"} />
                    </MDBRow>
                    <MDBCollapse id="contenido" isOpen={collapseID}>
                        < MDBContainer fluid className = "margin" >
                        <p>                        
                        Una amplia cobertura en series de datos de indicadores asociados a las principales variables financieras, económicas y sectoriales.
                        </p>
                        <p>
                        Estados financieros de empresas pertenecientes a diferentes sectores en diversos países de Latinoamérica:   
                        </p>
                        <MDBRow className="top">
                        <MDBCol md="3" className="margin2">
                        <h5>Argentina:</h5>
                        <ul>
                            <li>Instituciones Financieras</li>
                        </ul>
                        <h5>Bolivia:</h5>
                        <ul>
                            <li>Instituciones Financieras</li>
                            <li>Otras Instituciones</li>
                            <li>Instituciones Financieras Desagregado</li>
                            <li>Emisores de Valores</li>
                            <li>Finrural</li>
                        </ul>
                        <h5>Brasil:</h5>
                        <ul>
                            <li>Balancetes</li>
                        </ul>
                        <h5>Chile:</h5>
                        <ul>
                            <li>Instituciones Financieras</li>
                        </ul>
                        <h5> Colombia:</h5>
                        <ul>
                            <li>Indicadores Gerenciales NIIF</li>
                            <li>Instituciones Financieras</li>
                            <li>Intermediarios de Valores</li>
                        </ul>
                        </MDBCol>
                        <MDBCol md="3" className="space2">
                        <h5> Costa Rica:</h5>
                        <ul>
                            <li>Balance de Situación</li>
                            <li>Balanza de Comprobación</li>
                            <li>Pensiones</li>
                        </ul>
                        <h5>Ecuador:</h5>
                        <ul>
                            <li>Instituciones Financieras</li>
                        </ul>
                        <h5>El Salvador:</h5>
                        <ul>
                            <li>Instituciones Financieras</li>
                            <li>Seguros</li>
                        </ul>
                        <h5> Honduras:</h5>
                        <ul>
                            <li>Instituciones Financieras</li>
                        </ul>
                        <h5>México:</h5>
                        <ul>
                            <li>Banca de Desarrollo</li>
                            <li>Banca Múltiple</li>
                        </ul>
                        </MDBCol>
                        <MDBCol md="3" className="space2">
                        <h5> Nicaragua:</h5>
                        <ul>
                            <li>Compañías de Seguro</li>
                            <li>Instituciones Financieras</li>
                        </ul>
                        <h5> Panamá:</h5>
                        <ul>
                            <li>Balance de Situación Consolidado</li>
                        </ul>
                        <h5> Paraguay:</h5>
                        <ul>
                            <li>Instituciones Financieras</li>
                            <li>Almacenes Generales de Depósito</li>
                            <li>Casas de Cambio</li>
                        </ul>
                        <h5>Perú:</h5>
                        <ul>
                            <li>AFP</li>
                            <li>Compañías de Seguro</li>
                            <li>Agentes de Bolsa</li>
                            <li>Instituciones Financieras</li>
                        </ul>
                        </MDBCol>
                        <MDBCol md="3" className="space2">
                        <h5> República Domicana:</h5>
                        <ul>
                            <li>Instituciones Financieras</li>
                            <li>Puestos de Bolsa</li>
                            <li>AFP</li>
                        </ul>
                        <h5> Uruguay:</h5>
                        <ul>
                            <li>Instituciones Financieras</li>
                            <li>Seguros</li>
                        </ul>
                        <h5>Venezuela:</h5>
                        <ul>
                            <li>Instituciones Financieras</li>
                            <li>FONPYME</li>
                            <li>BCV</li>
                            <li>Seguros</li>
                            <li>Operadores de Valores</li>                          
                        </ul>
                        </MDBCol>
                        </MDBRow>
                     </MDBContainer>
                     </MDBCollapse>
                   
                </MDBRow>
                <MDBRow>
                <MDBRow className="borderRadius"
                        onClick={() => toggleCollapse("funcion")}>               
                <h4>¿Qué permite hacer?</h4>
                <MDBIcon icon={collapseID !== "funcion" ? "plus" : "minus"} />
                
                    </MDBRow>
                        <MDBCollapse id="funcion" isOpen={collapseID}>
                < MDBContainer fluid className="margin">
                <p>
                La flexibilidad del SAIF facilita al usuario el análisis detallado de cualquier institución o grupo de instituciones, a través de las siguientes funcionalidades:
                </p> 
                <MDBRow className="top">
                <ul>
                    <li>Análisis de Benchmarking.</li>
                    <li>Formulación de sus propios Indicadores Financieros en base al plan de cuentas suministrado para cada sector.</li>
                    <li>Generación de diferentes Estratos o Peer Groups de aquellas instituciones de interés del usuario, para obtener un balance combinado de la muestra, así como también, la participación de cada institución en el grupo de análisis.</li>
                    <li>Evaluar las tendencias del mercado mediante el análisis de una o varias instituciones o de un estrato, a través de la evolución histórica de los estados financieros, indicadores financieros, funciones e indicadores económicos. Adicionalmente a la presentación de los saldos, incluye análisis vertical, estructura de las cuentas o participación en un estrato.</li>
                    <li>Comparación simultánea de los estados financieros o los indicadores financieros de un grupo de instituciones.</li>
                    <li>Determinación de la posición relativa de cada institución dentro de una muestra, tomando como referencia una cuenta o un indicador financiero.</li>
                    <li>Construcción de Matrices de Análisis, de acuerdo al criterio del usuario, combinando simultáneamente cuentas, indicadores financieros y funciones, tales como, promedio y crecimiento en un período determinado para una cuenta o indicador financiero, factor anualizador y exponenciación, entre otros.</li>
                    <li>Graficación de todas las series de datos existente en el sistema: cuentas, indicadores financieros, funciones  e indicadores económicos, para una o varias instituciones.</li>
                    <li>Presentación del origen y aplicación de los fondos de una o varias instituciones, a partir de sus estados financieros.</li>
                    <li>Diseño de modelos de calificación de riesgo de las instituciones, realizado por el usuario según su propia metodología, para evaluar el desempeño de las instituciones, a través del establecimiento de criterios de alerta temprana y aplicando diferentes métodos estadísticos para la asignación de valores: deciles, cuartiles, funciones (promedio y desviaciones estándar), posiciones o porcentajes, que permitan obtener un scoring crediticio.</li>
                    <li>Creación de Planes de Cuentas estándar para realizar análisis y comparaciones entre instituciones de diversos países o distintas formas de presentación en sus estados financieros.</li>
                    <li>Diseño de Árboles de Rentabilidad.</li>
                            </ul>
                            </MDBRow>
                            </MDBContainer>
                            < MDBContainer fluid className = "margin" >
                                
                                < h5> Ventajas </h5>
                                <MDBRow>
                                <ul>
                                    <li>La base de datos está alojada en nuestro servidor de internet, localizado en Florida - Estados Unidos.</li>
                                    <li>Los analistas podrán tener el SAIF instalado en varios equipos y aún así compartir información, sin importar el país en donde se encuentre.</li>
                                    <li>Fácil de instalar y dar mantenimiento.</li>
                                    <li>Soporte constante sobre el uso de la herramienta.</li>
                                    <li>Información validada y actualizada constantemente.</li>
                                </ul>
                                </MDBRow>
                                </MDBContainer>
                    </MDBCollapse>
                </MDBRow>
                <MDBRow >
                <Link href="/descargar">
                <MDBBtn     className="descargar">
                    Descarga <b>SAIF</b> <span>web</span><i class="fas fa-arrow-circle-down icon"></i>
                </MDBBtn>
                </Link>
                </MDBRow> 
          </MDBContainer>
          <ShareFriend
          subject={`Global Scope – Sistema Automatizado de Información Financiera S.A.I.F.`}
          message="Es una herramienta de análisis para la evaluación de información de las instituciones que componen el sistema financiero, de capitales y de seguro, entre otros, de todos los países de Iberoamérica.
          El producto combina la calidad de una base de datos histórica de estados financieros e información económica, con la flexibilidad de un sistema desarrollado para lograr los mejores análisis y ejecuciones de sus estrategias de negocios. Consulte más información entrando al siguiente enlace:"
        />
        </div>
      </>
    );
}