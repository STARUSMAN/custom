import Image from "next/image";
import icon from "../public/image/face.png"
import whatsapp2 from "../public/image/whatsapp2.webp"
import insta from "../public/image/Insta.png"
import linkl from "../public/image/linkl.png"
import Gmail from "../public/image/Gmail.png"
import "../style/Footer.css"


export default function Footer() {
  return (
    <div>
      <footer className="custom-element31">
        <div className="custom-container31">
          <a className="custom-title31">
            <span className="custom-text31">CONTACT ME ON THESE SITES</span>
          </a>
          <nav className="custom-flex31">
            <Image className="f1" src={icon} alt="all project" />
            <Image
              className="custom-size31" src={whatsapp2} alt="all project"  /> 
            <Image className="custom-size31" src={insta} alt="all project" />
            <Image className="custom-size31" src={linkl} alt="all project" />
            <Image className="custom-size31" src={Gmail} alt="all project" />
          </nav>
        </div>
      </footer>
    </div>
  );
}
