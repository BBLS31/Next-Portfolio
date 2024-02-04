import Layout from "../components/Layout";

function Contact() {
  return (
    <Layout>
      {/* Using the Layout component as a wrapper */}
      <div className="centered-content">
        <h2>You can reach me at:</h2>
        <div className="contacts">
          <h3>Email:</h3>
          <p>bigben.shilubane@gmail.com</p>
          <h3>Phone:</h3>
          <p>0721738869</p>
          <h3>Location:</h3>
          <p>The Landmark Apartments, 30 Dover street Ferndale, Randburg</p>
        </div>
      </div>

      {/* Defining styles using styled-jsx */}
      <style jsx>{`
        .centered-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          color: white;
        }

        .contacts {
          border: 2px solid gray;
          border-radius: 10px;
          background-color: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </Layout>
  );
}

export default Contact;
