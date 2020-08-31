import React, { useState, useEffect } from "react";
import {
  MDBCardTitle,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardHeader,
  MDBCardText,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter
} from "mdbreact";

export default function CardNoticias({
  postId,
  featuredImage,
  date,
  title,
  content
}) {
  const [isLoading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [datee, setDate] = useState("");
  const [content_, setContent] = useState("");
  const [dateFull, setDateFull] = useState("");
  useEffect(() => {
    if (featuredImage) {
      setLoading(false);
      var date_ = new Date(date);
      const year = date_.getFullYear();
      const day = date_.getDate();
      var month = [];
      month[0] = "Ene.";
      month[1] = "Feb.";
      month[2] = "Mar.";
      month[3] = "Abr.";
      month[4] = "May.";
      month[5] = "Jun.";
      month[6] = "Jul.";
      month[7] = "Ago.";
      month[8] = "Sep.";
      month[9] = "Oct.";
      month[10] = "Nov.";
      month[11] = "Dic.";
      var n = month[date_.getMonth()];
      setDate({ day: day, month: n, year });
      var date__ = new Date(date);
      var options = {
        timeZone: "UTC",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      setDateFull(date__.toLocaleDateString("es-VE", options));
      setContent(content.replace(/(?:\r\n|\r|\n)/g, "<br>"));
      //var options = { year: "numeric", month: "long", day: "numeric"};
    }
  }, [featuredImage, date]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return isLoading ? null : (
    <>
      <MDBCard className="card-noticia" onClick={toggle}>
        {" "}
        {/* 
            <div className="date">
              <span className="month">  {datee.month} </span> 
              <br/>
              <span className="day">  {datee.day} </span> 
              </div>
         */}
        <MDBCardImage
          className="img-fluid"
          src={featuredImage.sourceUrl}
          waves
        />
        <MDBCardBody>
          <p className="date">
            {" "}
            {datee.month + " " + datee.day + ", " + datee.year}{" "}
          </p>
          <MDBCardTitle>
            {" "}
            {title.replace("&#8221;", '"').replace("&#8220;", '"')}{" "}
          </MDBCardTitle>
        </MDBCardBody>
      </MDBCard>

      <MDBModal isOpen={isOpen} toggle={toggle} size="lg">
        <MDBModalHeader toggle={toggle}> </MDBModalHeader>
        <MDBModalBody>
          <div style={{ textAlign: "left" }}>
            <h3 className="modalNoticia">
              {" "}
              {title.replace("&#8221;", '"').replace("&#8220;", '"')}{" "}
            </h3>
          </div>
          <div class="scrollbar" id="style-2">
            <div className="date modalNoticia">
              <span> {datee.month + " " + datee.day + ", " + datee.year}</span>
            </div>

            <div className="content">
              <div
                className="contentHtml modalNoticia"
                dangerouslySetInnerHTML={{ __html: content_ }}
              />
            </div>
          </div>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn className="btn-invisible color" onClick={toggle}>
            Cerrar
          </MDBBtn>
          <MDBBtn
            href={"https://www.finanzasdigital.com/?p=" + postId}
            target="_blank"
            className="btn-invisible color"
            onClick={toggle}
          >
            Leer más en Finanzas Digital
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </>
  );
}