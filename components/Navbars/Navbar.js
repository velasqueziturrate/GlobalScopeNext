import React, { useState } from "react";
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

  // Use effect se carga al iniciar el componente, efectuado cada vez que se renderice el componente
  const closeCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(false);
  };

  return (
    <MDBNavbar className={navbarColor} expand="md">
      {collapseOpen && <div id="bodyClick" onClick={closeCollapse} />}
      <div className="navbar-translate">
        <MDBNavbarBrand id="navbar-brand">
            <Link href="/">
              <MDBNavLink>
              <img className="GlobalRatingLogo" src={navbarLogo} alt="logo" />
              </MDBNavLink>
            </Link>
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
                <Link href="/nosotros">
                  <MDBNavLink onClick={closeCollapse}>
                    Nosotros
                  </MDBNavLink>
                </Link>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Productos y Servicios</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem
                    className="drop"
                    onClick={closeCollapse}>
                    <Link href="/saif">
                      SAIF
                    </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem
                    className="drop"
                    onClick={closeCollapse}>
                    <Link href="/fd">
                      Finanzas Digital
                    </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem
                    className="drop"
                    onClick={closeCollapse}>
                    <Link href="/consultoria">
                      Consultoría
                    </Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <Link href="/informes">
                <MDBNavLink
                onClick={closeCollapse}>
                Prensa
                </MDBNavLink>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link href="/contactanos">
                <MDBNavLink
                onClick={closeCollapse}>Contáctanos
                </MDBNavLink>
              </Link>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </div>
    </MDBNavbar>
  );
}