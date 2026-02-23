// Elements
const $ = document;
const input = $.querySelector("input");
const tagsList = $.querySelector("ul");
const remainingTags = $.querySelector(".details span");
const RemoveAllBtn = $.querySelector("button");

// Stores added tags
let tags = [];

// Create a new tag when user pesses Enter
const createTags = (e) => {
  const valueInput = input.value.trim();
  let li = null;
  if (e.key === "Enter" && tags.length < 10 && valueInput) {
    valueInput.split(",").forEach((tag) => {
      if (!tags.includes(tag.toLocaleLowerCase())) {
        tags.push(tag.toLocaleLowerCase());
        li = `<li>${tag}<i onclick="removeTag(this)">×</i></li>`;
        input.insertAdjacentHTML("beforebegin", li);
        input.value = "";
        remainingTags.textContent = 10 - tags.length;
      } else {
        input.value = "";
      }
    });
  } else if (
    (e.key === "Enter" && tags.length >= 10) ||
    (e.key === "Enter" && tags.includes(valueInput.toLocaleLowerCase())) ||
    (e.key === "Enter" && valueInput === "")
  ) {
    input.value = "";
  }
};

input.addEventListener("keyup", (e) => {
  createTags(e);
});


window.removeTag = (elem) => {
  elem.parentElement.remove();
  tags.length--;
  remainingTags.textContent = 10 - tags.length;
};

RemoveAllBtn.addEventListener("click", () => {
  tags = [];
  remainingTags.textContent = 10;
  const liTags = tagsList.querySelectorAll("li");
  liTags.forEach((tag) => {
    tag.remove();
    input.value = "";
  });
});
