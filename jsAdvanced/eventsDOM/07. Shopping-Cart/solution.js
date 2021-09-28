function solve() {

   document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick);
   document.getElementsByClassName('checkout')[0].addEventListener('click', total)

   // console.log(products);
   const cart = [];
   const output = document.getElementsByTagName('textarea')[0];

   function onClick(ev) {
      if (ev.target.className == 'add-product') {  // ev.target.classList.contains("add-product")
         const product = ev.target.parentNode.parentNode;
         const namePr = product.querySelector('.product-title').textContent;
         const pricePr = Number(product.querySelector('.product-line-price').textContent);
         cart.push({
            namePr,
            pricePr
         });
         output.textContent += `Added ${namePr} for ${pricePr.toFixed(2)} to the cart.\n`
         // console.log(pricePr);

      }
   }
   function total() {
      const prods = new Set();
      let totalPrice = 0;
      cart.forEach(p => {
         prods.add(p.namePr);
         totalPrice += p.pricePr;
      });
      // const totalPrice = cart.reduce((t, p) => t + p.pricePr, 0);
      output.textContent +=`You bought ${[...prods.keys()].join(', ')} for ${totalPrice.toFixed(2)}.`
      const buttons = document.querySelectorAll('button');
      for (let b of buttons) {
         b.disabled = true;
      }
   }
}