let adviced = new Advice();
let ui = new UI();

function onload() {
  getAdvice();
}

onload();
const button = document.querySelector(".dice-btn");

button.addEventListener("click", () => {
  getAdvice();
});

function getAdvice() {
  adviced
    .get()
    .then((advice) => {
      ui.display(advice.advice, advice.id);
    })
    .catch((err) => {
      alert("SOMETHING WENT WRONG , ERROR OCCORED");
    });
}
