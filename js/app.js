//Elements
const cartBtn = document.getElementById("cart");
const modal = document.getElementById("modal");
//Functions
const addHidden = () => {
  modal.classList.add("hidden");
};
const modalTogle = () => {
  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");
  } else modal.classList.add("hidden");
}
//Events
cartBtn.addEventListener("click", modalTogle );
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    addHidden();
  }
});