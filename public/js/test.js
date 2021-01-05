document.getElementById("image_fetch").addEventListener("click", async (e) => {
  const picture = document.createElement("img");
  picture.setAttribute(
    "src",
    "https://source.unsplash.com/random/1200x650/?nature,red"
  );
  picture.classList.add("image__result");
  document.getElementById("image_results").appendChild(picture);
});

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

document.getElementById("article__submit").addEventListener("click", (e) => {
  e.preventDefault();
  var delta = quill.getContents();
  console.log(delta);
  console.log(quill.root.innerHTML);
});
