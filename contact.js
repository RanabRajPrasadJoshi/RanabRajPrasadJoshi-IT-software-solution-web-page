const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Form Submitted");
  window.location.href = "index.html";
});
