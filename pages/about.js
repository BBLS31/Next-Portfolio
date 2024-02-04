import Layout from "../components/Layout";
import Image from "next/image";
import profilePhoto from "../public/images/profile.jpeg";

// Defining a style object for the profile picture.
const profileStyle = {
  borderRadius: 50,
  overflow: "hidden",
  width: 250,
  height: 350,
  position: "relative",
  bottom: 190,
  left: 200,
};

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
      <div style={profileStyle} className="profile">
        {/* Displaying the profile picture with the specified style */}
        <Image src={profilePhoto} layout="fill" objectFit="cover" />
      </div>
    </div>

    {/* Defining additional styles using styled-jsx */}
    <style jsx>{`
      .text {
        position: relative;
        top: 290px;
        left: 600px;
        text-align: center;
        color: white;
        background-color: rgba(0, 0, 0, 0.5);
        border: 5px solid gray;
        border-radius: 10px;
        width: 1000px;
      }
      .about {
        position: relative;
        bottom: 170px;
        right: 80px;
      }
    `}</style>
  </Layout>
);
