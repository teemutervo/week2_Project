import "./styles.css";

const addCommentButton = document.getElementById("add-comment");
const ul = document.getElementById("list");
addCommentButton.addEventListener("click", () => {
  const li = document.createElement("li");
  const body = document.querySelector("body");
  const div = document.createElement("div");
  const commentValue = document.getElementById("comment-text").value;
  const review = document.getElementById("review").value;

  li.appendChild(document.createTextNode(commentValue));
  ul.appendChild(li);

  const node1 = document.createTextNode(commentValue);
  const firstp = document.createElement("p");
  const node2 = document.createTextNode(review);
  const secondp = document.createElement("p");

  firstp.appendChild(node1);
  secondp.appendChild(node2);
  firstp.classList.add("comment-text");
  secondp.classList.add("comment-rating");

  div.appendChild(firstp);
  div.appendChild(secondp);

  div.classList.add("comment");
  body.appendChild(div);
});

function removeComments() {
  let question = "Haluatko varmasti poistaa kommentit?";
  if (confirm(question) === true) {
    ul.innerHTML = "";
  }
}

const removeCommentButton = document.getElementById("remove-comments");
removeCommentButton.addEventListener("click", removeComments);
