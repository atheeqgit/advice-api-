class UI {
  constructor() {
    this.adviceNumber = document.querySelector("#advice-no");
    this.adviceText = document.querySelector(".advice-text");
  }

  display(advice, id) {
    this.adviceNumber.innerHTML = `advice #${id}`;
    this.adviceText.innerHTML = `"${advice}"`;
  }
}
