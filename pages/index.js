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
      `}</style>
    </Layout>
  );
}

export default Welcome;
