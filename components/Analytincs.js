import Script from "next/script";

const GoogleAnalytics = ({ TRACKING_ID }) => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${RACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', '${TRACKING_ID}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
