/*import React from "react";

function FAQ() {

    const [showReponse, setShowReponse] = useState(false);
    console.log(useState(false));
    
      const handleShowReponse = () =>{
        setShowReponse(!showReponse)
      };

    return (
        <section id="main">
            <div className="d-flex flex-row justify-content-center align-items-center">
                <img src="../media/doodle/forme-organique2.png" className="decoTitre"/>
                <h1 className="d-flex justify-content-center">Foire aux questions</h1>
                <img src="../media/doodle/forme-organique2.png" className="decoTitre"/>
            </div>

            <h2 className="faqTopic">Billets</h2>

            <article id="faqBillet">

                <div className="conteneurQuestion">
                    <div className="question d-flex flex-row justify-content-between align-items-center" onClick={handleShowReponse}>
                        <h3>OU OBTENIR DES PLACES?</h3>
                        <img src="../media/icon/suivant.png"  alt="fleche d'interaction"  className="voirPlus d-flex "/>
                    </div>
                        
                    <p className={`reponse ${showReponse ? "show-reponse" : "hide"}`}>Les places sont disponibles sur notre billetterie juste ici! </p>
                </div>

                <div className="conteneurQuestion">
                    <div className="question d-flex flex-row justify-content-between align-items-center" onClick={handleShowReponse}>
                        <h3>JE VEUX REVENDRE MON BILLET</h3>
                        <img src="../media/icon/suivant.png"  alt="fleche d'interaction"  className="voirPlus d-flex"/>
                    </div>
                        
                    <p  className={`reponse ${showReponse ? "show-reponse" : "hide"}`}>La loi n° 2012-348 du 12 mars 2012 protège les spectateurs contre la revente de billets par toute société ou personne physique non agréé
                    par le producteur du spectacle. Le festival se réserve le droit d’engager des poursuites si des ventes illégales sont constatées 
                    vous encourez jusque 15000€ d’amende.

                    Si vous décidez d’acheter un billet en-dehors des circuits légaux, vous risquez d’avoir affaire à un faux ou a une copie 
                    et de ne pas pouvoir rentrer sur le site du festival.</p>
                </div>

                <div className="conteneurQuestion">
                    <div className="question d-flex flex-row justify-content-between align-items-center" onClick={handleShowReponse}>
                        <h3>PUIS-JE CHANGER LE NOM INSCRIT SUR MON BILLET  ?</h3>
                        <img src="../media/icon/suivant.png"  alt="fleche d'interaction"  className="voirPlus d-flex"/>
                    </div>
                        
                    <p className={`reponse ${showReponse ? "show-reponse" : "hide"}`}>Vous recevrez un email  au printemps 2024 vous indiquant les modalités vous permettant de nommer vos billets (obligatoire). 
                    Vous aurez jusqu’à mi-juin 2023 pour nommer chaque billet.

                    À partir de fin juin 2024, vous recevrez sur votre adresse mail un lien vers votre commande pour télécharger vos billets. 
                    Si vous n’avez pas nommé vos billets, ils seront automatiquement attribués au nom de l’acheteur de la commande.
                    </p>
                </div>
                    
            </article>

            <h2 className="faqTopic">Accessibilité</h2>

            <article id="faqAcces" >

                <div className="conteneurQuestion">
                    <div className="question d-flex flex-row justify-content-between align-items-center" onClick={handleShowReponse}>
                        <h3>Y-A-T'IL DES PARKINGS RESERVES AUX PMR?</h3>
                        <img src="../media/icon/suivant.png"  alt="fleche d'interaction"  className="voirPlus d-flex"/>
                    </div>
                        
                    <p className={`reponse ${showReponse ? "show-reponse" : "hide"}`}>Pour accéder au parking PMR, se munir du macaron ou de tout justificatif médical datant de moins d’un mois
                        à présenter aux bénévoles des parkings qui vous dirigeront alors vers l’espace réservé.</p>
                </div>

                <div className="conteneurQuestion">
                    <div className="question d-flex flex-row justify-content-between align-items-center" onClick={handleShowReponse}>
                        <h3>Y-A-T'IL DES ESPACES SPECTACLE DEDIES AUX PMR?</h3>
                        <img src="../media/icon/suivant.png"  alt="fleche d'interaction"  className="voirPlus d-flex"/>
                    </div>
                        
                    <p className={`reponse ${showReponse ? "show-reponse" : "hide"}`}> il suffit de se présenter aux bénévoles avec vos justificatifs et vous serez alors dirigés vers l’espace réservé.
                        Une personne pourra éventuellement vous accompagner dans cet espace sous réserve de place disponible. A défaut, elle pourra s’installer à proximité.</p>
                </div>
                    
            </article>
    
        </section>
    );

}
 
export default FAQ;*/