import Link from "next/link";

const listStyle = {
  display: "flex",
  justifyContent: "space-around",
  padding: "1rem",
  listStyleType: "none",
  color: "white",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  margin: "0 1rem",
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul style={listStyle}>
        <li>
          <Link style={linkStyle} href="/index">
            Home
          </Link>
        </li>
        <li>
          <Link style={linkStyle} href="/about">
            About
          </Link>
        </li>
        <li>
          <Link style={linkStyle} href="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link style={linkStyle} href="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <style jsx>{`
        .navbar {
          border-bottom: 1.5px solid black;
          border-radius: 10px;
          font-size: 20px;
          position: absolute;
          top: 0;
          width: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
