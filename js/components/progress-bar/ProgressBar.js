class Progressbar {
  constructor(selector, data) {
    this.selector = selector;
    this.data = data;

    this.DOM = null;

    this.allProgressBar = null;

    this.init();
  }

  init() {
    //jei bent vienas is ju nevalidus, tai baigiame darba
    if (!this.isValidSelector() || !this.isValidData()) {
      cosole.error('ERROR: netraejo pirmines patkros');
      return false;
    }

    //susirandame reikiama vieta, pagal pateikta selector
    this.DOM = document.querySelector(this.selector);
    // jeigu vieta neegzistuoja, tai baigiame darba
    if (!this.DOM) {
      console.error('ERROR: nerastas elementas, pagal duota selector');
      return false;
    }

    // generuojame turini ir istatome i reikiama vieta
    this.render();
    this.addEvent();
  }
  //patikrinti, ar validus selector
  isValidSelector() {
    if (typeof this.selector !== 'string' || this.selector === '') {
      return false;
    }
    return true;
  }
  //patikrinti, ar validus data
  isValidData() {
    if (!Array.isArray(this.data) || this.data.length === 0) {
      return false;
    }
    return true;
  }
  render() {
    let HTML = '';
    for (const bar of this.data) {
      HTML += `
        <div class="progress-bar">
                    <div class="top">
                        <div class="title">${bar.title}</div>
                        <div class="value">${bar.value}%</div>
                    </div>
                    <div class="bottom">
                        <div class="progress" style="width: ${bar.value}%;">
                            <div class="value"></div>
                        </div>
                    </div>
                </div>
        `;
    }

    this.DOM.innerHTML += HTML;
    this.allProgressBar = document.querySelectorAll('.progress-bar');
  }

  addEvent() {
    window.addEventListener('scroll', () => {
      const screenScrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;
      const screenBottom = screenScrollPosition + screenHeight;

      for (let i = 0; i < this.allProgressBar.length; i++) {
        const element = this.allProgressBar[i];
        const elementBottom = element.offsetHeight + element.offsetTop;

        if (screenBottom >= elementBottom) {
          element.classList.add('uzkrovimas');
          console.log('animuojame');
        }
      }
    });
  }
}

export { Progressbar };
