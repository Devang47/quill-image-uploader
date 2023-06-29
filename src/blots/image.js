import Quill from "quill";

// const InlineBlot = Quill.import("blots/block");
const Embed = Quill.import("blots/embed");

class LoadingImage extends Embed {
  static create(src) {
    const node = super.create();
    if (src === true) return node;

    let image = document.createElement("img");
    image.setAttribute("src", src.url);
    node.setAttribute("data-src", src.url);
    node.setAttribute("data-slug", src.slug);
    node.appendChild(image);
    return node;
  }
  deleteAt(index, length) {
    super.deleteAt(index, length);
    this.cache = {};
  }
  static value(domNode) {
    return {
      image: domNode.getAttribute("data-src"),
      slug: domNode.getAttribute("data-slug"),
    };
  }
}

LoadingImage.blotName = "image";
LoadingImage.className = "image-uploading";
LoadingImage.tagName = "div";
Quill.register({ "formats/image": LoadingImage });

export default LoadingImage;
