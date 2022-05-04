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
    const productsContainer = document.querySelector(select.productsContainer);
    productsContainer.appendChild(thisProduct.element);
    const contactSection = document.querySelector(select.contact);
    contactSection.classList.add(select.hidden);
    
  }
}

export default Products;