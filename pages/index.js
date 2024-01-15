import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Image from "next/image";
import Profile from "../public/images/profile.jpeg";

function Welcome(props) {
  return (
    <Layout>
      <div className="container">
       <h1>HELLO AND WELCOME</h1>
      </div>

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
    border-radius: 10px
  }
`}</style>

    </Layout>
  );
}

export default Welcome;
