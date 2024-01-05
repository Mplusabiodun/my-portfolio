import React from "react";
import myPicture from "./../assets/me.jpg";
import classes from "./Home.module.css";

export default function Home({ data }) {
  return (
    <section className="Home">
      <main className="wrapper">
        <img src={myPicture} className={classes.profile_image} />
        <h1 className={classes.heading}>You're welcome</h1>
        <p>
          My name is Fatai Monsuru Abiodun, A web developer from Nigeria. I'm a
          frontend developer, website manager and I strive with every line of
          code making the web a beautiful place with a responsive design.
        </p>
        <p>
          I'm always opened to new opportunities and challenges. I'm a team
          player and I'm always ready to learn new things in the web
          teachnologies. However, I love to spend my leisure time
          watching/playing soccer.
        </p>
      </main>
    </section>
  );
}
