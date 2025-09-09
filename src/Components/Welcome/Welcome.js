import './welcome.css';
import { motion } from "motion/react";

function welcome(){
    return(
       <section id="welcome" className='d-flex flex-column justify-content-around'>
            <div id="welcomeAnim">
                <motion.img 
                    initial={{ opacity: 0, scale: 0 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{duration: 1.9, scale: { type: "spring", visualDuration: 0.9, bounce: 0.5 }}}
                    src="../media/background/tartelette_accueil.png" 
                    id="tartelette"
                />
                <img src="../media/logoNS/ns_2024.png" id="ns_2024"/>
                <img src="../media/logoNS/ns_mascotte.png" id="mascotte"/>

                <div id='decor-float'>
                    <img src="../media/doodle/forme-organique1.png" id="forme1" className="decor"/>
                    <img src="../media/doodle/megaphone.png" id="mega" className="decor"/>
                    <img src="../media/doodle/fleur1.png" id="fleur1" className="decor"/>
                    <img src="../media/doodle/fleur3.png" id="fleur2" className="decor"/>
                    <img src="../media/doodle/cassette.png" id="cassette" className="decor"/>
                    <img src="../media/doodle/etoile.png" id="etoile" className="decor"/> 
                </div>
                                  
            </div>

            <div className="button-style d-flex flex-row align-items-center justify-content-center" id="btnlanding">
                <img src="../media/doodle/happyfleur2.png" id='fleurbtn'/>
                <a href="/programmation" className="text-center">Découvrez le programme</a>
            </div>
        </section> 
    )
    
}

export default welcome;

