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


// Recupero il container dadl Dom dove sucessivamente stampare la mia card
const container = document.getElementById('container');

// const { idpost, autore, imgautore, data, contenuto, img, likes } = datiCard

for (let i = 0; i < post.length; i++) {
    const stampo = post[i];

    container.innerHTML += `<div class="post">
<div class="post__header">
  <div class="post-meta">
    <div class="post-meta__icon">
      <img class="profile-pic" src="${stampo.imgautore}" alt="${stampo.autore}" />
    </div>
    <div class="post-meta__data">
      <div class="post-meta__author">${stampo.autore}</div>
      <div class="post-meta__time">${stampo.data}</div>
    </div>
  </div>
</div>
<div class="post__text">
${stampo.contenuto}
</div>
<div class="post__image">
  <img src="${stampo.img}" alt="Imaggine n ${stampo.id}" />
</div>
<div class="post__footer">
  <div class="likes js-likes">
    <div class="likes__cta">
      <a class="like-button js-like-button" href="#" data-postid="${stampo.id}">
        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
        <span class="like-button__label">Mi Piace</span>
      </a>
    </div>
    <div class="likes__counter">Piace a<b id="like-counter-1" class="js-likes-counter">${stampo.likes}</b> persone</div>
  </div>
</div>
</div>`
}
