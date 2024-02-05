import Layout from "../components/Layout";

function Welcome(props) {
  return (
    <Layout>
      {/* Using the Layout component as a wrapper */}
      <div className="container">
        <h1>HELLO AND WELCOME</h1>
      </div>
      {/* Defining styles using styled-jsx */}
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100%;
          color: white;
        }

        h1 {
          font-size: 100px;
          font-family: savillana;
          border: 2px solid grey;
          border-radius: 10px;
        }

        /* Media query for medium desktop screens */
        @media (min-width: 992px) and (max-width: 1199px) {
          .container{
            height: 100vh
            width: 100%
          }
          h1 {
            font-size: 84px;
            text-align: center;
            width: 100%
          }
        }

        /* Media query for small desktop screens */
        @media (min-width: 768px) and (max-width: 991px) {
          .container{
            height: 100vh;
            width: 100%;
          }
          h1 {
            font-size: 62px;
            text-align: center;
            width: 100%
          }
        }

        /* Media query for tablet devices */
        @media (max-width: 768px) {
          .container {
            height: 100vh;
            width: 100%;
          }
          h1 {
            font-size: 46px;
            text-align: center;
            width: 100%
          }
        }

        /* Media query for mobile devices */
        @media (max-width: 480px) {
          .container{
            height: 100vh;
            width: 100%
          }
          h1 {
            font-size: 30px;
            text-align: center;
            width: 100%
          }
        }
      `}</style>
    </Layout>
  );
}

export default Welcome;
