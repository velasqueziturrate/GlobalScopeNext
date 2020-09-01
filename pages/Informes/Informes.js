import React, { useState, useEffect } from "react";
import { initGA } from "./helpers/initGA.js";
import ShareFriend from "../components/Others/shareFriends.js";
import { MDBRow, MDBCol, MDBContainer, MDBBtn } from "mdbreact";
import Header from "../components/Headers/headersViews/Header";
import ImgHeader from "../assets/img/Header/Banner_informes.jpg";
import { useQuery } from "@apollo/react-hooks";
import { INFORME_BY_YEAR } from "./helpers/graphql/querys";
import CardInformes2 from "./../components/Cards/CardInforme2";
import client from "./helpers/graphqlEndpointFInanzasDigital";
import Select from "react-select";

export default function Informes() {
  const Informes = ({ informes }) =>
    informes.map(informe => (
      <MDBCol sm="6" md="4" lg="3">
        {" "}
        <CardInformes2 key={informe.id} {...informe} />{" "}
      </MDBCol>
    ));
  React.useEffect(() => {
    initGA();
  }, []);
  const options = [
    { label: 2019, value: 2019 },
    { label: 2018, value: 2018 },
    { label: 2017, value: 2017 },
    { label: 2016, value: 2016 },
    { label: 2015, value: 2015 },
    { label: 2014, value: 2014 }
  ];

  const [first, setFirst] = useState(16);
  const [after, setAfter] = useState();
  const [stack, setStack] = useState([]);

  const [year, setYear] = useState(2019);
  const { data, loading, error } = useQuery(INFORME_BY_YEAR, {
    variables: {
      first: first,
      after: after,
      date: year
    },
    client
  });
  const onChangeYear = e => {
    setYear(e.value);
    setAfter(null);
    setStack([]);
  };
  const nextPage = () => {
    setAfter(data.posts.pageInfo.endCursor);
    stack.push(data.posts.pageInfo.endCursor);
  };
  const prevPage = () => {
    stack.pop();
    setAfter(stack[stack.length - 1]);
  };

  return (
    <>
      <Header urlImage={ImgHeader} />
      <div className="page-informes">
        <MDBContainer>
          <MDBRow>
            <h1 className="upper"> Notas de Prensa </h1>{" "}
          </MDBRow>
          <MDBRow className="bottom">
            <MDBCol sm="3">
              <Select
                options={options}
                onChange={onChangeYear}
                defaultValue={{ label: 2019, value: 2019 }}
              />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            {data && !loading ? (
              <Informes informes={data.posts.nodes} />
            ) : (
              <div className="container-load-posts">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
              </div>
            )}
          </MDBRow>
          <MDBRow style={{ display: "flex", justifyContent: "space-between" }}>
            {data && after && (
              <MDBBtn className="borderRadius" onClick={prevPage}>
                Anterior
              </MDBBtn>
            )}
            {data && data.posts.pageInfo.hasNextPage && (
              <MDBBtn className="borderRadius" onClick={nextPage}>
                Siguiente
              </MDBBtn>
            )}
          </MDBRow>
        </MDBContainer>
        <ShareFriend
          subject={`Global Scope – Notas de Prensa`}
          message="Consulte todas las notas de prensa elaboradas por Global Scope entrando al siguiente enlace: "
        />
      </div>
    </>
  );
}