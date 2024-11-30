"use client"
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Typewriter from "typewriter-effect";
import "../style/contact.css";

export default function contact() {
  return (
    <div className="background">
      <title>USMAN PORTFOLIO</title>
      <section>
        <section className="custom">
          <div className="custom-container">
            <div className="custom-flex-wrap">
              <div className="custom-responsive-width">
                <h1 className="custom-title">
                  CONTACT ME FOR BUILD YOUR PROJECTS
                </h1>
                <div className="custom-divider"></div>
              </div>
              <p className="custom-text-box">
                These Are All My Personal Acconts,You can Contact Me Any Time
                From These Accounts,
              </p>
            </div>
          </div>
        </section>
        <div className="custom-container2 ">
          <Typewriter
            options={{
              strings: [
                "CONTACT ME ON FACEBOOK",
                "CONTACT ME ON WHATSAPP",
                "CONTACT ME ON INSTAGRAM",
                "CONTACT ME ON LINKEDLN",
                "CONTACT ME ON GMAIL",
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <Link href="https://www.facebook.com/awara.dil.7773631/">
            <div className="custom-card">
              <FaFacebook className="custom-headingf" />
              <span className="custom-textF">FACEBOOK</span>
            </div>
          </Link>
          <div className="custom-cardn">
            <FaWhatsapp className="custom-headingf" />
            <span className="custom-textF">03082949058</span>
          </div>
          <Link href="https://www.instagram.com/?hl=en">
            <div className="custom-cardi">
              <CiInstagram className="custom-headingf" />
              <span className="custom-textF">INSTAGRAM</span>
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/usman-shafiq-ba87462ba/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B4onUWE3RSa2JXjGFDHReaA%3D%3D">
            <div className="custom-cardl">
              <FaLinkedin className="custom-headingf" />
              <span className="custom-textF">LINKELDN</span>
            </div>
          </Link>
          <div className="custom-cardg ">
            <SiGmail className="custom-headingf" />
            <span className="custom-textF">shafiqusman632@gmail.com</span>
          </div>
        </div>
        <p className="custom-textp">THANK YOU FOR VISIT MY PORTFOLIO</p>
      </section>
    </div>
  );}
