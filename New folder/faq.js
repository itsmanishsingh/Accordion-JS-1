// const faqData = [
//   {
//     id: 1,
//     question: "Who are we?",
//     answer:
//       "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
//   },
//   {
//     id: 2,
//     question: "What do we do?",
//     answer:
//       "Building learning communities with Our Affordable & Competent Courses",
//   },
//   {
//     id: 3,
//     question: "Are the community classes boring?",
//     answer: "No, not at all!!!",
//   },
// ];

// const accordianBody;
// const faqs = [];

// function showFaq() {

// }

// function createFaq() {

// }

// function btnStatusUpdate() {

// }

let heading = document.querySelectorAll(".accordion h3 ");

heading.forEach((element) => {
  element.addEventListener("click", () => {
    let expended = element.nextElementSibling;
    if(expended.style.display === "none"){
        expended.style.display = "block"
    }
    else{
        expended.style.display = "none";
    }
  });
});
