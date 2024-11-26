const devCSP = {
  directives: {
    defaultSrc: ["'self'"],
    imgSrc: [
      "'self'",
      'data:',
      'https://kitchen-sync.s3.us-east-2.amazonaws.com',
      'https://edamam-product-images.s3.amazonaws.com/',
      'https://img.spoonacular.com/',
      'blob:'],
    scriptSrc: [
      "'self'",
    ],
  },
};
const prodCSP = {

  directives: {
    defaultSrc: ["'self'"],
    imgSrc: [
      "'self'",
      'data:',
      'https://img.spoonacular.com/',
      'https://edamam-product-images.s3.amazonaws.com/',
      'https://kitchen-sync.s3.us-east-2.amazonaws.com',
      'blob:'],
  },

};

module.exports = {
  devCSP,
  prodCSP,
};
