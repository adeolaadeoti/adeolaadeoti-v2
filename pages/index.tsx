import React, { useState } from "react";
import Head from "next/head";
import { Navigation } from "../components/Navigation/Navigation";

interface indexProps {}

const locomotiveScroll =
  typeof window !== `undefined` ? require("locomotive-scroll").default : null;

const hoverEffect =
  typeof window !== `undefined` ? require("hover-effect").default : null;

const index: React.FC<indexProps> = ({}) => {
  const [speakerState, setSpeakerState] = useState("muted");
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);

  const refScroll = React.useRef(null);
  let lscroll: any;

  React.useEffect(() => {
    if (!refScroll.current) return;
    // @ts-ignore
    lscroll = new locomotiveScroll({
      el: refScroll.current,
      smooth: true,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    // update locomotive scroll
    window.addEventListener("load", (event: any) => {
      let image = document.querySelector("img");
      let isLoaded = image.complete && image.naturalHeight !== 0;
      lscroll.update();
    });

    // image hover effect
    Array.from(document.querySelectorAll(".project-card__middle")).forEach(
      (el: any) => {
        const imgs: any = Array.from(el.querySelectorAll("img"));
        new hoverEffect({
          parent: el,
          intensity: el.dataset.intensity || undefined,
          speedIn: el.dataset.speedin || undefined,
          speedOut: el.dataset.speedout || undefined,
          easing: el.dataset.easing || undefined,
          hover: el.dataset.hover || undefined,
          image1: imgs[0].getAttribute("src"),
          image2: imgs[1].getAttribute("src"),
          displacementImage: el.dataset.displacement,
        });
      }
    );

    // header cursor
    const cursor = document.querySelector(".cursor");
    window.onmousemove = (e) => {
      cursor.setAttribute("style", `top: ${e.pageY}px; left: ${e.pageX}px;`);
    };
  }, []);

  function handleSpeaker() {
    if (speakerState === "muted") {
      setSpeakerState("unmuted");
    } else {
      setSpeakerState("muted");
    }
  }

  function toggleBodyScroll(isToggleOpen: boolean) {
    if (isToggleOpen === false) {
      setIsToggleOpen(true);
    } else if (isToggleOpen === true) {
      setIsToggleOpen(false);
    }
  }

  return (
    <>
      <div id="menu-target" data-scroll-container ref={refScroll}>
        <Head>
          <title>Adeola Adeoti &mdash; Frontend Devloper</title>
          <link rel="icon" href="svg/favicon.svg" />
        </Head>
        <div className="cursor"></div>
        <Navigation
          isOpen={isToggleOpen}
          toggleOpen={() => toggleBodyScroll(isToggleOpen)}
        />
        <div className="header-wrapper">
          <header className="header">
            <div className="header__hero">
              <div className="header__hero--heading">
                <span>turning ideas into </span> <br />
                <span>real life </span>
                <span className="header__hero--heading-gradient">products</span>
                <br />
                <span>is my calling.</span>
              </div>
              <a
                data-scroll-to
                className="header__hero--cta"
                href="#sectionProjects"
              >
                VIEW PROJECTS
              </a>
            </div>
          </header>
          <div className="header__footer">
            <div className="header__footer--left">
              <div className="speaker">
                <div
                  onClick={handleSpeaker}
                  className={`${"speaker__toggle"} ${
                    speakerState === "unmuted"
                      ? `${"speaker__toggle--anim"}`
                      : ``
                  }`}
                >
                  &nbsp;
                </div>
                <div className="speaker__muted">
                  <img src="svg/muted.svg" alt="muted icon" />
                </div>
                <div className="speaker__unmuted">
                  <svg
                    width="14"
                    height="11"
                    viewBox="0 0 15 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.599976"
                      y="1.06665"
                      width="1.4"
                      height="10"
                      fill="#F2F2F2"
                      className="rect1-anim"
                    />
                    <rect
                      x="9"
                      y="1.06665"
                      width="1.4"
                      height="10"
                      fill="#F2F2F2"
                      className="rect2-anim"
                    />
                    <rect
                      x="4.79999"
                      y="1.06665"
                      width="1.4"
                      height="10"
                      fill="#F2F2F2"
                      className="rect3-anim"
                    />
                    <rect
                      x="13.2"
                      y="1.06665"
                      width="1.4"
                      height="10"
                      fill="#F2F2F2"
                      className="rect4-anim"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="header__footer--right">
              <a href="https://github.com/adeolaadeoti" target="_blank">
                👾 GH
              </a>
              <a href="https://twitter.com/adeolajs" target="_blank">
                🐦 TW
              </a>
              <a href="https://www.linkedin.com/in/adeoladev" target="_blank">
                💼 LD
              </a>
              <a href="https://www.instagram.com/adeolaadeoti_" target="_blank">
                {" "}
                📸 IN
              </a>
            </div>
          </div>
        </div>
        <main className="container">
          <p className="about-text">
            Hello stranger! 👋, my name is adeola and I am a frontend engineer,
            passionate <br /> about digital products that help people experience
            everyday life, not endure it.
          </p>
          <section id="sectionProjects" className="section-projects">
            <h1 className="heading-1">
              <span>Yeah, I work hard </span> <small>💼</small>
            </h1>
            <p className="paragraph">
              Each project is unique. Here are some of my works.
            </p>

            <div className="project-card">
              <div className="project-card__left">
                <h4 className="heading-4">
                  NEXT JS, LOCOMOTIVE SCROLL, FRAMER MOTION
                </h4>
              </div>
              <div
                className="project-card__middle"
                data-displacement="webp/myDistorsionImage.webp"
                data-intensity="0.2"
                data-speedIn="1.6"
                data-speedOut="1.6"
              >
                <img src="webp/alexxandria-1.webp" alt="alexxandria model" />
                <img src="webp/alexxandria-2.webp" alt="alexxandria logo" />
              </div>
              <div className="project-card__right">
                <h2
                  data-scroll
                  data-scroll-offset="35%"
                  data-scroll-repeat={true}
                  data-scroll-class="alexxandria-anim"
                  className="heading-2"
                >
                  Alexxandria
                  <br /> Forque
                </h2>
                <a href="#" className="project-card__link">
                  VISIT THE WEBSITE
                </a>
                <div className="project-card__socials">
                  <a href="#">
                    <img src="svg/dribble.svg" alt="dribble icon" />
                  </a>
                  <a href="#">
                    <img src="svg/github.svg" alt="github icon" />
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card__left">
                <h4 className="heading-4">REACT JS, FRAMER MOTION</h4>
              </div>
              <div
                className="project-card__middle"
                data-displacement="webp/myDistorsionImage.webp"
                data-intensity="0.2"
                data-speedIn="1.6"
                data-speedOut="1.6"
              >
                <img src="webp/pixelchef-1.webp" alt="pixelchef" />
                <img src="webp/pixelchef-2.webp" alt="pixelchef logo" />
              </div>
              <div className="project-card__right">
                <h2
                  data-scroll
                  data-scroll-offset="35%"
                  data-scroll-repeat={true}
                  data-scroll-class="pixelchef-anim"
                  className="heading-2"
                >
                  PixelChef
                </h2>
                <a href="#" className="project-card__link">
                  VISIT THE WEBSITE
                </a>
                <div className="project-card__socials">
                  <a href="#">
                    <img src="svg/dribble.svg" alt="dribble icon" />
                  </a>
                  <a href="#">
                    <img src="svg/github.svg" alt="github icon" />
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card__left">
                <h4 className="heading-4">
                  NEXT JS, LOCOMOTIVE SCROLL, FRAMER MOTION
                </h4>
              </div>
              <div
                className="project-card__middle"
                data-displacement="webp/myDistorsionImage.webp"
                data-intensity="0.2"
                data-speedIn="1.6"
                data-speedOut="1.6"
              >
                <img src="webp/heatrow-1.webp" alt="heatrow" />
                <img src="webp/heatrow-2.webp" alt="heatrow logo" />
              </div>
              <div className="project-card__right">
                <h2
                  data-scroll
                  data-scroll-offset="35%"
                  data-scroll-repeat={true}
                  data-scroll-class="heatrow-anim"
                  className="heading-2"
                >
                  Heatrow
                  <br /> Estate
                </h2>
                <a href="#" className="project-card__link">
                  VISIT THE WEBSITE
                </a>
                <div className="project-card__socials">
                  <a href="#">
                    <img src="svg/dribble.svg" alt="dribble icon" />
                  </a>
                  <a href="#">
                    <img src="svg/github.svg" alt="github icon" />
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card__left">
                <h4 className="heading-4">HTML, SCSS, JAVASCRIPT, GSAP</h4>
              </div>
              <div
                className="project-card__middle"
                data-displacement="webp/myDistorsionImage.webp"
                data-intensity="0.2"
                data-speedIn="1.6"
                data-speedOut="1.6"
              >
                <img src="webp/adeola-1.webp" alt="adeola model" />
                <img src="webp/adeola-2.webp" alt="adeola logo" />
              </div>
              <div className="project-card__right">
                <h2
                  data-scroll
                  data-scroll-offset="35%"
                  data-scroll-repeat={true}
                  data-scroll-class="adeola-anim"
                  className="heading-2"
                >
                  AdeolaAdeoti
                  <br /> version 1
                </h2>
                <a href="#" className="project-card__link">
                  VISIT THE WEBSITE
                </a>
                <div className="project-card__socials">
                  <a href="#">
                    <img src="svg/dribble.svg" alt="dribble icon" />
                  </a>
                  <a href="#">
                    <img src="svg/github.svg" alt="github icon" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section
            data-scroll
            data-scroll-offset="35%"
            data-scroll-repeat={true}
            data-scroll-class="section-reviews__bg"
            className="section-reviews"
          >
            <div className="section-reviews__top">
              <h1 className="heading-1">
                <span>Mmmm, a little brag </span> <small>😊</small>
              </h1>
              <p className="paragraph paragraph__sub">
                What people are saying about my last portfolio
              </p>
            </div>
            <div className="section-reviews__bottom">
              <div className="section-reviews__bottom-wrapper review-card__anim1">
                <div className="review-card">
                  <div className="review-card__top">
                    <div className="review-card__top--left">
                      <p className="review-card__p">dodo activist</p>
                      <h3 className="review-card__h3">@prollyadeola</h3>
                    </div>
                    <div className="review-card__top--right">
                      <img src="svg/twitter.svg" alt="twitter icon" />
                    </div>
                  </div>
                  <div className="review-card__bottom">
                    <h2 className="review-card__h2">
                      This is awesome man 🔥🔥☺️
                    </h2>
                  </div>
                </div>
                <div className="review-card">
                  <div className="review-card__top">
                    <div className="review-card__top--left">
                      <p className="review-card__p">dodo activist</p>
                      <h3 className="review-card__h3">@prollyadeola</h3>
                    </div>
                    <div className="review-card__top--right">
                      <img src="svg/twitter.svg" alt="twitter icon" />
                    </div>
                  </div>
                  <div className="review-card__bottom">
                    <h2 className="review-card__h2">
                      This is awesome man 🔥🔥☺️
                    </h2>
                  </div>
                </div>
                <div className="review-card">
                  <div className="review-card__top">
                    <div className="review-card__top--left">
                      <p className="review-card__p">dodo activist</p>
                      <h3 className="review-card__h3">@prollyadeola</h3>
                    </div>
                    <div className="review-card__top--right">
                      <img src="svg/twitter.svg" alt="twitter icon" />
                    </div>
                  </div>
                  <div className="review-card__bottom">
                    <h2 className="review-card__h2">
                      This is awesome man 🔥🔥☺️
                    </h2>
                  </div>
                </div>
                <div className="review-card">
                  <div className="review-card__top">
                    <div className="review-card__top--left">
                      <p className="review-card__p">dodo activist</p>
                      <h3 className="review-card__h3">@prollyadeola</h3>
                    </div>
                    <div className="review-card__top--right">
                      <img src="svg/twitter.svg" alt="twitter icon" />
                    </div>
                  </div>
                  <div className="review-card__bottom">
                    <h2 className="review-card__h2">
                      This is awesome man 🔥🔥☺️
                    </h2>
                  </div>
                </div>
                <div className="review-card">
                  <div className="review-card__top">
                    <div className="review-card__top--left">
                      <p className="review-card__p">dodo activist</p>
                      <h3 className="review-card__h3">@prollyadeola</h3>
                    </div>
                    <div className="review-card__top--right">
                      <img src="svg/twitter.svg" alt="twitter icon" />
                    </div>
                  </div>
                  <div className="review-card__bottom">
                    <h2 className="review-card__h2">
                      This is awesome man 🔥🔥☺️
                    </h2>
                  </div>
                </div>
                <div className="review-card">
                  <div className="review-card__top">
                    <div className="review-card__top--left">
                      <p className="review-card__p">dodo activist</p>
                      <h3 className="review-card__h3">@prollyadeola</h3>
                    </div>
                    <div className="review-card__top--right">
                      <img src="svg/twitter.svg" alt="twitter icon" />
                    </div>
                  </div>
                  <div className="review-card__bottom">
                    <h2 className="review-card__h2">
                      This is awesome man 🔥🔥☺️
                    </h2>
                  </div>
                </div>
                <div className="review-card">
                  <div className="review-card__top">
                    <div className="review-card__top--left">
                      <p className="review-card__p">dodo activist</p>
                      <h3 className="review-card__h3">@prollyadeola</h3>
                    </div>
                    <div className="review-card__top--right">
                      <img src="svg/twitter.svg" alt="twitter icon" />
                    </div>
                  </div>
                  <div className="review-card__bottom">
                    <h2 className="review-card__h2">
                      This is awesome man 🔥🔥☺️
                    </h2>
                  </div>
                </div>
                <div className="review-card">
                  <div className="review-card__top">
                    <div className="review-card__top--left">
                      <p className="review-card__p">dodo activist</p>
                      <h3 className="review-card__h3">@prollyadeola</h3>
                    </div>
                    <div className="review-card__top--right">
                      <img src="svg/twitter.svg" alt="twitter icon" />
                    </div>
                  </div>
                  <div className="review-card__bottom">
                    <h2 className="review-card__h2">
                      This is awesome man 🔥🔥☺️
                    </h2>
                  </div>
                </div>
                <div className="review-card">
                  <div className="review-card__top">
                    <div className="review-card__top--left">
                      <p className="review-card__p">dodo activist</p>
                      <h3 className="review-card__h3">@prollyadeola</h3>
                    </div>
                    <div className="review-card__top--right">
                      <img src="svg/twitter.svg" alt="twitter icon" />
                    </div>
                  </div>
                  <div className="review-card__bottom">
                    <h2 className="review-card__h2">
                      This is awesome man 🔥🔥☺️
                    </h2>
                  </div>
                </div>
                <div className="review-card">
                  <div className="review-card__top">
                    <div className="review-card__top--left">
                      <p className="review-card__p">dodo activist</p>
                      <h3 className="review-card__h3">@prollyadeola</h3>
                    </div>
                    <div className="review-card__top--right">
                      <img src="svg/twitter.svg" alt="twitter icon" />
                    </div>
                  </div>
                  <div className="review-card__bottom">
                    <h2 className="review-card__h2">
                      This is awesome man 🔥🔥☺️
                    </h2>
                  </div>
                </div>
              </div>
              <div className="section-reviews__bottom-wrapper review-card__anim2">
                <div className="review-card">
                  <div className="review-card__top">
                    <div className="review-card__top--left">
                      <p className="review-card__p">dodo activist</p>
                      <h3 className="review-card__h3">@prollyadeola</h3>
                    </div>
                    <div className="review-card__top--right">
                      <img src="svg/twitter.svg" alt="twitter icon" />
                    </div>
                  </div>
                  <div className="review-card__bottom">
                    <h2 className="review-card__h2">
                      This is awesome man 🔥🔥☺️
                    </h2>
                  </div>
                </div>
                <div className="review-card">
                  <div className="review-card__top">
                    <div className="review-card__top--left">
                      <p className="review-card__p">dodo activist</p>
                      <h3 className="review-card__h3">@prollyadeola</h3>
                    </div>
                    <div className="review-card__top--right">
                      <img src="svg/twitter.svg" alt="twitter icon" />
                    </div>
                  </div>
                  <div className="review-card__bottom">
                    <h2 className="review-card__h2">
                      This is awesome man 🔥🔥☺️
                    </h2>
                  </div>
                </div>
                <div className="review-card">
                  <div className="review-card__top">
                    <div className="review-card__top--left">
                      <p className="review-card__p">dodo activist</p>
                      <h3 className="review-card__h3">@prollyadeola</h3>
                    </div>
                    <div className="review-card__top--right">
                      <img src="svg/twitter.svg" alt="twitter icon" />
                    </div>
                  </div>
                  <div className="review-card__bottom">
                    <h2 className="review-card__h2">
                      This is awesome man 🔥🔥☺️
                    </h2>
                  </div>
                </div>
                <div className="review-card">
                  <div className="review-card__top">
                    <div className="review-card__top--left">
                      <p className="review-card__p">dodo activist</p>
                      <h3 className="review-card__h3">@prollyadeola</h3>
                    </div>
                    <div className="review-card__top--right">
                      <img src="svg/twitter.svg" alt="twitter icon" />
                    </div>
                  </div>
                  <div className="review-card__bottom">
                    <h2 className="review-card__h2">
                      This is awesome man 🔥🔥☺️
                    </h2>
                  </div>
                </div>
                <div className="review-card">
                  <div className="review-card__top">
                    <div className="review-card__top--left">
                      <p className="review-card__p">dodo activist</p>
                      <h3 className="review-card__h3">@prollyadeola</h3>
                    </div>
                    <div className="review-card__top--right">
                      <img src="svg/twitter.svg" alt="twitter icon" />
                    </div>
                  </div>
                  <div className="review-card__bottom">
                    <h2 className="review-card__h2">
                      This is awesome man 🔥🔥☺️
                    </h2>
                  </div>
                </div>
                <div className="review-card">
                  <div className="review-card__top">
                    <div className="review-card__top--left">
                      <p className="review-card__p">dodo activist</p>
                      <h3 className="review-card__h3">@prollyadeola</h3>
                    </div>
                    <div className="review-card__top--right">
                      <img src="svg/twitter.svg" alt="twitter icon" />
                    </div>
                  </div>
                  <div className="review-card__bottom">
                    <h2 className="review-card__h2">
                      This is awesome man 🔥🔥☺️
                    </h2>
                  </div>
                </div>
                <div className="review-card">
                  <div className="review-card__top">
                    <div className="review-card__top--left">
                      <p className="review-card__p">dodo activist</p>
                      <h3 className="review-card__h3">@prollyadeola</h3>
                    </div>
                    <div className="review-card__top--right">
                      <img src="svg/twitter.svg" alt="twitter icon" />
                    </div>
                  </div>
                  <div className="review-card__bottom">
                    <h2 className="review-card__h2">
                      This is awesome man 🔥🔥☺️
                    </h2>
                  </div>
                </div>
                <div className="review-card">
                  <div className="review-card__top">
                    <div className="review-card__top--left">
                      <p className="review-card__p">dodo activist</p>
                      <h3 className="review-card__h3">@prollyadeola</h3>
                    </div>
                    <div className="review-card__top--right">
                      <img src="svg/twitter.svg" alt="twitter icon" />
                    </div>
                  </div>
                  <div className="review-card__bottom">
                    <h2 className="review-card__h2">
                      This is awesome man 🔥🔥☺️
                    </h2>
                  </div>
                </div>
                <div className="review-card">
                  <div className="review-card__top">
                    <div className="review-card__top--left">
                      <p className="review-card__p">dodo activist</p>
                      <h3 className="review-card__h3">@prollyadeola</h3>
                    </div>
                    <div className="review-card__top--right">
                      <img src="svg/twitter.svg" alt="twitter icon" />
                    </div>
                  </div>
                  <div className="review-card__bottom">
                    <h2 className="review-card__h2">
                      This is awesome man 🔥🔥☺️
                    </h2>
                  </div>
                </div>
                <div className="review-card">
                  <div className="review-card__top">
                    <div className="review-card__top--left">
                      <p className="review-card__p">dodo activist</p>
                      <h3 className="review-card__h3">@prollyadeola</h3>
                    </div>
                    <div className="review-card__top--right">
                      <img src="svg/twitter.svg" alt="twitter icon" />
                    </div>
                  </div>
                  <div className="review-card__bottom">
                    <h2 className="review-card__h2">
                      This is awesome man 🔥🔥☺️
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-contact">
            <h1 className="heading-1">
              <span>Sold Yet? </span> <small>🤙</small>
            </h1>
            <h2 className="section-contact__h2">
              Thanks for stopping by, I’m currently looking to a new team of
              creative designers and developers. If you think we might be a good
              fit for one another, give me a
              <a href="tel:+2349066383763"> call 🇳🇬 &nbsp;</a>
              or send me an
              <a
                href="mailto:adeolaonigegeara@gmail.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                &nbsp; email 📧
              </a>
              .
            </h2>
          </section>
          <section className="section-socials">
            <h1 className="heading-1">
              <span>Dont be a stranger!</span> <small>👋</small>
            </h1>
            <p className="paragraph">Connect with me online</p>
            <div className="section-socials--links">
              <a href="https://github.com/adeolaadeoti" target="_blank">
                👾 GH
              </a>
              <a href="https://twitter.com/adeolajs" target="_blank">
                🐦 TW
              </a>
              <a href="https://www.linkedin.com/in/adeoladev" target="_blank">
                💼 LD
              </a>
              <a href="https://www.instagram.com/adeolaadeoti_" target="_blank">
                📸 IN
              </a>
            </div>
          </section>
        </main>
        <footer className="footer">
          <img
            src="svg/adeola-logo-footer.svg"
            alt="design and devloped by adeola"
          />
          <div className="footer__socials">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="svg/dribble.svg" alt="dribble logo" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="svg/github.svg" alt="github logo" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default index;
