import '../styles/About.css';

export default function About() {

    const aboutData = [

        {id:1,
        title:" Pourquoi apprendre à coder de nos jours ?",
        textData : [
            "Ouverture d'opportunités professionnelles",
            "les compétences en programmation sont très demandées et souvent bien rémunérées",
            "Créer librement",
            "Le code vous permet de donner vie à vos idées sans dépendre des autres",
            "Site web, appli, jeu vidéo, automatisation…",
            "Mieux appréhender les technologies qui gouvernent notre quotidien",
            "résolution de problèmes, pensée structurée et innovation",
        ]
        },

        {id:2,
        title:"Qu'est-ce que MauCode ?",
        textData : [
            "MauCode est une plateforme de formations en ligne spécialisée dans l’initiation à la programmation",
            "idéale pour les débutants ou ceux souhaitant découvrir le coding",
            "Les cours, dispensés avec le suivi d’un instructeur, couvrent des bases essentielles telles que :",
            "Introduction au développement web (HTML, CSS, JavaScript) ",
            "Apprentissage de Python (fondamentaux, syntaxe, projets pratiques) ",
            "Autres bases de la programmation adaptées aux nouveaux apprenants ",
            "Avec un accompagnement personnalisé et des contenus accessibles",
            "MauCode permet de se lancer sereinement dans le monde du développement",
        ]
        },

        {id:3,
        title:" Résumé du Mode de Formation",
        textData : [
            "Une fois l'inscription finalisée et le paiement effectué",
            "le processus de formation est personnalisé et interactif",
            "l'apprenant et l'instructeur établissent conjointement un emploi du temps sur mesure",
            "Les cours sont ensuite dispensés en direct via visioconférence,",
            " en utilisant des plateformes de communication comme Google Meet.",
            "Enfin, pour renforcer la pratique et garantir l'acquisition des compétences,",
            " chaque session de cours inclut des travaux pratiques (TP).",
        ]
        },
    ]

    return(
        <section className='about_main'>
            {aboutData.map((about, idx) =>(
                 <div className='about_cont' key={about.id}>
                    <h3 className='about_title'>
                        {about.title}
                    </h3>
                    <ul>
                        <li key={idx}>{about.textData}</li>
                    </ul>
                </div>
            ))}
        </section>
    )
}