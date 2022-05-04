export const select = {
  cartPoducts : '#template-products',
  productsContainer: '.products .container',
  products: '.products',
  contact: '.form',
  footer: '.footer',
  about:'.about',
  pages: '.products, .footer, .form, .about',
  subPageHome: '.products, .footer, .about',
  subPageProducts: '.products, .footer',
  subPageContact: '.footer, .form',
  links: '.nav-link',
  hidden: 'hidden',
  linkHome: 'home',
  linkPoducts: 'products',
  linkContact: 'form',
};


export const templates = {
  cartProducts: Handlebars.compile(document.querySelector(select.cartPoducts).innerHTML),
};