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
    thisApp.dom.about = document.querySelector(select.about),
    thisApp.dom.contact = document.querySelector(select.contact),
    thisApp.dom.subPageHome = document.querySelectorAll(select.subPageHome),
    thisApp.dom.subPageContact = document.querySelectorAll(select.subPageContact),
    thisApp.dom.subPageProducts = document.querySelectorAll(select.subPageProducts);
  },

  initActivatePage: function (pageId) {

    const thisApp = this;

    for (const page of thisApp.dom.subPages) {
      page.classList.add(select.hidden);
    }

    for (const page of thisApp.dom.subPages) {
      const pageAttributes = page.getAttribute('class');

      if (pageAttributes.includes(pageId) && pageId == select.linkPoducts) {
        page.classList.remove(select.hidden);

      } else if (pageAttributes.includes(select.products.substring(1), 'about') && pageId == select.linkHome) {

        page.classList.remove(select.hidden);
        thisApp.dom.about.classList.remove(select.hidden);

      } else if (pageAttributes.includes(pageId) && pageId == select.linkContact) {
        page.classList.remove(select.hidden);
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