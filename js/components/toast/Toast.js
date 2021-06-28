class Toast {
  constructos() {
    this.DOM = document.querySelector('body');

    this.render();
  }

  render() {
    const HTML = `<div class = "toast overlay">
                        TOAST
                        </div>`;

    this.DOM.insertAdjacentHTML('beforeend', HTML);
  }
}

export { Toast };
