import React, { useState, useEffect } from "react";
import Recaptcha from "react-recaptcha";
import { useMutation } from "@apollo/react-hooks";
import { MUTATION_CONTACTANOS } from "./helpers/graphql/mutation";
import { initGA } from "./helpers/initGA.js";
import Header from "../components/Headers/headersViews/Header";
import ImgHeader from "../assets/img/Header/Banner_contacto.jpg";
import { Formik } from "formik";

import {
  MDBRow,
  MDBCol,
  MDBAlert,
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter
} from "mdbreact";

export default function Contactanos() {
  const [isVerified, setVerified] = useState(false);

  const [message, setMessage] = useState();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [asunto, setAsunto] = useState("");
  const [email, setEmail] = useState("");
  const [texto, setTexto] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [sendEmail, { data, loading, error, called }] = useMutation(
    MUTATION_CONTACTANOS
  );
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    initGA();
  }, []);

  const RecaptchaLoad = () => {};

  const clear = () => {
    setNombre("");
    setApellido("");
    setAsunto("");
    setEmail("");
    setTexto("");
  };

  useEffect(() => {
    if (error) {
      setMessage({ message: "Error al enviar", isError: false });
      return;
    }
    if (isVerified && !loading && data) {
      setMessage({
        message: "Se envió el correo exitosamente",
        isError: false
      });
      clear();
    }
  }, [data, loading, error, called]);

  

  const verifyCallback = response => {
    if (response) {
      setVerified(true);
    }
  };
  return (
    <>
      <Header urlImage={ImgHeader} />
      <div className="page-contact">
        <MDBContainer>
          <MDBRow>
            <MDBCol sm="12" md="6">
              <div className="info">
                <MDBRow>
                  <h1>Ubícanos</h1>
                </MDBRow>

                <MDBRow>
                  <div className="elementCoordenadas">
                    <span>
                      Avenida Principal de La Castellana <br />
                      Centro Letonia <br />
                      Piso 12, Oficina 126. <br />
                      Caracas - Venezuela <br />
                    </span>
                  </div>
                </MDBRow>
                <MDBRow>
                  <div className="elementCoordenadas">
                    <span>Máster +58 (212) 263.4393</span>
                  </div>
                </MDBRow>
              </div>
            </MDBCol>
            <MDBCol sm="12" md="6" className="col-escribenos">
              <h3> Escríbenos </h3>
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
                  const nombreCompleto = values.nombre + " " + values.apellido;
                  await sendEmail({
                    variables: {
                      message: {
                        from: values.email,
                        nombre: nombreCompleto,
                        subject: values.asunto,
                        text: values.texto
                      }
                    }
                  });
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
                }) =>
                  loading ? (
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
                        <MDBAlert color={"danger"}>{errors.nombre}</MDBAlert>
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
                        <MDBAlert color={"danger"}>{errors.apellido}</MDBAlert>
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
                        <MDBAlert color={"danger"}>{errors.asunto}</MDBAlert>
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
                            height: "3.5rem"
                          }}

                        >
                          <MDBBtn
                            type="submit"
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
    </>
  );
}