function lineUp(){
    return(
        <article id="affiche" class="d-flex flex-column justify-content-center align-items-center" >
                
            <div class="d-flex flex-row justify-content-center">
                <img src="./src/assets/media/doodle/happyfleur1.png" class="decoTitre"/>
                <h2 class="d-flex align-items-center justify-content-center">Les concerts</h2>
                <img src="./src/assets/media/doodle/happyfleur1.png" class="decoTitre"/>
            </div>

            <p>Une édition haute en couleurs et en talents internationaux!</p>
                
            <div id="carouselArtiste" >
                <div id="conteneurCarousel" class="d-flex flex-row " data-aos="fade-left" data-aos-duration="1000"/>                       
            </div>
                
        </article>
    )
}

export default lineUp;

