import React from "react";
import Head from "next/head";
import { Navigation } from "../components/Navigation/Navigation";

interface indexProps {}

const locomotiveScroll =
  typeof window !== `undefined` ? require("locomotive-scroll").default : null;

const index: React.FC<indexProps> = ({}) => {
  const refScroll = React.useRef(null);
  let scroll: any;

  React.useEffect(() => {
    if (!refScroll.current) return;
    // @ts-ignore
    scroll = new locomotiveScroll({
      el: refScroll.current,
      smooth: true,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });
  }, [refScroll]);

  // function updateScroll() {
  //   scroll.destroy();

  //   setTimeout(function () {
  //     scroll = new locomotiveScroll({
  //       el: refScroll.current,
  //       smooth: true,
  //       smartphone: {
  //         smooth: true,
  //       },
  //       tablet: {
  //         smooth: true,
  //       },
  //       // inertia: 0.3,
  //       // multiplier: 0.65,
  //     });
  //   }, 100);
  // }

  return (
    <div id="menu-target" data-scroll-container ref={refScroll}>
      <Head>
        <title>Adeola Adeoti &mdash; Frontend Devloper</title>
        <link rel="icon" href="svg/favicon.svg" />
      </Head>
      <Navigation />
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
          <div className="header__footer--left"> speaker </div>
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
          passionate <br /> about digital products that help people experience everyday
          life, not endure it.
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
            <div className="project-card__middle">
              <img src="webp/alexxandria-1.webp" alt="alexxandria model" />
            </div>
            <div className="project-card__right">
              <h2 className="heading-2">
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
              <h4 className="heading-4">
                NEXT JS, LOCOMOTIVE SCROLL, FRAMER MOTION
              </h4>
            </div>
            <div className="project-card__middle">
              <img src="webp/pixelchef-1.webp" alt="pixelchef" />
            </div>
            <div className="project-card__right">
              <h2 className="heading-2">PixelChef</h2>
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
            <div className="project-card__middle">
              <img src="webp/heatrow-1.webp" alt="heatrow" />
            </div>
            <div className="project-card__right">
              <h2 className="heading-2">
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
              <h4 className="heading-4">
                NEXT JS, LOCOMOTIVE SCROLL, FRAMER MOTION
              </h4>
            </div>
            <div className="project-card__middle">
              <img src="webp/adeola-1.webp" alt="adeola image" />
            </div>
            <div className="project-card__right">
              <h2 className="heading-2">
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
        <section className="section-reviews">
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
                  <h2 className="review-card__h2">This is awesome man 🔥🔥☺️</h2>
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
                  <h2 className="review-card__h2">This is awesome man 🔥🔥☺️</h2>
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
                  <h2 className="review-card__h2">This is awesome man 🔥🔥☺️</h2>
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
                  <h2 className="review-card__h2">This is awesome man 🔥🔥☺️</h2>
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
                  <h2 className="review-card__h2">This is awesome man 🔥🔥☺️</h2>
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
                  <h2 className="review-card__h2">This is awesome man 🔥🔥☺️</h2>
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
                  <h2 className="review-card__h2">This is awesome man 🔥🔥☺️</h2>
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
                  <h2 className="review-card__h2">This is awesome man 🔥🔥☺️</h2>
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
                  <h2 className="review-card__h2">This is awesome man 🔥🔥☺️</h2>
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
                  <h2 className="review-card__h2">This is awesome man 🔥🔥☺️</h2>
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
                  <h2 className="review-card__h2">This is awesome man 🔥🔥☺️</h2>
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
                  <h2 className="review-card__h2">This is awesome man 🔥🔥☺️</h2>
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
                  <h2 className="review-card__h2">This is awesome man 🔥🔥☺️</h2>
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
                  <h2 className="review-card__h2">This is awesome man 🔥🔥☺️</h2>
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
                  <h2 className="review-card__h2">This is awesome man 🔥🔥☺️</h2>
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
                  <h2 className="review-card__h2">This is awesome man 🔥🔥☺️</h2>
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
                  <h2 className="review-card__h2">This is awesome man 🔥🔥☺️</h2>
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
                  <h2 className="review-card__h2">This is awesome man 🔥🔥☺️</h2>
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
                  <h2 className="review-card__h2">This is awesome man 🔥🔥☺️</h2>
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
                  <h2 className="review-card__h2">This is awesome man 🔥🔥☺️</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default index;
