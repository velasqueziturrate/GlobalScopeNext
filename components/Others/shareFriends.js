import React, { useState } from "react";
import {
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter
} from "mdbreact";

import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";

export default function ShareFriend({
  socialNetworks,
  subject,
  message,
  messageSocialNetworks
}) {
  const url = window.location.href;
  return (
    <>
      <MDBContainer className="rowCompartir">
        <EmailShareButton
          subject={subject}
          body={message}
          url={window.location.href}
          openWindow
        >
          <MDBBtn>
            <MDBIcon icon="envelope" size="lg" />
          </MDBBtn>
        </EmailShareButton>
        {socialNetworks && (
          <>
            <FacebookShareButton
              url={window.location.href}
              quote={messageSocialNetworks}
            >
              <MDBBtn>
                <MDBIcon fab icon="facebook-f" size="lg" />
              </MDBBtn>
            </FacebookShareButton>
            <TwitterShareButton
              title={messageSocialNetworks}
              url={window.location.href}
            >
              <MDBBtn>
                <MDBIcon fab icon="twitter" size="lg" />
              </MDBBtn>
            </TwitterShareButton>
            <WhatsappShareButton
              url={window.location.href}
              separator=" "
              title={messageSocialNetworks}
            >
              <MDBBtn>
                <MDBIcon fab icon="whatsapp" size="lg" />
              </MDBBtn>
            </WhatsappShareButton>
          </>
        )}
      </MDBContainer>
    </>
  );
}