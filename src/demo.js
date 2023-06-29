import Quill from "quill";
import ImageUploader from "./quill.imageUploader.js";

Quill.debug("warn");
Quill.register("modules/imageUploader", ImageUploader);

const fullToolbarOptions = [
  [{ header: [1, 2, 3, false] }],
  ["bold", "italic"],
  ["clean"],
  ["image"],
];
var quill = new Quill("#editor", {
  theme: "snow",
  modules: {
    toolbar: {
      container: fullToolbarOptions,
    },
    imageUploader: {
      upload: (file) => {
        console.log("file got it");
        // const fileReader = new FileReader();

        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              value:
                "https://images.unsplash.com/photo-1686025479688-25042cfaa735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
              slug: "M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA",
            });
          }, 1500);

          //   fileReader.addEventListener(
          //     "load",
          //     () => {
          //       let base64ImageSrc = fileReader.result;
          //       setTimeout(() => {
          //         // resolve(base64ImageSrc);
          //         //reject('Issue uploading file');
          //       }, 1500);
          //     },
          //     false
          //   );

          //   if (file) {
          //     fileReader.readAsDataURL(file);
          //   } else {
          //     reject("No file selected");
          //   }
        });
      },
    },
  },
});

quill.on("text-change", function (delta, oldDelta, source) {
  console.log(quill.getContents());
});

quill.on("selection-change", function (range, oldRange, source) {
  if (range) {
    if (range.length == 0) {
    } else {
      var text = quill.getText(range.index, range.length);
    }
  }
});
