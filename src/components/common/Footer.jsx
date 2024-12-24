import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#00c2c7", // Matches navbar color
        color: "white",
        textAlign: "center",
        padding: "20px",
        marginTop: "auto", // Ensures footer sticks to the bottom
        boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)",
        position: "fixed", // Fixes the footer to the bottom of the screen
        bottom: 0, // Sticks it to the bottom
        left: 0, // Ensures it stretches to the full width
        width: "100%", // Ensures it stretches across the entire width of the screen
      }}
    >
      <div style={{ marginBottom: "10px" }}>
        <a
          href="/contact"
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: "bold",
            marginRight: "15px",
          }}
        >
          Contact Us
        </a>
        <a
          href="/about"
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: "bold",
            marginRight: "15px",
          }}
        >
          About
        </a>
        <a
          href="/privacy-policy"
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Privacy Policy
        </a>
      </div>
      <p style={{ margin: 0, fontSize: "14px" }}>
        © {new Date().getFullYear()} B2B App. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

