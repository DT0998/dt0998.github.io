import React from "react";
import ButtonScrollTop from "../components/buttons/button-scrolltop";
import Footer from "./footer/footer";
import Nav from "../layouts/nav/nav-desktop";

function Layout({ children }) {
  return (
    <React.Fragment>
      <Nav />
      <main>{children}</main>
      <ButtonScrollTop />
      <Footer />
    </React.Fragment>
  );
}

export default Layout;