import React from "react";
import Welcome from '../Components/Welcome/Welcome.js';
import LineUp from'../Components/LineUp/LineUp.js';
import Pass from'../Components/Pass/Pass.js';
import News from '../Components/News/News';
import Charity from '../Components/Charity/Charity';

function Home() {

  return (
    <div className="home">
      <Welcome/>
      <LineUp/>
      <Pass/>
      <News/>
      <Charity/>
    </div>
  );

}
 
export default Home;