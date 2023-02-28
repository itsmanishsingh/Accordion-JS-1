let heading = document.querySelectorAll(".accordion h3 ");

heading.forEach((element) => {
  element.addEventListener("click", () => {
    let expended = element.nextElementSibling;
    if (expended.style.display === "none") {
      expended.style.display = "block";
    } else {
      expended.style.display = "none";
    }
  });
});

// let button = document.querySelectorAll(".accordion h3");

// button.forEach((element)=>{
//   element.addEventListener("click",()=>{
//     let expended = element.nextElementSibling;
//     if(expended.style.display === "none"){
//       expended.style.display = "block";
//     }
//     else{
//       expended.style.display = "none";
//     }
//   });
// });
