import Layout from "../components/Layout";
import Image from "next/image";
import profilePhoto from "../public/images/profile.jpeg";

// Defining a style object for the profile picture.


export default () => (
  <Layout>
    {/* using the layout component as a wrapper */}
    <div className="about">
      <div className="text">
        <h1>Big-Ben Shilubane</h1>
        <h3>
          I am a junior Full Stack Developer who possess an impressive arsenal
          of skills in HTML, CSS, JavaScript, React, Node, Express and Nextjs. I
          excel in designing and maintaining responsive websites that offer a
          smooth user experience. My expertise lies in crafting dynamic,
          engaging interfaces through writing clean and optimized code and
          utilizing cutting-edge development tools and techniques. I am also a
          team player who thrives in collaborating with cross-functional teams
          to produce outstanding web applications.
          <br />
          <br />I am very passionate about being able to help anyone in anyway
          that I can. Whether it's work related or a personal issue, I pride
          myself in always being there for people.
        </h3>
        <h3>
          In 2021 I garduated from matric with a certificate. From then I went
          on to study Full stack web development on Hyperion Dev's online course
          and have been taking the challenge one step at a time.
        </h3>
      </div>
      {/* Creating a div with class 'profile' for the profile picture. */}
      <div className="profile">
        {/* Displaying the profile picture with the specified style */}
        <Image src={profilePhoto} alt="Profile Photo" />
      </div>
    </div>

    {/* Defining additional styles using styled-jsx */}
    <style jsx>{`
      .about {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
        gap: 50px;
        margin-top: 20%;
      }

      .profile :global(img) {
        border-radius: 15%;
        height: 390px;
        width: 275px;
        order: 1;
      }

      .text {
        text-align: center;
        color: white;
        background-color: rgba(0, 0, 0, 0.5);
        border: 5px solid gray;
        border-radius: 10px;
        width: 60%;
        order: 2;
      }

      /* Media query for medium desktop screens */
      @media (min-width: 992px) and (max-width: 1199px) {
        .text {
          width: 100%;
        }
        .about {
          height: 100vh;
          width: 100%;
          gap: -100px;
        }
      }

      /* Media query for small desktop screens */
      @media (min-width: 768px) and (max-width: 991px) {
        .text {
          width: 100%;
        }
        .about {
          height: 100vh;
          width: 100%;
          margin-top: 30%;
        }
      }

      /* Media query for tablet devices */
      @media (max-width: 768px) {
        .about {
          height: 100vh;
          width: 100%;
          margin-top: 53%;
        }

        .text {
          width: 100%;
        }
      }

      /* Media query for mobile devices */
      @media (max-width: 480px) {
        .about {
          height: 100vh;
          width: 100%;
          margin-top: 50%
        }
        .text {
          width: 100%;
        }
      }
    `}</style>
  </Layout>
);
