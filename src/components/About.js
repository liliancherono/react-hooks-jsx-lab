import React from "react";
import { image } from "../data/user";

export default function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I love building web applications using React!</p>
      <img src={image} alt="I made this" />
    </div>
  );
}
