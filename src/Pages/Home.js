import React from "react";
import Welcome from '../Components/Welcome/Welcome';
import LineUp from "../Components/LineUp/LineUp";

function Home() {

  return (
    <div className="home">
      <Welcome/>
      <LineUp/>
    </div>
  );

}
 
export default Home;