import React from "react";

function Footer() {
  const devYear = new Date("2020").getFullYear();
  const thisYear = new Date().getFullYear();
  let year;

  devYear >= thisYear ? (year = devYear) : (year = `${devYear} - ${thisYear}`);

  return (
    <footer
      className="container-fluid"
      // style={{
      //   color: "white",
      //   textAlign: "center",
      //   background: "#1F568B",
      //   padding: "18px",
      //   marginTop: "60px",
      //   position: "relative"
      // }}
    >
      &copy; Copyright <span className="text-warning">{year}</span> by&nbsp;
      <a href="https://github.com/manhhust/" className="text-light">
        manhhust
      </a>. Please reference the Terms of Use and the Supplemental Terms for specific information related to your state.<br/>
      Your use of this website constitutes acceptance of the Terms of Use, Supplemental Terms, Privacy Policy and Cookie Policy. Do Not Sell My Personal Information
    </footer>
  );
}

export default Footer;