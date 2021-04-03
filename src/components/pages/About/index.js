import React from "react";
import "./index.css";
import Card from "../../Card";
import Technology from "../../Technology";

function About() {
  return (
    <div className="section about__container">
      <div className="slide">
        <div className="about__container__item about-me">
          <h2>About Me</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="slide">
        <div className="about__container__item services">
          <Card
            width="25%"
            height="60%"
            name="Design"
            image="./images/icons/layout.png"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not"
            button="Get A Quote"
          />

          <Card
            width="25%"
            height="60%"
            name="Development"
            image="./images/icons/rocket-ship.png"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not"
            button="Get A Quote"
          />

          <Card
            width="25%"
            height="60%"
            name="Google Analytics"
            image="./images/icons/data.png"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not"
            button="Get A Quote"
          />
        </div>
      </div>
      <div className="slide">
        <div className="about__container__item technologies">
          <h2>Technologies</h2>
          <div className="technologies__items">
            <Technology name="Reactjs" img="./images/icons/reactjs.png" />
            <Technology name="JavaScript" img="./images/ja.png" />
            <Technology name="CSS" img="./images/icons/css.webp" />
            <Technology name="HTML" img="./images/icons/html.webp" />
            <Technology name="MySQL" img="./images/icons/mysql.png" />
            <Technology name="Adobe XD" img="./images/icons/xd.png" />
            <Technology name="Bootstrap" img="./images/icons/bs.jpg" />
            <Technology name="GitHub" img="./images/icons/git.png" />
            <Technology name="NodeJS" img="./images/icons/node.jpg" />
            <Technology name="MongoDB" img="./images/icons/mongodb.png" />
            <Technology
              name="Google Analytics"
              img="./images/icons/google.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
