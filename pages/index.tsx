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

  return (
    <div data-scroll-container ref={refScroll}>
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
            <a className="header__hero--cta" href="#sectionProjects">
              VIEW PROJECTS
            </a>
          </div>
        </header>
        <div className="header__footer">
            <div className="header__footer--left"> speaker </div>
            <div className="header__footer--right">
              <a href="https://github.com/adeolaadeoti" target="_blank" >👾 GH</a>
              <a href="https://twitter.com/adeolajs" target="_blank" >🐦 TW</a>
              <a href="https://www.linkedin.com/in/adeoladev" target="_blank" >💼 LD</a>
              <a href="https://www.instagram.com/adeolaadeoti_" target="_blank" > 📸 IN</a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default index;
