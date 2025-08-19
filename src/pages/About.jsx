import '../styles/About.css';

export default function About() {
    const texte = [
    {
        id: 1,
        title: "Ouvrir des opportunités professionnelles",
        text1: "Que ce soit dans la tech, la finance, la santé ou même l’art,",
        text2: "les compétences en programmation sont très demandées et souvent bien rémunérées"
    },
    {
        id: 2,
        title: "Créer librement",
        text1: "Que ce soit dans la tech, la finance, la santé ou même l'art,",
        text2: "les compétences en programmation sont très demandées et souvent bien rémunérées."
    },
    {
        id: 3,
        title: "Comprendre le monde moderne",
        text1: "Site web, appli, jeu vidéo, automate…",
        text2: "Le code vous permet de donner vie à vos idées sans dépendre des autres."
    },
    {
        id: 4,
        title: "Booster sa logique et sa créativité",
        text1: "Mieux appréhender les technologies qui gouvernent notre quotidien",
        text2: "IA, réseaux sociaux, objets connectés…"
    },
    {
        id: 5,
        title: "Un apprentissage accessible",
        text1: "Le codage développe des compétences utiles dans tous les domaines",
        text2: "résolution de problèmes, pensée structurée et innovation."
    }
];

    return(
        <section className='about_main'>
            <h1 className='about_title'>
                Pourquoi apprendre à coder aujourd'hui ?
            </h1>

            <div className='about_cont'>
                {texte.map((t1) =>(
                    <div className='about_container' key={t1.id}>
                        <h3 className='about_box'>
                            {t1.title}
                        </h3>
                        <p className='about_info'>
                            {t1.text2}
                        </p>
                    </div>
                ))}
            </div>

            <h1 className='about_title'>
                Qu'est-ce que MauCode ?
            </h1>

            <div className='about_cont2'>
                MauCode est une plateforme de formations en ligne spécialisée dans l’initiation à la programmation, idéale pour les débutants ou ceux souhaitant découvrir le coding. Les cours, dispensés avec le suivi d’un instructeur, couvrent des bases essentielles telles que :

Introduction au développement web (HTML, CSS, JavaScript)

Apprentissage de Python (fondamentaux, syntaxe, projets pratiques)

Autres bases de la programmation adaptées aux nouveaux apprenants

Avec un accompagnement personnalisé et des contenus accessibles, MauCode permet de se lancer sereinement dans le monde du développement. Parfait pour acquérir des compétences utiles et créer ses premiers projets !

🚀 Démarrez votre voyage en coding avec MauCode !
            </div>
        </section>
    )
}