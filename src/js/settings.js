export const select = {
  cartPoducts : '#template-products',
  productsContainer: '[data-container="productsContainer"]',
  product: '#product',
  contact: '#form',
  startingPages: '#product, #form',
  home: '#home',
  footer: 'footer',
  about:'#about',
  pages: '#home, #product, #form',
  links: '.nav-link',
  hidden: 'hidden',
};

export const settings = {
  db: {
    data: 'data',
  }
};


export const templates = {
  cartProducts: Handlebars.compile(document.querySelector(select.cartPoducts).innerHTML),
};