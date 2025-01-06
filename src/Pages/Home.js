import React from "react";

function Home() {

  return (
    <div className="home">
      <section id="welcome">
        <div id="logoAnim" class="d-flex justify-content-center align-items-center">
                    <img src='./Assets/media/background/tartelette_accueil.png' id="tartelette"/>
                    <img src="./src/assets/media/logoNS/ns_2024.png" id="ns_2024"/>
                    <img src="./src/assets/media/logoNS/ns_mascotte.png" id="mascotte"/>
                    <img src="./src/assets/media/doodle/forme-organique1.png" id="forme1"/>
                    <img src="./src/assets/media/doodle/megaphone.png" id="mega"/>
                    <img src="./src/assets/media/doodle/fleur1.png" id="fleur1"/>
                    <img src="./src/assets/media/doodle/fleur3.png" id="fleur2"/>
                    <img src="./src/assets/media/doodle/cassette.png" id="cassette"/>
                    <img src="./src/assets/media/doodle/etoile.png" id="etoile"/>
                    
          </div>

                 <div class="button-style d-flex justify-content-center" id="btnlanding">
                    <a href="./src/view/programme/programme.html">Découvrez le programme</a>
                 </div>
                 <img src="./src/assets/media/doodle/happyfleur2.png" id="fleurbtn"/>
        </section>
      <h1>Hello</h1>
    </div>
  );

}
 
export default Home;