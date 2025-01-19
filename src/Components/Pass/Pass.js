import './pass.css';

function Pass(){

    return(
        <section id='billeterie'>
            <div className="d-flex flex-row justify-content-center align-items-center">
                <img src="../../media/doodle/metal.png" className="decoTitreShake"/>
                <h2>Obtenez votre pass dès maintenant!</h2>
                <img src="../../media/doodle/metal.png" className="decoTitreShake"/>
            </div>

            <div /*data-aos="fade-up" data-aos-duration="1000"*/>
                <div id="passConteneur" className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                    <a href="https://www.ticketmaster.fr/fr" target="_blank" rel="noreferrer" className="pass3 d-flex flex-column" >
                        <h3>PASS 3 jours</h3>
                        <p>80 &euro;</p>
                    </a>
                    <a href="https://www.ticketmaster.fr/fr" target="_blank" rel="noreferrer" className="pass2 d-flex flex-column" >
                        <h3>PASS 2 jours</h3>
                        <p>50 &euro;</p>
                    </a>
                    <a href="https://www.ticketmaster.fr/fr" target="_blank" rel="noreferrer" className="pass1 d-flex flex-column" >
                        <h3>Billet 1 jour</h3>
                        <p>30 &euro;</p>
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Pass;