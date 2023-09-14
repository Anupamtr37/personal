import React from "react";
import IMG1 from "../../assets/assets_portfolio6.jpg";
import "./portfolio.css";

const Portfolio = () => {
  const arr = [
    {
      id: 1,
      title: "portfolio1",
      img: IMG1,
      github: "https://github.com",
      demo: "https://dribbble.com/hiring",
    },
    {
      id: 2,
      title: "portfolio2",
      img: IMG1,
      github: "https://github.com",
      demo: "https://dribbble.com/hiring",
    },
    {
      id: 3,
      title: "portfolio3",
      img: IMG1,
      github: "https://github.com",
      demo: "https://dribbble.com/hiring",
    },
    {
      id: 4,
      title: "portfolio4",
      img: IMG1,
      github: "https://github.com",
      demo: "https://dribbble.com/hiring",
    },
    {
      id: 5,
      title: "portfolio5",
      img: IMG1,
      github: "https://github.com",
      demo: "https://dribbble.com/hiring",
    },
    {
      id: 6,
      title: "portfolio6",
      img: IMG1,
      github: "https://github.com",
      demo: "https://dribbble.com/hiring",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {arr.map(({ id, title, img, github, demo }) => {
          return (
            <article className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={img} alt="portfolio" />
                <h3>{title}</h3>
                <div className="portfolio_item-cta ">
                  <a href={github} className="btn">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary">
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
