import React from "react";
import { MDBRow, MDBCol, MDBContainer, MDBBtn } from "mdbreact";
import Header from "../components/Headers/headersViews/Header";
import ImgHeader from "../assets/img/Header/Banner_informes.jpg";
import { initGA } from "./helpers/initGA.js";
import ShareFriend from "../components/Others/shareFriends.js";
import client from "./helpers/graphqlEndpointFInanzasDigital";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import { QUERY_DICTAMEN } from "./helpers/graphql/querys";
import Link from 'next/link';

export default function InformeFinanciero({ location }) {
  const id = new URLSearchParams(location.search).get("id");
  React.useEffect(() => {
    initGA();
  }, []);

  const { data } = useQuery(QUERY_DICTAMEN, {
    variables: {
      postId: id
    },
    client
  });
  const [date, setDate] = React.useState();
  const [content, setContent] = React.useState();
  const [scribd, setScribd] = React.useState();

  React.useEffect(() => {
    if (data) {
      var date = new Date(data.postBy.date);
      var options = {
        timeZone: "UTC",
        year: "numeric",
        month: "short",
        day: "numeric"
      };
      setDate(date.toLocaleDateString("es-VE", options));
    }
  }, [data]);

  React.useEffect(() => {
    if (data) {
      let dataa;

      dataa = data.postBy.content.replace(/(?:\r\n|\r|\n)/g, "<br>");

      var Scribd = dataa.substring(
        dataa.indexOf("<iframe"),
        dataa.lastIndexOf("</p>")
      );
      var Content = dataa.substring(
        dataa.indexOf("<p"),
        dataa.lastIndexOf("<iframe")
      );
      setScribd(Scribd);
      setContent(Content);
    }
  }, [data]);
  return (
    <>
      <Header urlImage={ImgHeader} />
      <section className="page-informe">
        <MDBContainer>
          {!data ? (
            <div className="container-load-posts">
              <div className="spinner-border" role="status">
                <span className="sr-only"> Cargando... </span>{" "}
              </div>{" "}
            </div>
          ) : (
            <>
              <MDBRow className="title">
                <h1>{data.postBy.title}</h1>{" "}
              </MDBRow>

              <MDBRow className="date">
                <p> {" " + date} </p>
              </MDBRow>
              <MDBRow>
                <div
                  className="contentHtml"
                  dangerouslySetInnerHTML={{
                    __html: content
                  }}
                />
              </MDBRow>
              <MDBRow className="row-scribd">
                <div
                  className="contentHtml"
                  dangerouslySetInnerHTML={{
                    __html: scribd
                  }}
                />
              </MDBRow>
            </>
          )}
        </MDBContainer>
        <MDBContainer>
          <MDBRow style={{ display: "flex", justifyContent: "space-between" }}>
            <MDBCol>
              <Link href="/informes">
              <MDBBtn
                className="btn-color-primary">
                Otras Notas de Prensa
              </MDBBtn>
              </Link>
            </MDBCol>
            <MDBCol>
              {data && (
                <ShareFriend
                  socialNetworks
                  subject={`${data.postBy.title}`}
                  message={`Consulte más información sobre: "${data.postBy.title}" entrando al siguiente enlace:`}
                  messageSocialNetworks={`Consulte más información sobre: "${data.postBy.title}" entrando al siguiente enlace:`}
                />
              )}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}