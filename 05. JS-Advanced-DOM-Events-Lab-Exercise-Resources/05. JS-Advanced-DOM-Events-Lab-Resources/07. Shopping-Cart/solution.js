function solve() {
   let output = document.querySelector('textarea');
   let arrOfAddButtons = Array.from(document.querySelectorAll('.add-product'));

   const cart = [];

   document.querySelector('.shopping-cart').addEventListener('click', (e)=> {
      if (e.target.tagName == 'BUTTON' && e.target.className == 'add-product') {
         const product = e.target.parentNode.parentNode;
         const title = product.querySelector('.product-title').textContent;
         const price = Number(product.querySelector('.product-line-price').textContent);

         cart.push({title, price});
         output.value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`;
      }
   });

   document.querySelector('.checkout').addEventListener('click', () => {
      const result = cart.reduce((acc, c) => {
         if (!acc.items.includes(c.title)) {
            acc.items.push(c.title);
         }
         acc.total += c.price;
         return acc;
      }, {items: [], total: 0 });

      output.value += `You bought ${result.items.join(', ')} for ${result.total.toFixed(2)}.`;
      arrOfAddButtons.map(b=>b.disabled=true);
      document.getElementsByClassName('checkout')[0].disabled = true;
   });
}     