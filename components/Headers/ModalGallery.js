import React from "react";
import Carousel from 'react-multi-carousel';
import {
  MDBModalHeader,
  MDBBtn,
  MDBModal as Modal,
  MDBModalBody as Body,
  MDBModalFooter as Footer
} from "mdbreact";
const ModalGallery = ({ urlImg, isOpen, toggle, title }) => {
  return (

    <Modal isOpen={isOpen} toggle={toggle} size="lg" centered>  
    <MDBModalHeader toggle={toggle}></MDBModalHeader>
      <Body>
        <img className="img-fluid" alt="" src={urlImg} />
      </Body>
      {/* <Footer className="footer">{title}</Footer> */}
    </Modal>
    );
};
export default ModalGallery;