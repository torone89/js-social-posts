// Descrizione
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

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
    "is_liked": false,

  },

  {
    idpost: 2,
    autore: "Giovanni Grignani",
    imgautore: " ",
    data: "07-06-2022",
    contenuto: "Contenuto del post, Desrizione immagine ecc",
    img: "https://unsplash.it/600/300?image=10",
    likes: 40,
    "is_liked": false,

  },
  {
    idpost: 3,
    autore: "Marcio Capatonda",
    imgautore: "https://unsplash.it/600/300?image=140",
    data: "07-04-2022",
    contenuto: "Contenuto del post, Desrizione immagine ecc",
    img: "https://unsplash.it/600/300?image=421",
    likes: 220,
    "is_liked": false,

  },
  {
    idpost: 4,
    autore: "Marta Nerbi",
    imgautore: " ",
    data: "07-03-2022",
    contenuto: "Contenuto del post, Desrizione immagine ecc",
    img: "https://unsplash.it/600/300?image=50",
    likes: 20,
    "is_liked": false,

  },
  {
    idpost: 5,
    autore: "Giuseppe Nardi",
    imgautore: "https://unsplash.it/600/300?image=12",
    data: "07-02-2022",
    contenuto: "Contenuto del post, Desrizione immagine ecc",
    img: "https://unsplash.it/600/300?image=60",
    likes: 120,
    "is_liked": false,

  },
  {
    idpost: 6,
    autore: "Laura Rossi",
    imgautore: "https://unsplash.it/600/300?image=40",
    data: "07-01-2022",
    contenuto: "Contenuto del post, Desrizione immagine ecc",
    img: "https://unsplash.it/600/300?image=23",
    likes: 2,
    "is_liked": false,

  }

];
console.log(post);

// / #Milestone 2
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.


// Recupero il container dadl Dom dove sucessivamente stampare la mia card
const container = document.getElementById('container');

// FUNZIONE CAMBIO  DATA AMERICANA => ITALIANA
// const renderPicture = author => {
//   const getIntials = autre=> {
//     let iniziali = ''
//     const parole = autore.split(' ')
//     for (const word of parole)
//       iniziali += word[0].toLocaleUpperCase();

//   }
//   const { imgautore, nome } = author
//   if (imgautore) return `   <img class="profile-pic" src="${imgautore}" alt="${nome}" />`
//   else {
//     const iniziali = getIntials(nome);
//     return `<div class="profile-pic-default">${iniziali}</div>`
//   }

// }

// # ****BONUS**
//  1. Formattare le date in formato italiano (gg/mm/aaaa)
const formateDate = dateString => {

  const dateArray = dateString.split('-');
  const [mese, giorno, anno] = dateArray
  return `${giorno}/${mese}/${anno}`
}


// const { idpost, autore, imgautore, data, contenuto, img, likes } = datiCard

for (let i = 0; i < post.length; i++) {
  const stampo = post[i];

  // Destructuring
  const { idpost, autore, imgautore, data, contenuto, img, likes } = stampo

  container.innerHTML += `<div class="post">
<div class="post__header">
  <div class="post-meta">
    <div class="post-meta__icon">
      <img class="profile-pic" src="${(imgautore)}" alt="${autore}" />
    </div>
    <div class="post-meta__data">
      <div class="post-meta__author">${autore}</div>
      <div class="post-meta__time">${formateDate(data)}</div>
    </div>
  </div>
</div>
<div class="post__text">
${contenuto}
</div>
<div class="post__image">
  <img src="${img}" alt="Imaggine n ${idpost}" />
</div>
<div class="post__footer">
  <div class="likes js-likes">
    <div class="likes__cta">
      <a class="like-button js-like-button" href="#" data-postid="${idpost}">
        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
        <span class="like-button__label">Mi Piace</span>
      </a>
    </div>
    <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone</div>
  </div>
</div>
</div>`
}

// #Milestone 3
// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

// const bottoneLike = document.querySelectorAll('.js-like-button');
// const contatoreLIke = document.querySelectorAll('.js-likes-counter');


// for (let i = 0; i < bottoneLike.length; i++) {
//     const correnteBottone = bottoneLike[i];
//     correnteBottone.addEventListener('click', () => {

//         correnteBottone.classList.add('like-button--liked');
//         const currentCounter = contatoreLIke[i];
//         let currentLikes = post[i].likes;
//         currentCounter.innerText = ++currentLikes;
//     })
// }


// SOLUZIONE FINALE 
// #Milestone 3
// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Bonus 3
//  3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

// Recupero tutti gli elementi

const bottoneLike = document.querySelectorAll('#container .post__footer a')
console.log(bottoneLike)
const contatoreLike = document.querySelectorAll('#container .likes__counter b');
console.log(contatoreLike)


// Bottoni like cambio colore e contatore
for (let i = 0; i < post.length; i++) {
  bottoneLike[i].addEventListener('click', function (event) {

    // Blocco il comportamento di default dell'<a> e non faccio fare refresh alla pagina
    event.preventDefault()

    // 
    const posted = post[i]
    console.log(posted.likes)

    // Verifico se parto da una condizone True o False e Aumento o Decresco i Like
    if (posted.is_liked) {
      posted.likes--
      posted.is_liked = false
    }
    else {
      posted.likes++
      posted.is_liked = true
    }

    // Stampo  i liker in pagina 
    contatoreLike[i].innerHTML = posted.likes
    console.log(posted.likes)

    // Controllo se è presente la classe "like-button-list" e aggiungo e rimuovo la classse
    if (bottoneLike[i].classList.contains('like-button--liked')) {
      bottoneLike[i].classList.remove('like-button--liked');
    } else {
      bottoneLike[i].classList.add('like-button--liked');
    }
  })
}

// Inizializzazione like da array 
for (let i = 0; i < post.length; i++) {
  if (post[i].is_liked == true) {
    bottoneLike[i].classList.add('like-button--liked');
  }
}





