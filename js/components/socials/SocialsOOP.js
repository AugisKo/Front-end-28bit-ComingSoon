class Socialsoop {
  constructor(selector, data) {
    this.selector = selector;
    this.data = data;

    this.DOM = null;

    this.init();
  }
  init() {
    if (!this.isValidSelector() || !this.isValidData()) {
      cosole.error('ERROR: netraejo pirmines patkros');
      return false;
    }

    this.DOM = document.querySelector(this.selector);

    if (!this.DOM) {
      console.error('ERROR: nerastas elementas, pagal duota selector');
      return false;
    }
    this.render();
  }

  isValidSelector() {
    if (typeof this.selector !== 'string' || this.selector === '') {
      return false;
    }
    return true;
  }
  isValidData() {
    if (!Array.isArray(this.data) || this.data.length === 0) {
      return false;
    }
    return true;
  }
  render() {
    let HTML = '';

    for (const social of this.data) {
      HTML += `<a href="${social.href}"
                    target="_blank"
                    class="social fa fa-${social.icon}"></a>`;
    }

    this.DOM.innerHTML += HTML;
  }
}

export { Socialsoop };
