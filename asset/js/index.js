// header sidebar list
let sideBarIcon = document.getElementById("sideBarIcon");
let headerList = document.getElementById("headerList");

sideBarIcon.onclick = (_) => {
  headerList.classList.toggle("show");
};

//list big img src

let bigImg = document.querySelector(".product-image .bigImg");
let imgAll = document.querySelectorAll(".image-list .img");

let activeImg = document.querySelector(".image-list .img.active");
if (activeImg) {
  bigImg.src = activeImg.getAttribute("data-src");
}

imgAll.forEach((element) => {
  element.onclick = () => {
    imgAll.forEach((img) => {
      img.classList.remove("active");
    });
    element.classList.add("active");

    bigImg.src = element.getAttribute("data-src");
  };
});

// plus and maunos Prodect

let mom = 0;
let plus = document.getElementById("Add");
let zplus = document.getElementById("Quantity");
plus.onclick = (_) => {
  zplus.innerText = ++mom;
};

let miuns = document.getElementById("Less");
miuns.onclick = (_) => {
  if (mom == 0) {
    zplus.innerText = 0;
  } else {
    zplus.innerText = --mom;
  }
};

document.addEventListener("DOMContentLoaded", (event) => {
  const heartIcons = document.querySelectorAll(".fa-heart");

  heartIcons.forEach((icon) => {
    const productId = icon.getAttribute("data-product-id");
    const isFavorite =
      localStorage.getItem(`isFavorite_${productId}`) === "true";

    if (isFavorite) {
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");
    } else {
      icon.classList.remove("fa-solid");
      icon.classList.add("fa-regular");
    }

    icon.onclick = () => {
      const isCurrentlyFavorite = icon.classList.contains("fa-solid");
      icon.classList.toggle("fa-regular");
      icon.classList.toggle("fa-solid");

      localStorage.setItem(`isFavorite_${productId}`, !isCurrentlyFavorite);
    };
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("changData").addEventListener("click", function () {
    let modal = document.getElementById("modalAccount");
    let inputs = modal.querySelectorAll("input");
    let selects = modal.querySelectorAll("select");

    inputs.forEach(function (input) {
      input.disabled = false;
    });
    selects.forEach(function (select) {
      select.disabled = false;
    });
  });
});
