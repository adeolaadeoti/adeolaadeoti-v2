import React from "react";
import Head from "next/head";

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
        <title>Adeola Adeoti</title>
        <link rel="icon" href="svg/favicon.svg" />
      </Head>
    </div>
  );
};

export default index;
