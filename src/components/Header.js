import React from "react";
import logo from "../images/Logo.svg";

function Header() {
  return (
    <header>
      <meta
        name="description"
        content="Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist"
      />
      <meta name="og:title" content="Little Lemon" />
      <meta
        name="og:description"
        content="Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist"
      />
      <meta name="og:image" content={logo} />
    </header>
  );
}

export default Header;
