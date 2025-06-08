const burger = document.querySelector(".burger");
const navigation = document.querySelector(".navigation");
const links = document.querySelector(".links");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navigation.classList.toggle("active");
  links.classList.toggle("active");
});

links.addEventListener("click", () => {
  burger.classList.remove("active");
  navigation.classList.remove("active");
  links.classList.remove("active");
});
