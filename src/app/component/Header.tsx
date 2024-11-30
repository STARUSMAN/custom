import Link from "next/link";
import Image from "next/image";
import logo from "../public/image/logo.webp"
import "../style/Header.css";

export default function Header() {
  return (
    <div>
      <header className="head">
        <div className="main1">
          <a className="a-1-head">
            <Image className="pic" src={logo} alt="all project" />
            <span className="span-1-head">MY Portfolio</span>
          </a>
          <nav className="nav-1-head">
            <Link className="custom-class" href="/">
              Home
            </Link>
            <Link className="custom-class" href="about">
              About
            </Link>
            <Link className="custom-class" href="contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
