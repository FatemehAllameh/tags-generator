// Elements
const $ = document;
const input = $.querySelector("input");
const tagsList = $.querySelector("ul");
const remainingTags = $.querySelector(".details span");
const RemoveAllBtn = $.querySelector("button");

// Stores added tags
let tags = [];

// Create a new tag when user pesses Enter
input.addEventListener("keypress", (e) => {
  console.log(e.keyCode);
  const valueInput = input.value.trim();
  let li = null;
  // Allow adding tags only if the total is less than 10
  if (e.keyCode === 13 && tags.length < 10 && valueInput) {
    li = `<li>${valueInput}<i>×</i></li>`;
    input.insertAdjacentHTML("beforebegin", li);
    tags.push(valueInput);
    input.value = "";
    remainingTags.textContent = 10 - tags.length;
  }
  // Stop adding tags and clear input when the limit is reached
  else if (e.keyCode === 13 && tags.length >= 10) {
    input.value = "";
  } else if (e.keyCode === 13 && valueInput === "") {
    input.value = "";
  }
});

RemoveAllBtn.addEventListener("click", () => {
  tags = [];
  remainingTags.textContent = 10;
  const liTags = tagsList.querySelectorAll("li");
  liTags.forEach((tag) => {
    tag.remove();
    input.value = "";
  });
});
