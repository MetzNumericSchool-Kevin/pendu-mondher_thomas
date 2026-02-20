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

let motRecherche = "";

const boutonNewPartie = document.querySelector(".btn-primary")

boutonNewPartie.addEventListener("click", () => {
    
    function randomMots() {
        let nbRandom = Math.floor(Math.random() * 20);
        console.log(nbRandom)
        return motRecherche = mots[nbRandom]
    }

    randomMots()
    console.log(motRecherche)
    console.log(`${motRecherche.length}`)

    const wordDisplay = document.querySelector('#word-display')
    const newSpan = "<span class=\"letter-placeholder\" > </span>"
    wordDisplay.innerHTML = newSpan
    for (let i = 0; i < motRecherche.length - 1; i++) {
        wordDisplay.insertAdjacentHTML("beforeend", "<span class=\"letter-placeholder\" > </span>")
    }
})

const lettreDejaJoue =[]

let lettreAppuyer = document.addEventListener("keydown",(event)=>{
    console.log(event.key)
    if (event.key.match("[a-z]")) {
       if (lettreDejaJoue.indexOf(event.key)!== -1){
            window.alert("Lettre déjà joué")
       }else {
            lettreDejaJoue.push(event.key)
            const tableauMotRechercher = motRecherche.toLowerCase().split("");
            console.log(tableauMotRechercher)
            console.log(typeof motRecherche)
// debut
            const placeholders = document.querySelectorAll('#word-display .letter-placeholder');
            for (let i = 0; i < tableauMotRechercher.length; i++) {
                if (tableauMotRechercher[i] === event.key) {
                    if (placeholders[i]) placeholders[i].textContent = motRecherche[i];
                }
            }
//fin
            
            

            
       }
    }else {
        window.alert("Lettre non reconnue")
    }
    
    
})


