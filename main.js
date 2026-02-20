const mots = [
    "Soleil",
    "Montagne",
    "Liberte",
    "Ocean",
    "Foret",
    "Voyage",
    "Musique",
    "Etoile",
    "Courage",
    "Bonheur",
    "Riviere",
    "Aventure",
    "Nuage",
    "Horizon",
    "Passion",
    "Tempete",
    "Silence",
    "Lumiere",
    "Mystere",
    "Espoir"
];
// déclaration de variables
let motRecherche = "";
const lettreDejaJoue =[]
const letters_used =document.querySelector('#letters-used')
const boutonNewPartie = document.querySelector(".btn-primary")
const compteurhtml = document.querySelector('.compteur')
let nbErreur = 0

let compteur = 0


//lorsque l'on clique sur bouton nouvelle partie
boutonNewPartie.addEventListener("click", () => {
    

    //vider le tableau lettre deja joué + affichage lettre joué
    lettreDejaJoue.splice(0, lettreDejaJoue.length);
    letters_used.textContent = lettreDejaJoue
    
    // fonction pour selectionner mot aleatoire 
    function randomMots() {
        let nbRandom = Math.floor(Math.random() * 20);
        console.log(nbRandom)
        return motRecherche = mots[nbRandom]
    }

    // appelle de la fonction 
    randomMots()

    console.log(motRecherche)
    console.log(`${motRecherche.length}`)

    // Ajout des span en fonction du nombre de lettres dans le mot aléatoire
    const wordDisplay = document.querySelector('#word-display')
    const newSpan = "<span class=\"letter-placeholder\" > </span>"
    wordDisplay.innerHTML = newSpan
    for (let i = 0; i < motRecherche.length - 1; i++) {
        wordDisplay.insertAdjacentHTML("beforeend", "<span class=\"letter-placeholder\" > </span>")
    }
})


// ecoute les lettres appuyées
let lettreAppuyer = document.addEventListener("keydown",(event)=>{
    console.log(event.key)
    // on verifie que la lettre est entre a & z
    if (event.key.match("[a-z]")) {

        // on verifie si la lettre est déjà joué
       if (lettreDejaJoue.indexOf(event.key)!== -1){
            window.alert("Lettre déjà joué")
       }else {
            // on ajoute la lettre dans les lettres déjà joué
            lettreDejaJoue.push(event.key)
            const tableauMotRechercher = motRecherche.toLowerCase().split("");
            console.log(tableauMotRechercher)
            console.log(typeof motRecherche)
            
            // Pour chaque lettre appuyer presente dans le mot on remplace le span par la lettre
            for (let i = 0; i < tableauMotRechercher.length; i++) {
                if (tableauMotRechercher[i] === event.key) {
                    const placeholders = document.querySelectorAll('#word-display .letter-placeholder')
                    if (placeholders[i]) placeholders[i].textContent = motRecherche[i]
                        letters_used.textContent = lettreDejaJoue
                        compteur++
                }
            }
            
            // Si la lettre est valide mais non presente dans le mot on augmente la valeur du nombre d'erreur
            if (compteur === 0){
                nbErreur ++
                //ajoute le dessin si lettre fausse
                const dessinErreur = document.getElementById('error-1');
                 dessinErreur.classList.remove('hidden');
                
                compteurhtml.textContent = nbErreur
            }
            compteur = 0


            console.log(`compteur: ${compteur}`)


            
            

            
            

            
       }
    }else {
        window.alert("Lettre non reconnue")
    }
    
    
})


