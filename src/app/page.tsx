"use client";
import Image from "next/image";
import usman from "../app/public/image/usman.jpeg";
import { ImHtmlFive } from "react-icons/im";
import { SiTypescript, SiJavascript, SiNextdotjs } from "react-icons/si";
import { TbBrandCss3 } from "react-icons/tb";
import Typewriter from "typewriter-effect";
import "../app/style/page.css";

export default function Home() {
  return (
    <div className="background">
      <title>USMAN PORTFOLIO</title>

      <section className="sec1">
        <div className="custom-container">
          <div className="responsive-element">
            <Image className="custom-box" src={usman} alt="all project" />
          </div>
          <div className="responsive-layout">
            <h1 className="title-font ">Muhammad Usman ShafiQ</h1>
            <p className="custom-text">
              I am Student of Governer Iniciative-technology Course batch-1
              quarter-2 we are learning Artificial Intelligence Web 3.0
              Metaverse at Governer House Karachi.
            </p>
            <div className="centered-flex">
              <button className="custom-button">MORE INFORMATION</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <section className="custom-body">
          <div className="custom-container">
            <div className="custom-flex-container">
              <div className="custom-element">
                <h1 className="custom-title">My Programming Skills</h1>
                <div className="custom-box1"></div>
              </div>
              <p className="custom-element1">
                I Create Website With These All Programming launguage;
              </p>
            </div>
          </div>
        </section>
        <div className="custom-container1">
          <Typewriter
            options={{
              strings: ["PROGRAMMING LAUNGUAGE"],
              autoStart: true,
              loop: true,
            }}
          />
          <div className="custom-element2">
            <ImHtmlFive className="custom-text22" />
            <span className="custom-text5">HTML</span>
          </div>
          <div className="custom-element3">
            <TbBrandCss3 className="custom-text22" />
            <span className="custom-text5">CSS</span>
          </div>
          <div className="custom-element4">
            <SiTypescript className="custom-text23" />
            <span className="custom-text5">TYPESCRIPT</span>
          </div>
          <div className="custom-element5">
            <SiJavascript className="custom-text22" />
            <span className="custom-text5">JAVASCRIPT</span>
          </div>
          <div className="custom-element6">
            <SiNextdotjs className="custom-text22" />
            <span className="custom-text5">Next.JS</span>
          </div>
        </div>
      </section>
    </div>
  );
}
