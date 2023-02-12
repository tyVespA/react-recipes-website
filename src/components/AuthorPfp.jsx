import { height } from "@mui/system";
import React from "react";
import ChrisHeariaPfp from "../assets/chrisheria.jpg";

function AuthorPfp({
  authorPfp = ChrisHeariaPfp,
  name = "Chris Heria",
  href = "https://www.youtube.com/@CHRISHERIA",
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <div
        style={{
          backgroundImage: `url(${authorPfp})`,
          backgroundSize: `cover`,
          backgroundPosition: `center`,
          borderRadius: `50%`,
          width: `60px`,
          height: `60px`,
        }}
      ></div>

      <p style={{ textDecoration: `underline` }}>{name}</p>
    </a>
  );
}

export default AuthorPfp;
