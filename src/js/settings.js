export const select = {
  cartPoducts : '#template-products',
  productsContainer: '.products .container',
  products: '.products',
  contact: '.form',
  footer: '.footer',
  about:'.about',
  pages: '.products, .form, .about',
  subPageHome: '.products, .about',
  subPageProducts: '.products',
  subPageContact: '.form',
  links: '.nav-link',
  hidden: 'hidden',
  linkHome: 'home',
  linkPoducts: 'products',
  linkContact: 'form',
};


export const templates = {
  cartProducts: Handlebars.compile(document.querySelector(select.cartPoducts).innerHTML),
};