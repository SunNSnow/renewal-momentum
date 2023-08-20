const bookmarkBtn = document.querySelector(".bookmark__btn");
const bookmarks = document.querySelector(".bookmark__link-container");

bookmarkBtn.addEventListener("click", () =>
  bookmarks.classList.toggle("hidden")
);
