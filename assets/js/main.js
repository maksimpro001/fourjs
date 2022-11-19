const card = document.querySelectorAll(".header__card");

for (var i = 0; i < card.length; i++) {
  card[i].addEventListener("mousemove", startRotate);
  card[i].addEventListener("mouseout", stopRotate);
}

function startRotate(e) {
  const cardItem = this.querySelector(".header__card-item");
  const cardItemCenter = {
    x: cardItem.offsetWidth / 2,
    y: cardItem.offsetHeight / 2,
  };
  cardItem.style.transform =
    "rotateX(" +
    -(e.offsetY - cardItemCenter.x) / 4 +
    "deg)" +
    "rotateY(" +
    (e.offsetX - cardItemCenter.y) / 4 +
    "deg)";
}

function stopRotate(e) {
  const cardItem = this.querySelector(".header__card-item");
  cardItem.style.transform = "rotateX(0deg)" + "rotateY(0deg)";
}
