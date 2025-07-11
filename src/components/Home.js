import React from "react";
import { name, city } from "../data/user";

export default function Home() {

console.log(`${name} is a Web Developer from ${city}`);

  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}
