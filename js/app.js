//Elements
const cartBtn = document.getElementById("cart");
const modal = document.getElementById("modal");
//functions
const addHidden = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
//Events
cartBtn.addEventListener("click", () => {
  if(modal.classList.contains("hidden")){
    modal.classList.remove("hidden")
  }
  else(
    modal.classList.add("hidden")
  )
});
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    addHidden();
  }
});
