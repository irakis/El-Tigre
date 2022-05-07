import { select, templates } from './settings.js';
import utils from './utils.js';
import dataSource from './data.js';

class Products {
  constructor() {
    const thisData = dataSource.data;
    this.initPage(thisData);
  }

  initPage(thisData) {

    const thisProduct = this;
    const generatedHTML = templates.cartProducts(thisData);
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    const productsContainer = document.querySelectorAll(select.productsContainer);

    for (const containers of productsContainer) {
      containers.appendChild(thisProduct.element.cloneNode(true));
    }
    const startSections = document.querySelectorAll(select.startingPages);

    for (const section of startSections) {
      section.classList.add(select.hidden);
    }
  }
}

export default Products;