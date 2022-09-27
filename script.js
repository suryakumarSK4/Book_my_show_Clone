// function log(date) {
//   return function (importance) {
//     return function (message) {
//       console.log(
//         `[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`
//       );
//     };
//   };
// }

// function a(){
//   var b = 4;
// }
// console.log(b);
// a();

// function user(name) {
//   function greetings(greet) {
//     console.log(greet + " " + name);
//   };
//   return greetings;
// }
// let u_name = user("loosu");
// // console.log(u_name);
// u_name("hello");
// u_name("hi");

//? carousel in jquery

const cardWidth = $(".movie-one").outerWidth();
// $(".movie-coll").bind("mousewheel DOMMouseScroll", function (e) {
//   return false;
// });

$(".moving-icon-2").hide();
$(".moving-icon-1").click(() => {
  $(".moving-icon-2").fadeIn(500);
  $(".movie-coll").animate({ scrollLeft: cardWidth * 5 }, 1000);
  $(".moving-icon-1").hide();
});

$(".moving-icon-2").click(() => {
  $(".moving-icon-1").fadeIn(500);
  $(".movie-coll").animate({ scrollLeft: -(cardWidth * 5) }, 1000);
  $(".moving-icon-2").hide();
});

// !  res site
let mv = document.querySelector(".list-of-movies");
let mv_img = document.querySelectorAll(".movie-img");
let mv_coll = document.querySelector(".movie-coll");
let movie_name = document.querySelectorAll(".m-name");
let ent = document.querySelector(".img-con");
let ent_im = document.querySelectorAll(".img-one");
let ent_row_2 = document.querySelector(".img-two");
let events = document.querySelectorAll(".eve-imgs");
let event_img = document.querySelectorAll(".eve-img-one");

if (mv.offsetWidth <= 375) {
  mv.classList.add("res-div");
  ent.classList.add("res-div");
  ent_row_2.classList.remove("img-two");
  mv_coll.classList.remove("movie-coll");
  mv_coll.classList.add("res-coll");
  // events.classList.add('res-div');
  for (let i = 0; i < movie_name.length; i++) {
    let len = movie_name[i].innerText;
    if (len.length > 19) {
      console.log(len);
      let str = len.substring(0, 19);
      movie_name[i].innerText = `${str}...`;
    }
  }

  for (let k = 0; k < mv_img.length; k++) {
    mv_img[k].classList.add("res-mov-img");
    mv_img[k].classList.remove("movie-img");
  }
  for (let j = 0; j < ent_im.length; j++) {
    ent_im[j].classList.add("ent-res-img");
    ent_im[j].classList.remove("img-one");
  }

  for (let l = 0; l < event_img.length; l++) {
    event_img[l].classList.add("evt-res-imgs");
    event_img[l].classList.remove("eve-img-one");
  }
  for (let m = 0; m < events.length; m++) {
    events[m].classList.add("res-div");
    // events[m].classList.remove("");
  }
} else {
  mv.classList.remove("res-div");
  mv_coll.classList.remove("res-coll");
  mv_coll.classList.add("movie-coll");

  for (let k = 0; k < mv_img.length; k++) {
    mv_img[k].classList.add("movie-img");
    mv_img[k].classList.remove("res-mov-img");
  }
  for (let m = 0; m < events.length; m++) {
    events[m].classList.remove("res-div");
    // events[m].classList.remove("");
  }
}
