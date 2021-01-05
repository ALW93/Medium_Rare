// var QuillDeltaToHtmlConverter = require("quill-delta-to-html");

var quill = new Quill("#editor", {
  modules: {
    toolbar: [
      [{ font: [] }, { size: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "super" }, { script: "sub" }],
      [{ header: "1" }, { header: "2" }, "blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["direction", { align: [] }],
      ["link", "image", "video", "formula"],
      ["clean"],
    ],
  },
  placeholder: "Tell Your Story...",
  theme: "snow",
});

document.getElementById("editor").addEventListener("keyup", (e) => {
  var delta = quill.getContents();
  console.log(quill.root.innerHTML);
});
