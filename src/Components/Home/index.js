import React from "react";

export default function Home(props) {
  console.log("Home props", props);
  return (
    <div>
      <h1>Welcome {props.name}</h1>
    </div>
  );
}
