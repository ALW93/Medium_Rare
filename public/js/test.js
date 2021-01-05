// *** Creates new Quill Editor ***
var quill = new Quill("#editor", {
  modules: {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  },
  placeholder: "Tell Your Story...",
  theme: "snow",
});

// *** Fetches Image to Fill Cover Photo ***
document.getElementById("image_fetch").addEventListener("click", async (e) => {
  e.preventDefault();
  const search = document.getElementById("Cover__Search").value;
  const request = `https://source.unsplash.com/random/1200x550/?${search}`;
  const container = document.getElementById("article__background");
  container.setAttribute("style", `background-image: url(${request})`);
  container.setAttribute("value", request);
});

document
  .getElementById("article__background")
  .addEventListener("click", (e) => {
    console.log("something", e.target.getAttribute("value"));
  });
document.getElementById("article__submit").addEventListener("click", (e) => {
  e.preventDefault();
  var delta = quill.getContents();
  console.log(delta);
  console.log(quill.root.innerHTML);
});
