const review=[
    {
            id:1,
            name:"Karishma Varshney",
            job:"Software Developer",
            img:"girl2.jpg",
            text:"Choose a job you love, and you will never have to work a day in your life."
    },
    {
            id: 2,
            name: "Anna Johnson",
            job: "Web Designer",
            img:
              "girl3.jpg",
            text:
              "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "Peter Jones",
        job: "Intern",
        img:
          "boy1.jpg",
        text:
          "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
      },
      {
        id: 4,
        name: "Bill Anderson",
        job: "The Boss",
        img:
          "boy2.jpeg",
        text:
          "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
      },

];
const img = document.getElementById("img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prev = document.querySelector(".prev_btn");
const next = document.querySelector(".next_btn");
const random = document.querySelector(".random-btn");

//we have not added the first element of the array i.e, 0. So we will take another array to copy all elements of previous array with
//adding the first element
// set starting item
let currentItem = 0;

// load initial item
//window.addEventListener("DOMContentLoaded", function () {
  //const item = review[currentItem];
  //img.src = item.img;
  //author.textContent = item.name;
  //job.textContent = item.job;
  //info.textContent = item.text;
//});
function showPerson(person) {
    const item = review[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  next.addEventListener("click", function () {
    currentItem++;
    if (currentItem >review.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  prev.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = review.length - 1;
    }
    showPerson(currentItem);
  });
  random.addEventListener("click", function () {
  
    currentItem = Math.floor(Math.random() * review.length);
    showPerson(currentItem);
  });