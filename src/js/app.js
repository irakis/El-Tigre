import Products from './Products.js';
import { select } from './settings.js';

const app = {

  init: function () {
    const thisApp = this;

    new Products();
    thisApp.getElement();
    thisApp.initPageListener();
  },

  getElement: function () {
    const thisApp = this;
    thisApp.dom = {},
    thisApp.dom.subPages = document.querySelectorAll(select.pages),
    thisApp.dom.subPageHome = document.querySelectorAll(select.subPageHome),
    thisApp.dom.subPageContact = document.querySelectorAll(select.subPageContact),
    thisApp.dom.subPageProducts = document.querySelectorAll(select.subPageProducts);
  },

  initActivatePage: function (pageId) {

    const thisApp = this;

    console.log('argument przekazany do initActivatePage: ', pageId);

    for (const page of thisApp.dom.subPages) {
      console.log(select.pages);
      console.log(thisApp.dom.subPages);
      page.classList.add(select.hidden);
    }

    for (const page of thisApp.dom.subPages) {
      const attributes = page.getAttribute('class');

      console.log('attributes:', attributes);
      console.log('obiekt dom', thisApp.dom.subPageHome);
      console.log('page', page);

      if (attributes.includes(pageId) && pageId == select.linkPoducts) {
        let elementProducts = thisApp.dom.subPageProducts;
        console.log(elementProducts);
        elementProducts.classList.remove(select.hidden);
      } else if (attributes.includes(pageId) && pageId == select.linkHome) {
        thisApp.dom.subPageHome.classList.remove(select.hidden);
      } else if (attributes.includes(pageId) && pageId == select.linkContact) {
        thisApp.dom.subPageContact.classList.remove(select.hidden);
      }
    }
  },

  initPageListener: function () {
    const thisApp = this;

    const links = document.querySelectorAll(select.links);

    for (const link of links) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const clickedElement = event.target.getAttribute('href').substring(1);
        thisApp.initActivatePage(clickedElement);
      });
    }
  }
};

app.init();