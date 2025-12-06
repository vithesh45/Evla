import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {new Date().getFullYear()} Copyright &copy;Elvatech. All Rights Reserved.
    </footer>
  );
}
