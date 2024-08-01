import React from "react";

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hello! I am Halit Doksal, a dynamic and self-motivated Frontend
        Developer. Discover my projects and skills in my portfolio. Below are
        some of the key projects I have worked on.
      </p>
      <div className="card">
        <h2>Nutrify-Fresh</h2>
        <p>
          A nutrition tracking application.This project allows users to monitor
          their daily nutritional needs through a user-friendly platform.
        </p>
      </div>
      <div className="card">
        <h2>My Portfolio</h2>
        <p>
          MyPortfolio is a personal portfolio website developed to showcase my
          projects and skills. This project aims to provide a user-friendly and
          stylish interface using modern web technologies. Built with React.js
        </p>
      </div>
    </div>
  );
};

export default Home;
