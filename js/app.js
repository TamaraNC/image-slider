const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4"
]

const arrows = document.querySelectorAll(".fas");
const image = document.querySelector(".img-container");

function slide() {
  let counter = 0;
  arrows.forEach(arrow => {
    arrow.addEventListener("click", function() {
      if (arrow.classList.contains("fa-caret-right")) {
        counter++;
        if (counter > pictures.length -1) {
          counter = 0;
        }
        image.style.backgroundImage = `url('/.img/contBcg-${counter}')`;
      }
      if (arrow.classList.contains("fa-caret-left")) {
        counter--;
        if (counter < 0) {
          counter = pictures.length -1;
        }
        image.style.backgroundImage = `url('/.img/contBcg-${counter}')`;
      }
    })
  })
}
slide();


