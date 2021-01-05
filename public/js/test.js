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
  const url = await fetch(request).then((data) => data.url);
  const container = document.getElementById("article__background");
  container.setAttribute("style", `background-image: url(${url})`);
  container.setAttribute("value", url);
});

// *** Submit Handler for Article Form Data ***
document.getElementById("article__submit").addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.getElementById("article__title").value;
  const cover = document
    .getElementById("article__background")
    .getAttribute("value");
  const body = quill.root.innerHTML;
  const delta = quill.getContents();
  console.log(title, cover, body, delta);
});
