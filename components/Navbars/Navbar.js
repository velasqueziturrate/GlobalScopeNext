import React, { useState } from "react";
import { Link } from "react-router-dom";
import Link from 'next/link';
import Toggler from "./../Navbars/Toggle.js";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";

export default function Navbar() {
  // Variables useState
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [navbarLogo, setNavbarLogo] = useState(
    require("../../assets/img/Logo/pic_footerlogoGs.png")
  );
  const [collapseOpen, setCollapseOpen] = useState(false);

  // Use effect se carga al iniciar el componente , efectuado cada vez que se renderice el componente
  const closeCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(false);
  };

  return (
    <MDBNavbar className={navbarColor} expand="md">
      {collapseOpen && <div id="bodyClick" onClick={closeCollapse} />}
      <div className="navbar-translate">
        <MDBNavbarBrand id="navbar-brand">
          <MDBNavLink tag={Link} to={{ pathname: `/` }}>
            {" "}
            <img className="GlobalRatingLogo" src={navbarLogo} alt="" />{" "}
          </MDBNavLink>
        </MDBNavbarBrand>

        <Toggler
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(!collapseOpen);
          }}
        ></Toggler>

        <MDBCollapse id="navbarCollapse3" isOpen={collapseOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active>
              <MDBNavLink
                to={{
                  pathname: `/nosotros`
                }}
                tag={Link}
                onClick={closeCollapse}
              >
                Nosotros
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Productos y Servicios</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem
                    className="drop"
                    to={{
                      pathname: `/saif`
                    }}
                    tag={Link}
                    onClick={closeCollapse}
                  >
                    SAIF
                  </MDBDropdownItem>
                  <MDBDropdownItem
                    className="drop"
                    to={{
                      pathname: `/fd`
                    }}
                    tag={Link}
                    onClick={closeCollapse}
                  >
                    Finanzas Digital
                  </MDBDropdownItem>
                  <MDBDropdownItem
                    className="drop"
                    to={{
                      pathname: `/consultoria`
                    }}
                    tag={Link}
                    onClick={closeCollapse}
                  >
                    Consultoría
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                to={{
                  pathname: `/informes`
                }}
                tag={Link}
                onClick={closeCollapse}
              >
                Prensa
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                to={{
                  pathname: `/contactanos`
                }}
                tag={Link}
                onClick={closeCollapse}
              >
                Contáctanos
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </div>
    </MDBNavbar>
  );
}