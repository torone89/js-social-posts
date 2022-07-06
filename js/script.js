// Descrizione
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

// #Milestone 3
// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// # ****BONUS**
//  1. Formattare le date in formato italiano (gg/mm/aaaa)
//  2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola  => LF).
//  3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.


// # Milestone 1
// Creiamo il nostro array di oggetti che rappresentano ciascun post.
// / Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
const post = [
    {
        idpost: 1,
        autore: "Francesco Tovani",
        imgautore: "https://unsplash.it/600/300?image=1",
        data: "07-06-2022",
        contenuto: "Contenuto del post, Desrizione immagine ecc",
        img: "https://unsplash.it/600/300?image=2",
        likes: 20,

    },

    {
        idpost: 2,
        autore: "Giovanni Grignani",
        imgautore: " ",
        data: "07-06-2022",
        contenuto: "Contenuto del post, Desrizione immagine ecc",
        img: "https://unsplash.it/600/300?image=10",
        likes: 40,

    },
    {
        idpost: 3,
        autore: "Marcio Capatonda",
        imgautore: "https://unsplash.it/600/300?image=140",
        data: "07-04-2022",
        contenuto: "Contenuto del post, Desrizione immagine ecc",
        img: "https://unsplash.it/600/300?image=421",
        likes: 220,

    },
    {
        idpost: 3,
        autore: "Marta Nerbi",
        imgautore: " ",
        data: "07-03-2022",
        contenuto: "Contenuto del post, Desrizione immagine ecc",
        img: "https://unsplash.it/600/300?image=50",
        likes: 20,

    },
    {
        idpost: 4,
        autore: "Giuseppe Nardi",
        imgautore: "https://unsplash.it/600/300?image=12",
        data: "07-02-2022",
        contenuto: "Contenuto del post, Desrizione immagine ecc",
        img: "https://unsplash.it/600/300?image=60",
        likes: 120,

    },
    {
        idpost: 5,
        autore: "Laura Rossi",
        imgautore: "https://unsplash.it/600/300?image=40",
        data: "07-01-2022",
        contenuto: "Contenuto del post, Desrizione immagine ecc",
        img: "https://unsplash.it/600/300?image=23",
        likes: 2,

    }

];
console.log(post);

// / #Milestone 2
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
