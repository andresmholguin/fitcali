import logo from "../assets/logo.webp";
export default function Navbar() {
  return (
    <nav
      className="d-flex align-items-center justify-content-center"
      style={{
        height: "100px",
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      <a href="https://www.colboletos.com">
        <img
          src={logo}
          alt="Logo"
          style={{
            maxHeight: "60px",
            width: "auto",
            display: "block",
          }}
        />
      </a>
    </nav>
  );
}
