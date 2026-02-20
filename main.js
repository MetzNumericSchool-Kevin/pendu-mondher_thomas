const mots = [
    "Soleil",
    "Montagne",
    "Liberté",
    "Océan",
    "Forêt",
    "Voyage",
    "Musique",
    "Étoile",
    "Courage",
    "Bonheur",
    "Rivière",
    "Aventure",
    "Nuage",
    "Horizon",
    "Passion",
    "Tempête",
    "Silence",
    "Lumière",
    "Mystère",
    "Espoir"
];

const boutonNewPartie = document.querySelector(".btn-primary")

boutonNewPartie.addEventListener("click", () => {
    let motRecherche

    function randomMots() {
        let nbRandom = Math.floor(Math.random() * 20);
        console.log(nbRandom)
        motRecherche = mots[nbRandom]
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
       }
    }else {
        window.alert("Lettre non reconnue")
    }
    
    
})


