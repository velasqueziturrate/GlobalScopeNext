import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  const [datee, setDate] = useState("");
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
    }
  }, [featuredImage, date]);

  return isLoading ? null : (
    <MDBCard
      className="card-informe"
      tag={Link}
      to={{
        pathname: "/informe",
        search: `?id=${postId}`
      }}
    >
      {" "}
      {/* 
            <div className="date">
              <span className="month">  {datee.month} </span> 
              <br/>
              <span className="day">  {datee.day} </span> 
              </div>
         */}
      <MDBCardImage className="img-fluid" src={featuredImage.sourceUrl} waves />
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
  );
}