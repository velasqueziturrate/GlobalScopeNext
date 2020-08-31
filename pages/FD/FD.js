import React, { useState, useEffect } from "react";
import Noticias from "./../components/Cards/CardNoticias.js";
import { initGA } from "./helpers/initGA.js";
import ShareFriend from "../components/Others/shareFriends.js";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_NOTICIAS } from "../Pages/helpers/graphql/querys";
import client from "../Pages/helpers/graphqlEndpointFInanzasDigital.js";
import {
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBAlert,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBCardTitle,
  MDBCardGroup,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardFooter
} from "mdbreact";
import Recaptcha from "react-recaptcha";
import { useMutation } from "@apollo/react-hooks";
import { MUTATION_CONTACTANOS } from "./helpers/graphql/mutation";
import { Formik } from "formik";
import Header from "../components/Headers/headersViews/Header";
import ImgHeader from "../assets/img/Header/Banner_finanzas.jpg";

export default function FD() {
  React.useEffect(() => {
    initGA();
  }, []);

  const [isVerified, setVerified] = useState(false);
  const [message, setMessage] = useState();

  const [isOpen, setIsOpen] = useState(false);
  const [sendEmail, { data1, loading1, error1, called }] = useMutation(
    MUTATION_CONTACTANOS
  );
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    initGA();
  }, []);

  const RecaptchaLoad = () => {};

  useEffect(() => {
    if (error1) {
      setMessage({ message: "Error al enviar", isError: false });
      return;
    }
  }, [error1, called]);

  const verifyCallback = response => {
    if (response) {
      setVerified(true);
    }
  };

  const { data, loading, error } = useQuery(QUERY_NOTICIAS, {
    variables: {
      first: 8
    },
    client
  });
  const NNoticias = ({ noticias }) =>
    noticias.map(noticia => (
      <MDBCol key={noticia.postId} sm="3" md="3" lg="3">
        <Noticias {...noticia} />{" "}
      </MDBCol>
    ));

  return (
    <>
      <Header urlImage={ImgHeader} />
      <div className="page-fd">
        <MDBContainer style={{ padding: 0 }} fluid>
          <MDBContainer fluid className="banner">
            <div>
              <MDBRow>
                <MDBCol sm="6">
                  <div className="corner">
                    <h1>
                      <b>Finanzas Digital</b>
                    </h1>
                    <h2>Economía, Finanzas, Tecnología y Negocios.</h2>
                    <p className="gray">
                      Es un portal web especializado en las áreas de economía y
                      finanzas que presenta un compendio de las principales
                      noticias de Venezuela y Latinoamérica que le permiten a
                      nuestros usuarios complementar la información requerida
                      para la toma de decisiones en el ámbito financiero.
                    </p>
                    <p className="gray">
                      Adicionalmente ofrece estadísticas del sistema financiero
                      latinoamericano, calendario de días feriados de la banca y
                      artículos de opinión elaborados por profesionales
                      reconocidos en sus respectivas áreas.
                    </p>
                  </div>
                </MDBCol>
                <MDBCol sm="6" className="col-img">
                  <a
                    href="https://www.finanzasdigital.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <img
                      className="img-banner"
                      alt=""
                      src={require("../assets/img/Header/Periodico.png")}
                    />{" "}
                  </a>
                </MDBCol>
              </MDBRow>
            </div>
          </MDBContainer>
          <h3 className="upper"> Noticias </h3>{" "}
          <MDBRow>
            <MDBContainer>
              {!data ? (
                <div className="container-load-posts">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Cargando...</span>
                  </div>
                </div>
              ) : (
                <MDBRow className="space">
                  {data && <NNoticias noticias={data.posts.nodes} />}
                </MDBRow>
              )}
              <MDBRow className="row-button">
                <MDBBtn className="btn-round btn-color-primary">
                  {" "}
                  Ver más
                </MDBBtn>
              </MDBRow>
            </MDBContainer>
          </MDBRow>
          <div /* className="publicidad" */>
            <h3 className="upper"> Publicidad </h3>{" "}
            <MDBContainer>
              <MDBRow className="space">
                <MDBCol sm="12" md="6" className="info">
                  <div>
                    <MDBRow>
                      <h4> ¿Quieres tener tu publicidad en nuestro portal? </h4>
                    </MDBRow>

                    <MDBRow>
                      <div>
                        <p>
                          Si deseas mayor información, contáctanos a través del
                          siguiente formulario.
                        </p>
                      </div>
                    </MDBRow>
                  </div>
                </MDBCol>
                <MDBCol sm="12" md="5">
                  {message && (
                    <MDBAlert color={message.isError ? "danger" : "info"}>
                      {message.message}
                    </MDBAlert>
                  )}

                  <Formik
                    initialValues={{
                      nombre: "",
                      apellido: "",
                      asunto: "",
                      texto: "",
                      email: ""
                    }}
                    validate={values => {
                      const errors = {};
                      if (!values.email) {
                        errors.email = "Email Requerido";
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                          values.email
                        )
                      ) {
                        errors.email = "Email Inválido";
                      }
                      if (!values.nombre) {
                        errors.nombre = "Nombre Requerido";
                      }
                      if (!values.apellido) {
                        errors.apellido = "Apellido Requerido";
                      }
                      if (!values.asunto) {
                        errors.asunto = "Asunto Requerido";
                      }
                      if (!values.texto) {
                        errors.texto = "Mensaje Requerido";
                      }
                      if (!isVerified) {
                        errors.Recaptcha = "Se require verificar";
                      }
                      return errors;
                    }}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                      setSubmitting(true);
                      if (!isVerified) {
                        setMessage({
                          message: "Verifique no ser un robot",
                          isError: true
                        });
                        return;
                      }
                      const nombreCompleto =
                        values.nombre + " " + values.apellido;
                      const { data } = await sendEmail({
                        variables: {
                          message: {
                            from: values.email,
                            nombre: nombreCompleto,
                            subject: values.asunto,
                            text: values.texto
                          }
                        }
                      });
                      if (data) {
                        setMessage({
                          message: "Se envió el correo exitosamente",
                          isError: false
                        });
                      }
                      setSubmitting(false);
                      resetForm();
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting
                      /* and other goodies */
                    }) =>
                      loading1 ? (
                        <div className="SpinerContain">
                          {" "}
                          <div className="spinner-border" role="status">
                            <span className="sr-only">Cargando...</span>
                          </div>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit}>
                          <div
                            className={
                              values.nombre.length > 0
                                ? "form-group not-empty"
                                : "form-group"
                            }
                          >
                            <input
                              id="nombre"
                              name="nombre"
                              type="text"
                              required
                              autocomplete="off"
                              className="form-control"
                              value={values.nombre}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            <label for="nombre" class="animated-label">
                              Nombre
                            </label>
                          </div>
                          {errors.nombre && touched.nombre && (
                            <MDBAlert color={"danger"}>
                              {errors.nombre}
                            </MDBAlert>
                          )}
                          <div
                            className={
                              values.apellido.length > 0
                                ? "form-group not-empty"
                                : "form-group"
                            }
                          >
                            <input
                              id="apellido"
                              name="apellido"
                              type="text"
                              required
                              autocomplete="off"
                              className="form-control"
                              value={values.apellido}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            <label for="apellido" class="animated-label">
                              Apellido
                            </label>
                          </div>
                          {errors.apellido && touched.apellido && (
                            <MDBAlert color={"danger"}>
                              {errors.apellido}
                            </MDBAlert>
                          )}
                          <div
                            className={
                              values.email.length > 0
                                ? "form-group not-empty"
                                : "form-group"
                            }
                          >
                            <input
                              id="email"
                              type="email"
                              name="email"
                              required
                              autocomplete="off"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="form-control"
                            />
                            <label for="email" class="animated-label">
                              Correo Electrónico
                            </label>
                          </div>
                          {errors.email && touched.email && (
                            <MDBAlert color={"danger"}>{errors.email}</MDBAlert>
                          )}
                          <div
                            className={
                              values.asunto.length > 0
                                ? "form-group not-empty"
                                : "form-group"
                            }
                          >
                            <input
                              id="asunto"
                              name="asunto"
                              type="text"
                              required
                              autocomplete="off"
                              value={values.asunto}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="form-control"
                            />
                            <label for="asunto" class="animated-label">
                              Asunto
                            </label>
                          </div>
                          {errors.asunto && touched.asunto && (
                            <MDBAlert color={"danger"}>
                              {errors.asunto}
                            </MDBAlert>
                          )}
                          <div
                            className={
                              values.texto.length > 0
                                ? "form-group not-empty"
                                : "form-group"
                            }
                          >
                            <textarea
                              id="textArea"
                              type="textarea"
                              name="texto"
                              required
                              value={values.texto}
                              autocomplete="off"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="form-control"
                            />
                            <label for="textArea" class="animated-label">
                              Mensaje
                            </label>
                          </div>
                          {errors.texto && touched.texto && (
                            <MDBAlert color={"danger"}>{errors.texto}</MDBAlert>
                          )}

                          <MDBRow
                            style={{
                              display: "flex",
                              justifyContent: "space-between"
                            }}
                          >
                            <MDBCol sm="3">
                              <div
                                className="recapcha"
                                style={{ transform: "scale(.8)" }}
                              >
                                <Recaptcha
                                  sitekey="6LdzSsMUAAAAADVEN3LuZHfVsGASEGWiXu3Z38Kr"
                                  render="explicit"
                                  onloadCallback={RecaptchaLoad}
                                  verifyCallback={verifyCallback}
                                />
                              </div>
                            </MDBCol>
                            <MDBCol
                              sm="5"
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                height: "3.5rem"
                              }}
                            >
                              <MDBBtn
                                type="submit"
                                size="sm"
                                className="borderRadius"
                                disabled={isSubmitting}
                              >
                                Enviar
                              </MDBBtn>
                            </MDBCol>
                          </MDBRow>
                        </form>
                      )
                    }
                  </Formik>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
        </MDBContainer>
        <ShareFriend
          subject={`Global Scope – Finanzas Digital – Noticias de Economía, Finanzas, Tecnología y Negocios`}
          message="Finanzas Digital es un portal web especializado en las áreas de economía y finanzas que presenta un compendio de las principales noticias de Venezuela y Latinoamérica que le permiten a nuestros usuarios complementar la información requerida para la toma de decisiones en el ámbito financiero.
          Adicionalmente ofrece estadísticas del sistema financiero latinoamericano, calendario de días feriados de la banca y artículos de opinión elaborados por profesionales reconocidos en sus respectivas áreas.
          Consulte más información entrando al siguiente enlace:"
        />
      </div>
    </>
  );
}