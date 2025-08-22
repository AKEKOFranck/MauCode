import '../styles/PY1.css';

export default function PY1() {

    const pyData = [
        "introduction à la programmation",
         "installation ",
         "syntaxe de base (variables, types de données",
          "opérations",
           "conditions",
            "boucles",
             "fonctions",
              "Listes/Tuples",
               "Dictionnaires/Sets",
                "Gestion des erreurs",
                 "Modules standars",
                  "Programmation orientée objet 1", 
                  "Programmation orientée objet 2",
    ]









    return(
        <section className='py_main'>
            <h1 className='py_title'>
                Python-Pour débutant
            </h1>

            <div className='py_cont1'>
                <h2 className='py_title1'>
                Objectif du cours
                </h2>

                <h4 className='py_text1'>
                    L'objectif fondamental d'un tel cours est de démystifier la programmation et de fournir aux apprenants complets ("beginners") les fondations solides et la confiance nécessaires pour écrire des programmes simples mais fonctionnels en Python.

Il ne s'agit pas de faire d'eux des experts, mais de leur donner les outils de base pour qu'ils puissent continuer à apprendre et à pratiquer par eux-mêmes.
                </h4>
            </div>

            <div className='py_cont2'>
                <h2 className='py_title1'>
                    Tables des matières
                </h2>

                <ul className='py_list2'>      
                    {pyData.map((items, idx) =>(
                         <li key={idx} className='py_list2'>{items}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}