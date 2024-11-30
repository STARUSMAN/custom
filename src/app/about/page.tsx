"use client"
import Link from "next/link";
import Image from "next/image";
import calculator from "../public/image/calculator.png";
import numbergame from "../public/image/numbergame.webp";
import convertor from "../public/image/currency-converter.png";
import atm from "../public/image/atm.png";
import wordscounter from "../public/image/wordscounter.png";
import todos from "../public/image/todos.jpg";
import git from "../public/image/git.png";
import vercel from "../public/image/logo-vercel.svg";
import "../style/about.css";


export default function about() {
  return (
    <div className="background">
      <title>USMAN PORTFOLIO</title>
      <section className="custom-styleA">
        <div className="custom-containerA">
          <div className="custom-textA">
            <h1 className="custom-titleA">PROJECT FEATURES & COMMANDS</h1>
            <p className="custom-textB ">
              Explore the essential features of each typescript project and
              easily run them using npx commands provided below:
            </p>
          </div>
          <div className="custom-flex-containerB">
            <div className="custom-paddingB">
              <div className="custom-flexC">
                <svg
                  className="c-1-about"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>

                <span className="title-fontA">
                  npx star-usman-simple-calculator
                  <Image
                    className="custom-boxA"
                    src={calculator}
                    alt="all project"
                  />
                </span>
              </div>
            </div>
            <div className="custom-paddingB">
              <div className="custom-flexC">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="c-1-about"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-fontA">
                  npx star-convertor-maching(currency)
                  <Image
                    className="custom-boxA"
                    src={convertor}
                    alt="all project"
                  />
                </span>
              </div>
            </div>
            <div className="custom-paddingB">
              <div className="custom-flexC">
                <svg
                  className="c-1-about"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-fontA">
                  npx game-star-usman
                  <Image
                    className="custom-boxA"
                    src={numbergame}
                    alt="all project"
                  />
                </span>
              </div>
            </div>
            <div className="custom-paddingB">
              <div className="custom-flexC">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="c-1-about"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-fontA">
                  npx star-usman-atm
                  <Image className="custom-boxA" src={atm} alt="all project" />
                </span>
              </div>
            </div>
            <div className="custom-paddingB">
              <div className="custom-flexC">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="c-1-about"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-fontA">
                  npx star-usman-word-counter
                  <Image
                    className="custom-boxA"
                    src={wordscounter}
                    alt="all project"
                  />
                </span>
              </div>
            </div>
            <div className="custom-paddingB">
              <div className="custom-flexC">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="c-1-about"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-fontA">
                  npx todos-list-star-usman
                  <Image
                    className="custom-boxA"
                    src={todos}
                    alt="all project"
                  />
                </span>
              </div>
            </div>
          </div>
          <button className="custom-button9">
            <Image className="custom-size9" src={git} alt="all project" />
            <Link href="https://github.com/STARUSMAN">
              <span className="custom-flex-container9">
                <span className="custom-text9">GIT HUB</span>
                <span className="custom-title9">@STARUSMAN</span>
              </span>
            </Link>
          </button>
        </div>
      </section>
      <section className="custom-sec2">
        <div className="custom-containersec2">
          <div className="custom-textsec2">
            <h1 className="custom-titlesec2">CREATE RESUME BUILDER</h1>
            <p className="custom-textsec21">
              I CREATE FOUR TYPE RESUME BUILDER WITH HTML , CSS , TYPESCRIPT
              compile with JAVASCRIPT.
            </p>
            <p className="custom-stylesec2">CLICK & CHECK</p>
          </div>
          <div className="custom-flex-containerc">
            <div className="custom-boxsec2">
              <div className="custom-flex-boxsec2">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="custom-iconsec2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="custom-title23">
                  <Link
                    className="text33"
                    href="https://milestone2-by-starusman.vercel.app/"
                  >
                    NO 1 Static Resume Builder by USMAN
                  </Link>
                </span>
              </div>
            </div>
            <div className="custom-boxsec2">
              <div className="custom-flex-boxsec2">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="custom-iconsec2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="custom-title23">
                  <Link
                    className="text33"
                    href="https://milestone3bystarusman.vercel.app/"
                  >
                    NO 2 Dynamic Resume Builder by USMAN
                  </Link>
                </span>
              </div>
            </div>
            <div className="custom-boxsec2">
              <div className="custom-flex-boxsec2">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="custom-iconsec2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="custom-title23">
                  <Link
                    className="text33"
                    href="https://milestone4bystarusman.vercel.app/"
                  >
                    NO 3 Editable Resume Builder by USMAN
                  </Link>
                </span>
              </div>
            </div>
            <div className="custom-boxsec2">
              <div className="custom-flex-boxsec2">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="custom-iconsec2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="custom-title23">
                  <Link
                    className="text33"
                    href="https://milestone5-eta-mocha.vercel.app/"
                  >
                    Unique URL, Download with PDF, Shareable link Resume Builder
                    by USMAN
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <button className="custom-buttonsec21">
            <Image
              className="custom-sizesec21"
              src={vercel}
              alt="all project"
            />
            <Link href="https://vercel.com/starusmans-projects">
              <span className="custom-container22">
                <span className="custom-textsec22">VERCEL</span>
                <span className="custom-title22">@STARUSMAN</span>
              </span>
            </Link>
          </button>
        </div>
      </section>
    </div>
  );}