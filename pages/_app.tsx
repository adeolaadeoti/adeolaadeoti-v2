import React from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";
import "../styles/global.scss";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

function MyApp({ Component, pageProps }: any) {
  const router = useRouter();
  return (
    <div>
      <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
        <Component {...pageProps} key={router.route} />
        <Analytics />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
