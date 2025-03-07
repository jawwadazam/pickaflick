import React from "react";
import "../styles.css";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src="logo.png" alt="pickaflick" />
      <h2> Pick a Movie for your next snack time </h2>
      <div className="content">
        <p>
          Pick a Flick is a movie recommendation app that helps you find the
          perfect movie to watch based on your mood. Whether you're feeling
          happy, sad, excited, or bored, we've got a movie for you.
        </p>
      </div>
    </div>
  );
}
