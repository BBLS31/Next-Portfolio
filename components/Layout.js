import React from "react";
import Navbar from "./Navbar";
import Head from "next/head";
import { useEffect } from "react";
import $ from "jquery";


function Layout(props) {

useEffect(() => {
  $(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
      } // End if
    });
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
          position: fixed;
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
