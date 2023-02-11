// function  showMessage(message) {
//     alert(message)
// }

// function showDetails(num1, num2, callback) {
//     let total = num1 + num2;
//     callback(total)
// }

// showDetails(4, 8, showMessage);

// console. log(1);
// console. log(2);
// console. log(3);
// console. log(4);
// console. log(5);



// async function startRestaurant () {
//     try {
//         await lorem;
//         await plop
//     }
//     catch {
//         console.log('na wa o')
//     }
//     finally {
//         console.log('stop spining')
//     }
// }
// console.log(startRestaurant());


// MOVIE DATABASE ALTERNATIVE
// const fetch = require("fetch");

// const options = {
//   method: 'GET',
//   url: 'https://movie-database-alternative.p.rapidapi.com/',
//   params: {s: 'Avengers Endgame', r: 'json', page: '1'},
//   headers: {
//     'X-RapidAPI-Key': 'a0a620a2d3msh6eb3a5ca1f3a164p131c69jsn41d5e46a3d94',
//     'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });


// console.log('about to fetch a rainbow');
//         fetch('rainbow.jpg')
//         .then(response => {
//            console.log(response);
//            return response.blob();
//         })
//         .then(blob => {
//             console.log(blob);
//             document.getElementById('rainbow').src = URL.createObjectURL(blob);
//         });

const API_KEY = "X8BOPDwAi7OHkqiUjoE2G2fPv1UZzsA1zYxO9TWeA21JOxZ3m9h31Wa7"

// function getphotos(images) {
//     images.map(image => {
//         console.log(image)

//     })
// }

// fetch("https://api.pexels.com/v1/search?query=people",{
//   headers: {
//     Authorization: API_KEY
//   }
// })
//    .then(resp => {
//      return resp.json()
//    })
//    .then(data => {
//      getphotos(data.photos)
//    })

   let getPhotos;
fetch("https://api.pexels.com/v1/curated?per_page=15")
  .then((response) => response.json())
  .then((data) => {
    getPhotos = data.photos;
    let picture_data = "";
    getPhotos.map((photo) => {
      console.log(photo.photographer);
      picture_data += `<div>
     <img src= ${photo.src.portrait} alt="">
      <p class="">${photo.photographer}</p>
      </div>`;
    });

document.getElementById("photos").innerHTML = picture_data;
  })