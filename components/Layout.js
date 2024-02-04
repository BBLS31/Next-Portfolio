import Navbar from "./Navbar";
import Head from "next/head";
import ReactGA from "react-ga4";
import React, { useEffect } from "react";


function Layout(props) {

  useEffect(() => {
    ReactGA.initialize("G-72VQHGXVWF");
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
    });
  }, []);

  return (
    <div className="page-layout">
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Sevillana&display=swap"
          rel="stylesheet"
        />
      </Head>

      {props.children}

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }

        .page-layout {
          width: 100%;
          height: 100%;
        }
      `}</style>
      <video
        src={require("../public/images/AdobeStock_265470640.mov")}
        autoPlay
        muted
        loop
        style={{
          position: "fixed",
          right: -215,
          bottom: -200,
          minWidth: "100%",
          minHeight: "100%",
          zIndex: -1,
        }}
        className="video"
      />
      <Navbar />
    </div>
  );
}

export default Layout;
