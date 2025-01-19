import './charity.css';

function charity(){
    return(
    <section id="asso">
       <div className="d-flex flex-row justify-content-center align-items-center" >
            <img src="../../media/doodle/megaphone.png" className="decoTitreShake"/>
            <h2>Un festival humanitaire</h2>
            <img src="../../media/doodle/megaphone.png" className="decoTitreShake"/>
        </div>


        <div id="assoTxt" className="d-flex flex-column flex-lg-row align-items-center" /*data-aos="fade-up" data-aos-duration="1000"*/>
            <img src="../../media/photo/pexels-rdne-6646917.jpg" width="40%"/>
            <div>
                <p><strong>National Sounds se veut être un festival inclusif et se distingue par son engagement humanitaire, visant à rassembler des personnes de diverses origines et à promouvoir 
                la solidarité globale.</strong></p>
                <p> En intégrant des initiatives telles que des collectes de fonds pour des causes sociales, des stands d'information 
                sur des problématiques mondiales et des ateliers de sensibilisation, le festival ne se contente pas de célébrer la diversité musicale, 
                mais il agit également comme une plateforme pour le changement social.</p>
                <p>Grâce à des partenariats avec des organisations caritatives et à l'inclusion 
                d'artistes de communautés marginalisées, ce type de festival incarne un esprit d'unité et de bienveillance, offrant une expérience enrichissante 
                tant sur le plan culturel qu'humanitaire.</p>    
            </div>
        </div>
    </section>
    )
}
export default charity;